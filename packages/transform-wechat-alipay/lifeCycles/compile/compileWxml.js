const generateAxml = require('../../generate/generateAxml.js');
const { precessRelativePathOfCode } = require('ant-move-utils');
const fs = require('fs-extra');

module.exports = function (fileInfo, ctx) {
    fileInfo.dist = fileInfo.dist.replace(/\.wxml/, '.axml');
    let originCode = generateAxml(fileInfo.ast, fileInfo);
    originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry);
    fs.outputFileSync(fileInfo.dist, originCode);
};
