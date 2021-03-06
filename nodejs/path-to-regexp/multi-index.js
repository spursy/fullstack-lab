const pathRegexp = require('path-to-regexp');

var path = "/user/:name/:age" ;
this.regexp = pathRegexp(path, this.keys = [], {})
//keys = [{"name": "name", "prefix": "/" , ............}, {"name": "age", "prefix": "/", .........}]
console.log("keys = ", JSON.stringify(this.keys));
// regexp = {}
console.log("regexp = ", JSON.stringify(this.regexp));

var activePath = "/user/tianma/18";
var match = this.regexp.exec(activePath);
//after exec = ["/user/tianma", "tianma", "18"]
console.log("after exec = ", JSON.stringify(match));

var params = {};
for (let i = 1; i < match.length; i++) {
    const key = this.keys[i - 1]
    const prop = key.name
    const val = match[i]
    if (val !== undefined || hasOwnProperty.call(params, prop)) {
        params[prop] = val
    }
}

// params = {"name": "tianma", "age": 18}
console.log("params = ", JSON.stringify(params));