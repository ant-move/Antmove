module.exports = function (...p) {
    return {
        visitor: {
            MemberExpression (path) {
                if (path.node.object.type === 'Identifier' && path.node.object.name === p[1].entryName) {
                    path.node.object.name = p[1].outputName;

                    p[1].opts[path.node.property.name] = true;

                    if (typeof p[2].cb === 'function') {
                        p[2].cb(path.node.property.name);
                    }
                }
            }
        }
    };
};