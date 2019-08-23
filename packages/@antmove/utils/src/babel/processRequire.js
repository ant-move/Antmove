const path = require('path');
/**
 * 支付宝路径转微信路径
 */
module.exports = function (...p) {
    function _transform (filepath) {
        let dirname = p[1].dirname + '/';
        let filename = p[1].filename;
        let requireFilePath = path.join(dirname, filepath);
        filepath = path.relative(filename, requireFilePath);
        if (!filepath.match(/^\.\.\/\.\./)) {
            filepath = filepath.substring(1);
        } else {
            filepath = filepath.substring(3);
        }
        return filepath;
    }
    return {
        visitor: {
            ImportDeclaration (path) {
                let pathValue = path.node.source.value || '';
                if (pathValue[0] === '/') {
                    pathValue = _transform(pathValue);
                }

                path.node.source.value = pathValue;
                path.node.source.raw = `"${pathValue}"`;
            },
            CallExpression (path) {
                if (path.node.callee && path.node.callee.name === 'require') {
                    let args = path.node.arguments[0];
                    if (args && args.type === 'StringLiteral') {
                        if (args.value[0] === '/') {
                            args.value = _transform(args.value);
                            args.raw = `"${args.value}"`;
                        }
                    }
                }
            }
        }
    };
};

