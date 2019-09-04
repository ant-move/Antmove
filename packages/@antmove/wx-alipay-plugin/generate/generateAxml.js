const propsHandle = require('../props/index.js');
const proccessComponentProps = require('../component/props');
const createComponentNode = require('../component/processRelations');
const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const indentWidthChar = '  ';
const config = require('../config');
const {
    cjsToes
} = require('@antmove/utils');
/**
* process wxs
*/
function processImportJs (code) {
    return cjsToes(code);
}

/**
 * @special tags
 */
function createElement (tagName, children = []) {
    return {
        typeof: 'wxml.element',
        key: null,
        props: {},
        type: tagName,
        children
    };
}
function processSpecialTags (ast = {}) {
    if (ast.type === 'picker' && ast.children[0].length > 1) {
        ast.children[0] = [createElement('view', ast.children[0])];
        return ast;
    }
}

global.appNodesTreeStr = `module.exports = {\n`;

module.exports = function axmlRender (ast = [], fileInfo) {
    /**
     * container node render
     */
    fileInfo.nodeId = 0;
    let refRender = createComponentNode(ast[0], fileInfo);

    processPageTpl(fileInfo);
    if (typeof ast === 'string') return ast;
    let _code = '';
    let indentWidth = '';

    ast.forEach(function (tagAst) {
        _code += renderFn(tagAst, fileInfo, refRender);
    });

    if (fileInfo.isPage) {
        /**
         * page
         */
        _code = `<view class='${config.options.pageContainerClassName}'>
                ${_code}
            </view>`;
    }

    generateRenderFn(fileInfo, refRender.toJsFile());

    return _code;

    function incIndent () {
        indentWidth += indentWidthChar;
    }

    function decIndent () {
        indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length);
    }


    function renderFn (_ast, _fileInfo, parentRenderNode) {
        let _parentRenderNode = parentRenderNode;
        _ast.children = _ast.children || [];
        if (_ast.type === 'wxs' && _ast.children.length) {
            try {
                let filename = _fileInfo.dist;
                let sjsCode = _ast.children[0].value;
                let moduleName = _ast.props.module.value[0] + '.sjs';

                filename =filename + moduleName;
                fs.outputFileSync(filename, processImportJs(sjsCode));
                _ast.children[0].value = '';
                let relativePath = filename.split(path.sep);
                let _relativePath = relativePath[relativePath.length - 1];
    
                _ast.props.src = { type: 'double', value: [ './' + _relativePath ] };

                
            } catch (e) {
                if (e) {
                    console.error(e);
                }
            }
        }
        let {props} = _ast;

        let isComponentRender = proccessComponentProps(_ast, _fileInfo, axmlRender);

        if (isComponentRender) {
            _parentRenderNode = createComponentNode(_ast, _fileInfo);
            parentRenderNode.appendChild(_parentRenderNode);
        }
        processSpecialTags(_ast);
        if (_ast.type === 'textContent') {
            // todo: fix comment parse bug
            if (_ast.value.match(/-->/)) {
                return '';
            }

            return `${_ast.value}`;
        }

        let code = '';
        let tagName = _ast.type;
        let children = _ast.children;

        appendCode(`<${tagName}`);
        props = props || {};

        let attrCode = '';
        Object.keys(props)
            .forEach(function (prop) {
                let propInfo = propsHandle(prop, props[prop], ast);

                // a:for process
                if (propInfo.key === 'wx:for-items' || propInfo.key === 'a:for-items') {
                    propInfo.key = 'a:for';
                }

                if (propInfo.value === null) {
                // 无值属性
                    attrCode += ` ${propInfo.key}`;
                } else {
                    let value = propInfo.value.value[0] || '';
                    value = value.replace(/\.wxml/g, '.axml')
                        .replace(/\.wxs/g, '.sjs');

                    /**
                 * support unknown type string
                 * */
                    if (propInfo.value && propInfo.value.type === 'unknown') {
                        let singleIndex = value.indexOf("'");
                        let doubleIndex = value.indexOf('"');

                        singleIndex = singleIndex > -1 ? singleIndex : 0;
                        doubleIndex = doubleIndex > -1 ? doubleIndex : 0;

                        if (singleIndex > doubleIndex) {
                            propInfo.value.type = 'double';
                        } else {
                            propInfo.value.type = 'single';
                        }
                    }

                    if (propInfo.value && propInfo.value.type === 'double') {
                        if (propInfo.key === 'wx:else' || propInfo.key === 'a:else') {
                            attrCode += ` ${propInfo.key} `;
                        } else {
                            attrCode += ` ${propInfo.key}="${value}"`;
                        }                      
                    } else {
                        attrCode += ` ${propInfo.key}='${value}'`;
                    }
                }
            });
        /**
         * close element
         */
        if (children.length === 0) {
            appendCode(`${attrCode}>`);
            // decIndent()
        } else {
            appendCode(`${attrCode}>`);
            incIndent();

            // children element
            if (Array.isArray(children)) {

                children.forEach(function (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (subChild) {
                            appendCode(renderFn(subChild, _fileInfo, _parentRenderNode));
                        });
                    } else {
                        appendCode(renderFn(child, _fileInfo, _parentRenderNode));
                    }
                });
            } else {
                appendCode(children);
            }

            decIndent();
        }
        appendCode(`</${tagName}>`);

        return code.replace(os.EOL + os.EOL, os.EOL);

        function appendCode (appendChars) {
            if (appendChars.trim().length === 0) {
                return;
            }

            if (appendChars.startsWith('<')) {
                code += (appendChars.startsWith('</') ? os.EOL : '') +  String(indentWidth) + appendChars;
            } else if (appendChars.endsWith('>')) {
                code += appendChars + os.EOL;
            } else {
                code += indentWidth + appendChars;
            }
        }
    }
};

function processPageTpl (fileInfo = {}) {
    let bool = undefined;
    let jsonFile = fileInfo.dirname + '/' + fileInfo.basename + '.json';
    if (fs.pathExistsSync(jsonFile)) {
        let obj = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
        if (obj.component === undefined) {
            fileInfo.isPage = true;
            fileInfo.isComponent = false;
        } else {
            fileInfo.isComponent = true;
        }
    }

    return bool;
}

/**
 * 组件层级关系
 */
function generateRenderFn (fileInfo, renderStr = '') {
    let route = fileInfo.dist.replace(fileInfo.output, '');
    route = route.replace(/\.axml/, '');
    route = route.replace(/\\+/g, '/');
    
    appNodesTreeStr += `'${route}': ${renderStr},`;
}