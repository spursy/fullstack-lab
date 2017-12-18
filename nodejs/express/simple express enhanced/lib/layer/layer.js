const hasOwnProperty = Object.prototype.hasOwnProperty

function layer(method, fn) {
    this.method = method,
    this.handle = fn
}

layer.prototype.handle_method = function (req) {
    return this.method.toLocaleLowerCase() === req.method.toLowerCase()
}

layer.prototype.handle_request = function(req, res, next) {
    if (!this.handle_method(req)) return;
    const fn = this.handle;

    try{
        fn(req, res, next);
    } catch(err) {
        throw err
    }
}

module.exports = layer