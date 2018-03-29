const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

var spider = function (url, callback) {
    const filename = utilities.urlToFilename(url);
    fs.exists(filename, exists => {
        if (exists) {
            return callback(null, filename, false);
        }
        download(url, filename, err => {
            if (err) {
                return callback(err);
            }
            callback(null, filename, true);
        })
    });
}

var download = function (url, filename, callback) {
    console.log(`Downloading ${url}`);
    request(url, (err, response, body) => {
        if (err) {
            return callback(err);
        }
        saveFile(filename, body, err => {
            if (err) {
                return callback(err);
            }
            console.log(`Downloaded and saved: ${url}`);
            callback(null, body);
        });
    });
}

var saveFile = function (filename, contents, callback) {
    mkdirp(path.dirname(filename), err => {
        if (err) {
            return callback(err);
        }
        fs.writeFile(filename, contents, callback);
    });
}

