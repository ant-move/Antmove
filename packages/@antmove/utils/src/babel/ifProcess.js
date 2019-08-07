module.exports = function (...p) {
    return {
        visitor: {
            IfStatement (path) {
                let t = p[0].types;
                let opts = p[1];
                let name, value;
                let right = path.node.test.right;
                let left = path.node.test.left;
                let temp;

                if (left && left.type === 'StringLiteral') {
                    temp = right;
                    right = left;
                    left = temp;
                }

                if (!(right && left && left.object )) {
                    return false;
                }

                name = left.object.name + '.' + left.property.name;
                value = right.value;
                if (name === opts.code) {
                    if (value === 'alipay') {
                        path.replaceWithMultiple(path.node.consequent.body);
                    } else if (value === 'wx') {
                        path.replaceWithMultiple(t.Identifier(''));
                    } else {
                        path.node.alternate && path.replaceWithMultiple(path.node.alternate.body);
                    }
                } else {
                    return false;
                }                
            }
        }
    };
};
