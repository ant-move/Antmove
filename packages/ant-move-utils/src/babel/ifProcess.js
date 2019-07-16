module.exports = function () {
    return {
        visitor: {
            IfStatement (path) {
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
                if (name === 'wx.__target__' || name === '_my.__target__') {
                    if (value === 'alipay') {
                        path.replaceWithMultiple(path.node.consequent.body);
                    } else {
                        path.replaceWithMultiple(path.node.alternate.body);
                    }
                } else {
                    return false;
                }                
            }
        }
    };
};
