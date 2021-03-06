const http = require('http');
const mixin = require('merge-descriptors');
const methods = require('methods');
const Router = require('./router/index.js');

const slice = Array.prototype.slice;

module.exports = function createServer () {
    const app = function (req, res) {
        app.handle(req, res);
    }
    mixin(app, proto, false);
    app.init();
    return app;
}

const proto = Object.create(null);
proto.listen = function (port) {
    const server = http.createServer(this);
    return server.listen.apply(server, slice.call(arguments));
}

proto.init = function() {

}

proto.lazyroute = function () {
    if (!this._router) { 
        this._router = new Router({});
    }
}

proto.handle = function (req, res) {
    const router = this._router;
    router.handle(req, res);
}

methods.forEach(function(method) {
    proto[method] = function (path) { 
        this.lazyroute();
        const route = this._router.route(path);
        route[method].apply(route, slice.call(arguments, 1));
        return this;
    }
})

