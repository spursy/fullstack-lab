let main = Object.create(null);
let Promise = require('bluebird')
let readFile = Promise.promisify(require("fs").readFile);
const path = require('path');


main.getPromises = function() {
    //return Promise.resolve('the main promises')
    // fs.readFile('./demo.txt').then((data) => {
    //     console.log(data);
    // })
    return Promise.resolve({
        then: function(onFulfill, onReject) {
            readFile("./demo.txt", "utf8").then(function(contents) {
                console.log(contents);
                onFulfill(contents);
            }).catch(function(e) {
                onReject(e);
            });
        }
    }).then(function(ret) {
        return ret;
    }, function(err) {
        return {};
    });
    // readFile("./demo.txt", "utf8").then(function(contents) {
    //     console.log(contents);
    //     return Promise.resolve(contents);
    // }).catch(function(e) {
    //     console.error(e.stack);
    // });
}

var GetFirstPromises = function() {

}

module.exports = main;