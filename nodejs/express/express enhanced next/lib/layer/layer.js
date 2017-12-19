module.exports = Layer;

function Layer (method, fn) {
    this.method = method;
    this.handel = fn;
}

Layer.prototype.handel_method = function (req) {
    return this.method.toLowerCase() == req.method.toLowerCase();
}

Layer.prototype.handel_request = function (req, res, next) {
    if (!this.handel_method) return;
    const fn = this.handle;
    try {
        fn(req, res, next);
    } catch (error) {
        throw error;
    }
}