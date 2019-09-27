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
    let classNamesWrap = false;
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

        classNamesWrap = processClassNames(originFileInfo);
    }


    fileInfo.dist = fileInfo.dist.replace(/\.wxss/, '.acss');
    let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || '';
    cssContent = prettierCode(cssContent, 'scss');

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
    if (Config.options.scopeStyle && classNamesWrap) {
        const classPrefix = classNamesWrap.classPrefix;
        // let rootClassNames = classNamesWrap.value[0].split(/\s+/);

        try {
            let cssObj = css.parse(cssContent);
            cssObj.stylesheet.rules
                .forEach(function (el) {
                    if (el.selectors) {
                        el.selectors = el.selectors.map((selector,) => {
                            /**
                             * 兼容双分号选择器情况
                             */

                            selector = selector.replace(/^;+/, '');   
                            if (selector.match(/@/)) return selector;
                            
                            let ret = '';
                            // rootClassNames.forEach(function (className) {
                            //     let temp = selector.split(' ');
                            //     if (temp[0] === ('.' + className)) {
                            //         ret = selector + '-' + classPrefix;
                            //     }
                            // }); 
                            ret = '.' + classPrefix + ' ' + selector;
                            return ret;
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
    cssContent = cssContent.replace(/^(page)(\s+|\{|\.|,)/, function (...$) {
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
    if (fileInfo.deep === 0 && /\S*\.wxml/.test(fileInfo.filename) ) return;
    fs.outputFileSync(fileInfo.dist, cssContent);  
};
