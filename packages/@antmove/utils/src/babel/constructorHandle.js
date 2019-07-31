module.exports = function ({ types: t }, ...p) {
    return {
        visitor: {
            CallExpression (path) {
                let name = path.node.callee.name;
                if (!(name === 'Page' || name === 'App' || name === 'Component')) return false;
                path.node.arguments.push(
                    t.Identifier(`'${name}'`)
                );
                let arg = t.CallExpression(t.Identifier(p[0].targetName + '_conponentConstructorHandle'), path.node.arguments); 
                /**
                 * data object to function
                 */
                if ((name === 'Page' || name === 'App') && path.node.arguments[0] && path.node.arguments[0].properties) {
                    path.node.arguments[0].properties
                        .forEach(function (obj) {
                            if (obj.key.name === 'data') {
                                obj.value = t.functionExpression(
                                    null,
                                    [],
                                    t.blockStatement(
                                        [t.returnStatement(obj.value)]
                                    )
                                )
                            }
                        });
                }
                path.node.arguments = [arg];
            }
        }
    };
};

