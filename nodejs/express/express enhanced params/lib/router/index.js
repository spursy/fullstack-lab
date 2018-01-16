'use strict'
const Route = require('./router.js');
const Layer = require('../layer/layer.js');
const methods = require('methods');
const parseUrl = require('parseurl');

const setPrototypeof = Object.setPrototypeOf;
const slice = Array.prototype.slice;

const proto = module.exports = function (options) {
    function router (req, res, next) {
        router.handle(req, res, next);
    }
    setPrototypeof(router, proto);

    router.params = {};
    router.stack = [];
    return router;
};

proto.handle = function handle (req, res, out) {
    const self = this
    const stack = this.stack;
    let idx = 0;
    const finalHandler = function (req, res) {
        console.log('reach final handler');
    }
    next();
    function next () {
        if (idx >= stack.length) {
            return setImmediate(finalHandler, null);
        }
        const path = getPathName(req);
        let layer, match, route;
        while(match !== true && idx < stack.length) {
            layer = stack[idx++];

            match = matchLayer(layer, path);
            console.log("match=" + match)
            route = layer.route;
            if (match !== true) {
                continue;
            }
            if (!route) {
                continue;
            }
            const method = req.method;
            const hasMethod = route._handle_method(method);
            if (!hasMethod) {
                match = false;
                continue;
            }
        }
        if (match !== true) {
            return finalHandler()
        }
        req.params = layer.params;
        self.process_params(layer, req, res, function() {
            if (route) {
                return layer.handle_request(req, res, next);
            }
        })
        return layer.handle_request(req, res, next);
    }
}

function getPathName (req) {
    try {
        return parseUrl(req).pathname;
    } catch (err) {
        return undefined;
    }
}

proto.route = function route (path) {
    const route = new Route(path);
    const layer = new Layer(path, {}, route.dispatch.bind(route));
    layer.route = route;
    this.stack.push(layer);
    return route;
}

function matchLayer (layer, path) {
    try{
        return layer.match(path);
    } catch(err) {
        return err;
    }
}

proto.param = function param(name, fn) {
    (this.params[name] = this.params[name] || []).push(fn);
};
proto.process_params = function processParams (layer, req, res, done) {
    const params = this.params;
    const keys = layer.keys;
    if (!keys || keys.length === 0) {
        return done();
    }
    let i = 0;
    let name
    let paramIndex = 0
    let key
    let paramVal
    let paramCallbacks

    function param () {
        if (i >= keys.length) {
            return done();
        }
        paramIndex = 0;
        key = keys[i++];
        name = key.name;
        paramVal = req.params[name];
        paramCallbacks = params[name];
        if (paramVal === undefined || !paramCallbacks) {
           return param();
        }
        paramCallback();
    }
    function paramCallback () {
        const fn = paramCallbacks[paramIndex++];
        if (!fn) return param();
        try {
            fn(req, res, paramCallback, paramVal, key.name);
        } catch (e) {
            throw e;
        }
    }

    param();
}












