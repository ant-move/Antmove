const propsHandle = require('../props/index.js');
const proccessComponentProps = require('../component/props');
const {
    transformEs6
} = require('@antmove/utils');
const os = require('os');

const indentWidthChar = '  ';
let isAddWxs = false;
let funName = '';
/**
 * @special tags
 */
function createElement (tagName, children = []) {
    return {
        typeof: 'element',
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

function addWxKey (props) {
    if (props["a:for"]) {
        if (!props["a:key"]) {
            props = Object.assign(props, { 'a:key': { type: 'unknown', value: ['{{index}}'] } });
        }
    }
    return props;
}

function transformTypeof (val) {
    let str = '';
    let params = '';
    if (/typeof\s*\w+/.test(val)) {
        val = val.replace(/typeof\s*\w+/, function (a) {
            str = a.replace(/ +/, ' ');
            params = str.split(' ')[1];
            a = ` custom.isTypeof(${params}) `;
            return a;
        });
    }
    if (/typeof\s*\((.+?)\)/.test(val)) {
        val = val.replace(/typeof\s*\((.+?)\)/, function (a) {
            str = a.match(/\((.+?)\)/)[0];
            params = str.slice(1, str.length - 1);
            a = ` custom.isTypeof(${params}) `;
            return a;
        });
    }
    if (!funName.includes('isTypeof')) {
        funName += "\n\t\tisTypeof: function(val) {\n\t\t\treturn typeof(val);\n\t\t},";
    }
    return val;
}

function transformFun (type, val) {
    val = val.replace(/{{(.*?)}}/, function (a) {
        type = 'is' + type.charAt(0).toUpperCase() + type.slice(1);
        let params = a.match(/\w+.?/)[0];
        params = params.slice(0, params.length - 1);
        let str = a.slice(2, a.length - 2);
        const reg = new RegExp(`${params}`);
        str = str.replace(reg, '__item');
        if (!funName.includes(type)) {
            funName += `\n\t\t${type}: function(__item) {\n\t\t\treturn ${str};\n\t\t},`;
        }
        a = `{{ custom.${type}(${params}) }}`;
        return a;
    });
    return val;
}

function appendWxs (val) {
    let arr = ['typeof', 'some', 'every', 'forEach', 'reduce', 'filter'];
    let type = '';
    let value = '';
    if (val) {
        value = val.match(/{{(.*?)}}/);
    }
    if (value !== null) {
        arr.some(item => {
            if (value[0] && value[0].includes(item)) {
                type = item;
                return true;
            }
            return false;
        });
        switch (type) {
        case 'typeof':
            val = transformTypeof(val);
            break;
        case 'some':
            val = transformFun(type, val);
            break;
        case 'every':
            val = transformFun(type, val);
            break;
        case 'forEach':
            val = transformFun(type, val);
            break;
        case 'reduce':
            val = transformFun(type, val);
            break;
        case 'filter':
            val = transformFun(type, val);
            break;
        default:
            break;
        }
        if (type !== '') {
            isAddWxs = true;
        }
    }
    return val;
}

function transformStyle (value) {
    value = value.trim();
    let reg = /{\s?[a-zA-Z]+:.+}/;
    if (reg.test(value)) {
        let val = value.slice(1, value.length - 1);
        val = val.replace(/ +/g, '');
        let comma = val.charAt(val.length - 2);
        if (comma === ',') {
            const index = val.lastIndexOf(comma);
            val = val.slice(0, index) + '}';
        }
        value = `{{ custom.transformStyle(${val}) }}`;
        isAddWxs = true;
    }
    if (!funName.includes('transformStyle')) (
        funName += `\n\t\ttransformStyle: function(value) {\n\t\t\tvalue = JSON.stringify(value);\n\t\t\tvalue = value.slice(1, value.length - 1);\n\t\t\tlet val ='';\n\t\t\tfor(var i = 0; i < value.length; i++){\n\t\t\t\tif (value[i] !== '"') {\n\t\t\t\t\tif (value.indexOf('transform') === -1) {\n\t\t\t\t\t\tif(value[i] === ','){\n\t\t\t\t\t\t\tval += ';';\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tval += '';\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) {\n\t\t\t\t\tval += '-' + value[i].toLowerCase();\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tval += value[i];\n\t\t\t}\n\t\t\treturn val;\n\t\t},`
    );
    return value;
}

module.exports = function axmlRender (ast = [], fileInfo) {
    if (typeof ast === 'string') return ast;
    let wxsLabel = `<wxs module="custom">\n`;
    let wxsCode = `\tmodule.exports = {`;
    isAddWxs = false;
    let _code = '';
    let indentWidth = '';
    ast.forEach(function (tagAst) {
        _code += renderFn(tagAst, fileInfo);
    });
    if (isAddWxs) {
        wxsCode += funName;
        wxsCode += '\n\t}';
        wxsCode = transformEs6(wxsCode);
        wxsLabel += wxsCode;
        wxsLabel += `\n</wxs>`;
        _code += wxsLabel;
    }
    funName = '';
    return _code;

    function incIndent () {
        indentWidth += indentWidthChar;
    }

    function decIndent () {
        indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length);
    }

    function renderFn (_ast, _fileInfo) {
        let { props } = _ast;
        proccessComponentProps(_ast, _fileInfo, axmlRender);
        processSpecialTags(_ast);
        _ast.value = appendWxs(_ast.value, isAddWxs);
        if (props && props['style']) {
            props['style'].value[0] = transformStyle(props['style'].value[0]);
        }
        if (_ast.props) {
            Object.values(_ast.props).forEach(obj => {
                obj['value'][0] = appendWxs(obj['value'][0]);
            });
        }
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
        props = addWxKey(props);
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
                    value = value.replace(/\.axml/g, '.wx')
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
                        if (propInfo.key === "wx:else" || propInfo.key === "scroll-y") {
                            attrCode += ` ${propInfo.key}`;
                        } else {
                            attrCode += ` ${propInfo.key}='${value}'`;
                        }    
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
                code += (appendChars.startsWith('</') ? os.EOL : '') + String(indentWidth) + appendChars;
            } else if (appendChars.endsWith('>')) {
                code += appendChars + os.EOL;
            } else {
                code += indentWidth + appendChars;
            }
        }
    }
};
