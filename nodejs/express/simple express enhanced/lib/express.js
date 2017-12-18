const http = require('http');
const mixin = require('merge-descriptors');
const layer = require('../layer/layer.js');
const methods = require('methods');

module.exports = function createServer() {
    const app = function(req, res) {
        app.handle(req, res);
    }
    mixin(app, proto, false);
    app.init();
    return app;
}

var proto = Object.create(null);
proto.listen = function(port) {
    const server = http.createServer(this);
    return server.listen.apply(server, arguments);
}

proto.init = function() {
    this.handles = [] 
}

proto.handle = function(req, res) {
    for (let i=0; i < this.handles.length; i++) {
        const layer = this.handles[i];
        layer.handle_request(req, res);
    }
}

methods.forEach(function(method) {
    proto[method] = function(fn) {
        console.log(method);
        console.log(typeof layer);
        const layer = new layer(method, fn);
        this.handles.push(layer);
    }
})
