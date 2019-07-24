const parseTpl = require('../../parse/parse');
const fs = require('fs-extra');

module.exports = function (fileInfo) {
    return scopeStyle(fileInfo);
};

/**
 * 
 * @param {*} fileInfo - 对应的 wxml 文件信息
 */
function scopeStyle (fileInfo) {
    /**
     * isComponent
     */
    if (isComponent(fileInfo)) {
        let tplPath = fileInfo.dirname + '/' + fileInfo.basename + '.wxml';

        let ast = parseTpl.parseFile(tplPath);
        let classNames = [];
        let classNameObj = {};

        ast.forEach(function (node) {
            classNames = classNames.concat(getClass(node, classNameObj));
        });

        fileInfo.ast = ast;
        return classNameObj;
    }
    return {};
}

function getClass (ast = {}, classNameObj) {
    if (ast.type === 'textContent') {
        return [];
    }
    let classNames = [];
    if (ast.props && ast.props.class) {
        let prop = ast.props.class;
        let ret = prop.value[0].match(/\{/g);
        if (!ret) {
            let _classNames = [];
            classNames = classNames.concat(prop.value[0].split(/\s+/));
            classNames.forEach(function (className) {
                if (!classNameObj[className]) {
                    classNameObj[className] = {
                        value: 'className-' + Number(new Date()) + '-' + className
                    };
                    _classNames.push(classNameObj[className].value);
                }
            });
            prop.value[0] = _classNames.join(' ');
        }
    }

    if (ast.children && ast.children.length) {
        ast.children.forEach(function (child) {
            classNames = classNames.concat(
                getClass(child, classNameObj)
            );
        });
    }

    return classNames;
}

function isComponent (fileInfo) {
    let jsonPath = fileInfo.dirname + '/' + fileInfo.basename + '.json';

    if (!fs.pathExistsSync(jsonPath)) return false;
    let jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    return jsonContent.component;
}