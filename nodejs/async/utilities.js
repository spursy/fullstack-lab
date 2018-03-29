var urlToFilename = function (path) {
    var index = path.lastIndexOf("\\")
    return path.substring(index);
}

var getPageLinks = function (html) {
    return [];
}
exports = {
    urlToFilename: urlToFilename,
    getPageLinks: getPageLinks
};