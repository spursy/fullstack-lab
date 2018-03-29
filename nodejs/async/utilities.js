var urlToFilename = function (path) {
    var index = path.lastIndexOf("\\")
    return path.substring(index);
}

exports.urlToFilename = urlToFilename;