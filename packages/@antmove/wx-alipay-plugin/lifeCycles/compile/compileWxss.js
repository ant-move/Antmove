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

    /**
     * page base component
     */
    cssContent = cssContent.replace(/\S*(page)(\s+|\{|\.|,)/, function (...$) {
        let className = '.' + Config.options.pageContainerClassName + $[2];
        return className;
    });

    /**
     * page 标签高度百分比样式兼容
     */
    /*
    try {
        let cssObj = css.parse(cssContent);
        cssObj.stylesheet.rules
            .forEach(function (el) {
                if (el.selectors) {
                    let bool = false;
                    el.selectors
                        .forEach(function (selector) {
                            if (selector === '.' + Config.options.pageContainerClassName) {
                                bool = true;
                            }
                        });
                    if (bool) {
                        el.declarations = 
                        el.declarations
                            .map(function (dec) {
                                if (dec.property === 'height' || dec.property === 'min-height') {
                                    dec.value = dec.value.replace(/%/, 'vh');
                                }

                                return dec;
                            });
                    }
                }
            });
        cssContent = css.stringify(cssObj);
    } catch (e) {
        console.error('[parseError]: ' + fileInfo.dist);
    }*/

    cssContent = prettierCode(cssContent, 'scss');
    fs.outputFileSync(fileInfo.dist, cssContent);
};
