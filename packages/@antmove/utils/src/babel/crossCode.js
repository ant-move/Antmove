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
                const typeOutput = ['wx', 'alipay', 'tt', 'qq', 'baidu', 'amap'];
                if (name === 'wx.__target__' || name === '_my.__target__') {
                    const index = typeOutput.findIndex(item => item === 'wx');
                    typeOutput.splice(index, 1);
                    if (typeOutput.includes(value)) {
                        path.replaceWithMultiple(path.node.consequent.body);
                    } else {
                        path.replaceWithMultiple(path.node.alternate.body);
                    }
                } else if (name === 'my.__target__' || name === '_wx.__target__' || name === '_swan.__target__') {
                    const index = typeOutput.findIndex(item => item === 'alipay');
                    typeOutput.splice(index, 1);
                    if (typeOutput.includes(value)) {
                        path.replaceWithMultiple(path.node.consequent.body);
                    } else {
                        path.replaceWithMultiple(path.node.alternate.body);
                    }
                } else {
                    return false;
                }                
            },
            ConditionalExpression (path) {
                if (path.node.test.type === 'BinaryExpression') {
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
                    // console.log(name, value);
                    const typeOutput = ['wx', 'alipay', 'tt', 'qq', 'baidu', 'amap'];
                    if (name === 'wx.__target__' || name === '_my.__target__') {
                        const index = typeOutput.findIndex(item => item === 'wx');
                        typeOutput.splice(index, 1);
                        if (typeOutput.includes(value)) {
                            path.replaceWithMultiple(path.node.consequent);
                        } else {
                            path.replaceWithMultiple(path.node.alternate);
                        }
                    } else if (name === 'my.__target__' || name === '_wx.__target__' || name === '_swan.__target__') {
                        const index = typeOutput.findIndex(item => item === 'alipay');
                        typeOutput.splice(index, 1);
                        if (typeOutput.includes(value)) {
                            path.replaceWithMultiple(path.node.consequent);
                        } else {
                            path.replaceWithMultiple(path.node.alternate);
                        }
                    } else {
                        return false;
                    }                
                }
            }
        }
    };
};
