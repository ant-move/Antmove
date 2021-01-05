var path = require('path');
var fs = require('fs-extra');
function getFileList (filePath) {
    let result = [];
    result = fileDisplay (filePath, result);
    result = result.map(item => {
        return item.split(filePath+path.sep)[1];
    });
    return result;
}
function fileDisplay (filePath, result) {
    let files = fs.readdirSync(filePath);
    files.forEach(function (filename) {
        var filedir = path.join(filePath, filename);
        let stats = fs.statSync(filedir);
        var isFile = stats.isFile();
        var isDir = stats.isDirectory();
        if (isDir) {
            fileDisplay(filedir, result);
        }
        if (isFile) {
            result.push(filedir);
        }
    });
    return result;
}
module.exports = getFileList;