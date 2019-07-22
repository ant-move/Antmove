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
                
                path.node.arguments = [arg];
            }
        }
    };
};

