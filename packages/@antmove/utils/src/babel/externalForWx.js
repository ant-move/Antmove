module.exports = function ({ types: t }, ...p) {
    return {
        visitor: {
            CallExpression (path) {
                let name = path.node.callee.name;
                if (name !== 'Component') return false;
                
                if (path.node.arguments[0] && path.node.arguments[0].properties) {
                    path.node.arguments[0].properties
                        .forEach(function (obj) {
                            if (obj.key.name === 'externalClasses') {
                                let arr = [];
                                if (obj.value && obj.value.elements) {
                                    arr = obj.value.elements
                                        .map(function (val) {
                                            return val.value;
                                        });
                                }
                                p[0].externalClasses = arr;
                            }
                        });
                }

                
                
            }
        }
    };
};