const fs = require('fs-extra');
const { prettierCode } = require('@antmove/utils');
const generateAppCssStyle = require('../../generate/generateApp.css.js');
const processClassNames = require('./processClassNames');

module.exports = function (fileInfo, ctx, inCompileWxml = false) {
    if (fileInfo.hasCompiledStyle) return false;

    let originFileInfo = null;
    let classNamesObj = {};
    if (inCompileWxml) {
        originFileInfo = fileInfo;

        /**
        * 在 compileWxml 中调用
        */
        fileInfo.parent && fileInfo.parent.children.forEach(el => {
            if (el.extname === '.wxss') {
                fileInfo = el;
            }
        });

        fileInfo.hasCompiledStyle = true;

        classNamesObj = processClassNames(originFileInfo);
    }


    fileInfo.dist = fileInfo.dist.replace(/\.wxss/, '.acss');
    let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || '';
    cssContent = cssContent.replace(/\.wxss"/g, '.acss";').replace(/\.wxss'/g, '.acss\';');

    if (fileInfo.deep === 0 || fileInfo.filename === 'app.wxss') {
        cssContent = generateAppCssStyle(cssContent, ctx.output);
    }

    if (Object.keys(classNamesObj).length) {
        Object.keys(classNamesObj)
            .forEach(function (className) {
                cssContent = cssContent.replace(new RegExp(className, 'g'), function () {
                    return classNamesObj[className].value;
                });
            });
    }

    cssContent = prettierCode(cssContent, 'scss');
    fs.outputFileSync(fileInfo.dist, cssContent);
};
