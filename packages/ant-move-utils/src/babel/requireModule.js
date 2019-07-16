module.exports = function (...p) {

    function replacePath (pathname = '', cb = ()=>{}) {
        if (p[1].module[pathname]) return pathname;

        if (pathname[0] === '.' || pathname[0] === '/') {
            return pathname;
        }

        cb(pathname);
    }
    return {
        visitor: {
            ImportDeclaration (path) {
                let pathValue = path.node.source.value || '';
                if (p[1].module[pathValue]) return false;
                if (!(pathValue[0] === '/' || pathValue[0] === '.')) {
                    pathValue = './' + pathValue;
                }

                path.node.source.value = pathValue;
                path.node.source.raw = `"${pathValue}"`;
            },
            CallExpression (path) {
                if (path.node.callee && path.node.callee.name === 'require') {
                    let args = path.node.arguments[0];
                    if (args && args.type === 'StringLiteral') {
                        replacePath(args.value, function (val) {
                            args.value = './' + val;
                            args.raw = `"${args.value}"`;
                            path.node.arguments[0] = args;
                        });
                    }
                }
            }
        }
    };
};

