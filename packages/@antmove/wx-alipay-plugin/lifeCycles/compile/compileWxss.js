const fs = require('fs-extra');
const path = require('path');
const { prettierCode } = require('@antmove/utils');
const generateAppCssStyle = require('../../generate/generateApp.css.js');
const processClassNames = require('./processClassNames');
const css = require('css');
const Config = require('../../config');

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

    /**
     * process css module path
     */
    // try {
    //     /*
    //     let cssObj = css.parse(cssContent);
    //     cssObj.stylesheet.rules
    //         .forEach(function (rule) {
    //             if (fileInfo.dist == '/Users/yangxiaofu/work/gaode/sources/app/processing/examples/dist/alipay//pages/chat/chat.acss') {
    //                 console.log(rule);
    //             }
    //             if (rule.type === 'import' && (rule.import[1] !== '/' || rule.import[1] !== '.')) {
    //                 let tempPath = path.join(fileInfo.dirname, rule.import.substring(1)).replace(/\.acss'*/g, '.wxss');
    //                 if (fs.pathExistsSync(tempPath)) {
    //                     rule.import = rule.import[0] + './' + rule.import.substring(1).trim();
    //                 } else {
    //                     rule.import = rule.import[0] + '/' + rule.import.substring(1).trim();
    //                 }
    //             }
    //         });
    //     cssContent = css.stringify(cssObj);
    //     */
    // } catch (error) {
    //     console.warn('Invalid css file. - ', fileInfo.path);        
    // }

    cssContent = cssContent.replace(/@import\s+['|"](\S+)['|"]/g, function (...$) {
        let rule = $[1];
        if ((rule[0] !== '/' && rule[0] !== '.')) {
            let tempPath = path.join(fileInfo.dirname, rule.replace(/\.acss'*/g, '.wxss'));
            if (fs.pathExistsSync(tempPath)) {
                rule = './' + rule;
            } else {
                rule = '/' + rule;
            }
        }

        return `@import '${rule}';\n`;
    });

    if (Config.options.scopeStyle && Object.keys(classNamesObj).length) {
        try {
            let cssObj = css.parse(cssContent);
            cssObj.stylesheet.rules
                .forEach(function (el) {
                    if (el.selectors) {
                        el.selectors = el.selectors.map(function (selector) {
                            let _arr = selector.split(' ');
                            let _ret = [];

                            _arr.forEach(function (className) {
                                let _className = '';
                
                                if (className[0] === '.') {
                                    _className = className.substring(1);
                                } else {
                                    _className = className;
                                }

                                if (classNamesObj[_className]) {
                                    _ret.push('.' + classNamesObj[_className].value);
                                } else {
                                    _ret.push(className);
                                }
                            });

                            selector = _ret.join(' ');
                            return selector;
                        });
                    }
                });
            cssContent = css.stringify(cssObj);
        } catch (e) {
            console.warn('Invalid css file. - ', fileInfo.path);        
        }
    }

    cssContent = prettierCode(cssContent, 'scss');
    fs.outputFileSync(fileInfo.dist, cssContent);
};
