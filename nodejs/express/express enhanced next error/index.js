const http = require('http');
const mixin = require('merge-descriptors');
const methods = require('methods');
const Router = require('./lib/router/index.js');

const slice = Array.prototype.slice;

module.exports = function createServer() {
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
    return server.listen.apply(server, arguments);
}

proto.lazyrouter = function lazyrouter () {
    if (!this._router) {
        this._router = new Router({});
    }
}

methods.forEach(function (method) {
    proto[method] = function(path) {
        this.lazyrouter();
        const router = this._router.router(path);
        router[method].apply(route, slice.call(arguments, 1));
        return this;
    }
})