const fs = require('fs-extra');
const { prettierCode } = require('ant-move-utils');
const generateAppCssStyle = require('../../generate/generateApp.css.js');

module.exports = function (fileInfo, ctx) {
    fileInfo.dist = fileInfo.dist.replace(/\.wxss/, '.acss');
    let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || '';
    cssContent = cssContent.replace(/\.wxss"/g, '.acss";').replace(/\.wxss'/g, '.acss\';');

    if (fileInfo.deep === 0 || fileInfo.filename === 'app.wxss') {
        cssContent = generateAppCssStyle(cssContent, ctx.output);
    }

    cssContent = prettierCode(cssContent, 'scss');
    fs.outputFileSync(fileInfo.dist, cssContent);
};