const propsHandle = require('../props/index.js');
const proccessComponentProps = require('../component/props');
const os = require('os');

const indentWidthChar = '  ';

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

module.exports = function axmlRender (ast = [], fileInfo) {
    if (typeof ast === 'string') return ast;
    let _code = '';
    let indentWidth = '';

    ast.forEach(function (tagAst) {
        _code += renderFn(tagAst, fileInfo);
    });

    return _code;

    function incIndent () {
        indentWidth += indentWidthChar;
    }

    function decIndent () {
        indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length);
    }


    function renderFn (_ast, _fileInfo) {
        let {props} = _ast;

        proccessComponentProps(_ast, _fileInfo, axmlRender);
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
                        attrCode += ` ${propInfo.key}="${value}"`;
                    } else {
                        attrCode += ` ${propInfo.key}='${value}'`;
                    }
                }
            });
        /**
         * close element
         */
        if (children === undefined) {
            appendCode(`${attrCode}/>`);
            // decIndent()
        } else {
            appendCode(`${attrCode}>`);
            incIndent();

            // children element
            if (Array.isArray(children)) {

                children.forEach(function (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (subChild) {
                            appendCode(renderFn(subChild, _fileInfo));
                        });
                    } else {
                        appendCode(renderFn(child, _fileInfo));
                    }
                });
            } else {
                appendCode(children);
            }

            decIndent();
            appendCode(`</${tagName}>`);
        }

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
