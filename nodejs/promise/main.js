let main = Object.create(null);
let Promise = require('bluebird')
let fs = Promise.promisifyAll(require("fs"));
const path = require('path');

main.getPromises = function() {
    return new Promise(function(resolve, reject) {
        fs.readFile("./demo.txt", "utf8").then(function(contents) {
            console.log(contents);
            resolve(contents);
        }).catch(function(e) {
            reject(e);
        });
    })
}

var GetFirstPromises = function() {

}

module.exports = main;