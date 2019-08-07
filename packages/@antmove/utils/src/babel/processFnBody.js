module.exports = function (...p) {
    return {
        visitor: {
            ObjectExpression (path) {
                let t = p[0].types;
                let opts = p[1] && p[1].opts;
                let props = path.node.properties;
                /**
                 * onGetUserInfo(e) {}
                 * onGetUserInfo(e) { e = process(e)}
                 */
                props.forEach(el => {
                    if (el.value && el.value.type === 'FunctionExpression' && el.value.params[0]) {
                        if (opts.bindFnName === el.key.name) {
                            let expr = t.expressionStatement(
                                t.callExpression(
                                    t.memberExpression(
                                        t.Identifier('_my'),
                                        t.Identifier(opts.wrapFnName)
                                    ),
                                    [
                                        el.value.params[0],
                                        t.functionExpression(null, el.value.params, el.value.body)
                                    ]
                                )
                            );
                            
                            el.value.body = t.blockStatement([expr]);
                        }
                    }
                });
            }
        }
    };
};