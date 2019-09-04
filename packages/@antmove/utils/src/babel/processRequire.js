const fs = require('fs-extra');
const path = require('path');
/**
 * 支付宝路径转微信路径
 */
module.exports = function (...p) {
    function _transform (filepath) {
        let dirname = p[1].dirname + '/';
        let filename = p[1].filename;
        let currentPath = p[1].filepath;
        if (filepath[0] !== '@' && filepath[0] === '.') {
            if (!/\.js$/.test(filepath)) {
                let requireFilePath = path.join(currentPath, filepath);
                const exit = fs.existsSync(requireFilePath);
                if (exit) {
                    const stat = fs.statSync(requireFilePath);
                    if (stat.isDirectory) {
                        requireFilePath = path.join(requireFilePath, 'index.js');
                    }
                }
                filepath = path.relative(currentPath, requireFilePath);
                filepath = './' + filepath;
            }
        }
        if (filepath[0] !== '@' && filepath[0] === '/') {
            let requireFilePath = path.join(dirname, filepath);
            filepath = path.relative(filename, requireFilePath);
            if (!filepath.match(/^\.\.\/\.\./)) {
                filepath = filepath.substring(1);
            } else {
                filepath = filepath.substring(3);
            }
        }
        filepath = filepath.replace(/\\/g, '/');
        return filepath;
    }
    return {
        visitor: {
            ImportDeclaration (path) {
                let pathValue = path.node.source.value || '';
                pathValue = _transform(pathValue);

                path.node.source.value = pathValue;
                path.node.source.raw = `"${pathValue}"`;
            },
            CallExpression (path) {
                if (path.node.callee && path.node.callee.name === 'require') {
                    let args = path.node.arguments[0];
                    if (args && args.type === 'StringLiteral') {
                        args.value = _transform(args.value);
                        args.raw = `"${args.value}"`;
                    }
                }
            }
        }
    };
};

