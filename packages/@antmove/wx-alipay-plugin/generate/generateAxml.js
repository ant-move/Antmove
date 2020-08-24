const propsHandle = require('../props/index.js');
const proccessComponentProps = require('../component/props');
const createComponentNode = require('../component/processRelations');
const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const indentWidthChar = '  ';
const config = require('../config');
const {
    cjsToes,
    processMixTemplate
} = require('@antmove/utils');
const wxsApp = require('./generateWxsDep');
const { parseString, parseFile } = require('../parse/parse')
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
    if (ast.type === 'picker' && ast.children[0] && ast.children[0].length > 1) {
        ast.children[0] = [createElement('view', ast.children[0])];
        return ast;
    }
}

global.appNodesTreeStr = `module.exports = {\n`;

const isParseTemplate = true


module.exports = function axmlRender (ast = [], fileInfo) {
    // 保存模板的声明
    const includeCustomCompTpls = {}

    /**
     * container node render
     */
    fileInfo.nodeId = 0;
    let refRender = createComponentNode(ast[0], fileInfo);
    processComponentIs(fileInfo);
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


    function processTempalte(ast) {
        const { props } = ast
        const templateName = props.is.value.join('')
        const replacedChildren = includeCustomCompTpls[templateName]

        // console.log('template is', templateName)
        ast.type = 'block'

        if (ast.props.data) {
            ast.props = {
                ...ast.props,
                "wx:for": {
                    type: "unknown",
                    // value: ast.props.data.value.map(str => str.replace(/(\w+)/, '[ $1 ]')),
                    value: [processData()]
                },
                "wx:for-item": {
                    type: "unknown",
                    value: ["item"]
                }
            }

            // todo: 表达式没处理
            ast.children = parseString(replacedChildren.map(childAst => {
                return renderFn(childAst, fileInfo, refRender)
            }).join('').replace(/{{\s*(\w+)\s*}}/g, '{{item.$1}}'))

        } else {
            ast.children = replacedChildren
        }

        ast.props._is = ast.props.is

        delete ast.props.is
        delete ast.props.data

        function processData() {
            try {

                const value = ast.props.data.value[0].match(/\s*\{\s*\{\s*([^}]+)\s*\}\s*\}/)[1]

                // data: item 或者 data, item
                // 再套一层大括号
                if (/,|:/.test(value)) {
                    return `{{ [{ ${value} }] }}`
                }
                // data
                else {
                    return `{{ [ ${value} ] }}`
                }
            } catch (err) {
                console.log(ast.props)
                console.log('err', err)
            }
        }
    }

    // todo: 后期优化，只对用了自定义组件的页面使用
    function includeCustomComp(ast) {
        return true
    }

    function parseImportTemplate(ast) {
        const srcVal = ast.props.src.value[0]

        // console.log('Import template', srcVal)

        const templatePath = path.join(/^\//.test(srcVal) ? fileInfo.entry : fileInfo.dirname, srcVal)
        const templatesAst = parseFile(templatePath).filter(ast => ast.type === 'template' && ast.props.name)

        templatesAst.forEach(templateAst => {
           const name = templateAst.props.name.value[0]
           includeCustomCompTpls[name] = templateAst.children
        })
    }

    function renderFn (_ast, _fileInfo, parentRenderNode) {
        // 处理使用自定义模板
        // 对于template的处理，必须把template的定义或者引入放在使用前

        if (isParseTemplate) {
            // 处理模板的定义
            if (_ast.type === 'template' && _ast.props.name && includeCustomComp(_ast)) {
                includeCustomCompTpls[_ast.props.name.value.join('')] = _ast.children
            }

            // 处理模板的引入
            if (_ast.type === 'import' && /wxml$/.test(_ast.props.src.value[0])) {
                parseImportTemplate(_ast)
                return ''
            }

            // 处理模板的使用
            if (_ast.type === 'template' && _ast.props.is && includeCustomCompTpls[_ast.props.is.value.join('')]) {
                processTempalte(_ast, _fileInfo)
            }
        }

        let _parentRenderNode = parentRenderNode;
        _ast.children = _ast.children || [];
        if (!config.hasWxs) {
            let bool = processSjs(_ast, _fileInfo);

            if (bool) return '';
        }
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

        
        if (_ast.type === 'span') {
            _ast.type = 'text';
        }
        if (_ast.type === 'div') {
            _ast.type = 'view';
        }
        if (_ast.type === 'i') {
            _ast.type = 'icon';
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
                // wx-if => a:if  
                if (propInfo.key === 'wx-if') {
                    propInfo.key = 'a:if';
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
                        if ((propInfo.key === "a:key" || propInfo.key === "wx:key") && !/{{/.test(value)) {
                            attrCode +=  ` ${propInfo.key}='{{${value}}}'`
                        } else {
                            attrCode += ` ${propInfo.key}='${value}'`;
                        }
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
            let isType = processMixTemplate('alipay', _ast);
            if (!isType) return
            if (appendChars.trim().length === 0) {
                return;
            }

            // if (appendChars.startsWith('<')) {
            //     code += (appendChars.startsWith('</') ? os.EOL : '') +  String(indentWidth) + appendChars;
            // } else if (appendChars.endsWith('>')) {
            //     code += appendChars + os.EOL;
            // } else {
            //     code += indentWidth + appendChars;
            // }
            if (appendChars.startsWith('<')) {
                code += (appendChars.startsWith('</') && !/<\/text>/.test(appendChars) ? os.EOL : '') +  String(indentWidth) + appendChars;
            } else if (appendChars.endsWith('>')) {
                if (/<\/text>/.test(appendChars)) {
                    code += appendChars
                } else {
                    code += appendChars + os.EOL;
                }
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

/**
 * sjs exports to props object
 */
function processSjs (_ast, _fileInfo) {
    let route = _fileInfo.dist.replace(_fileInfo.output, '');
    route = route.replace(/\.axml/, '');
    route = route.replace(/\\+/g, '/');
    let bool = false;
    if (_ast.type === 'wxs') {
        if (_ast.children.length) {
            /**
             * 内联 wxs 处理
             */
            try {
                let filename = _fileInfo.dist;
                let sjsCode = _ast.children[0].value;
                let moduleName = _ast.props.module.value[0];
                filename = filename.replace('.axml', '.');
                let wxsPath = filename;
                wxsPath = wxsPath.replace(_fileInfo.output, '');

                wxsPath = wxsPath + moduleName + 'sjs.js';

                if (sjsCode.match(/\s*getRegExp/g)) {
                    let preCode = `
                    function getRegExp (p1, p2) {
                        return new RegExp(p1, p2);
                    }
                    \n
                    `;
                    sjsCode = preCode + sjsCode;
                }

                fs.outputFileSync(filename + moduleName + 'sjs.js', sjsCode);
                _ast.children[0].value = '';


                wxsApp.createDep(route, wxsPath, moduleName, _fileInfo.output);

                // _ast.props.src = { type: 'double', value: [ './' + _relativePath ] };
                bool = true;
            } catch (e) {
                if (e) {
                    console.error(e);
                }
            }
        } else {
            let filename = _fileInfo.dist;
            let moduleName = _ast.props.module.value[0];
            let wxsPath = _ast.props.src.value[0] + '.js';
            wxsPath = path.join(filename, '../', wxsPath);
            wxsPath = wxsPath.replace(_fileInfo.output, '');

            if (wxsPath[0] !== '/') {
                wxsPath = '/' + wxsPath;
            }
            wxsApp.createDep(route, wxsPath, moduleName, _fileInfo.output);
            bool = true;
        }
    }

    return bool;
}

function processComponentIs (fileInfo) {
    // let dist = fileInfo.dist.replace(/\.axml$/, '.is.js');
    let isPath = fileInfo.dist.replace(fileInfo.output, '')
        .replace(/\.axml$/, '').replace(/\\/g, "/");

    if (fileInfo.parent) {
        fileInfo.parent.is = isPath;
    }

}
