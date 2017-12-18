const http = require('http');
const mixin = require('merge-descriptors');
const methods = require('methods');
const layer = require('../layer/layer');

module.exports = function createServer() {
    const app = function(req, res) {
        
    }
    mixin(app, proto, false);
    return app;
}

var proto = Object.create(null);
proto.listen = function(port) {
    const server = http.createServer(this);
    return server.listen.apply(server, arguments);
}

prop.init = function() {
    this.handles = [] 
}

