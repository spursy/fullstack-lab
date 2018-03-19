const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
fs.readFile(file, function (err, ret) {
    zlib.gzip(ret, function(err, ret) {
        fs.writeFile(file + '.gz',ret, function(err, ret) {
            console.log('File compress successfully.');
        })
    });
})
