module.exports = function ({ types: t }, ...p) {
    return {
        visitor: {
            CallExpression (path) {
                let name = path.node.callee.name;
                if (!(name === 'Page' || name === 'App' || name === 'Component')) return false;
                path.node.callee.name = p[0].targetName + name;
                // path.node.arguments.push(
                //     t.Identifier(`'${name}'`)
                // );
                // let arg = t.CallExpression(t.Identifier(p[0].targetName + '_conponentConstructorHandle'), path.node.arguments); 
                /**
                 * Transform data object to function
                 */
                if (p[0].targetName === 'alipay' && (name === 'Page' || name === 'App') && path.node.arguments[0] && path.node.arguments[0].properties) {
                    path.node.arguments[0].properties
                        .forEach(function (obj) {
                            if (obj.key && obj.key.name === 'data') {
                                obj.value = t.functionExpression(
                                    null,
                                    [],
                                    t.blockStatement(
                                        [t.returnStatement(obj.value)]
                                    )
                                );
                            }
                        });
                }
                // path.node.arguments = [arg];
                // path.node = arg;
            },
            Identifier (path) {                
                let name = path.node.name;
                if (!(name === 'Page' || name === 'App' || name === 'Component')) return false;
                path.node.name = p[0].targetName + name;
            }
        }
    };
};