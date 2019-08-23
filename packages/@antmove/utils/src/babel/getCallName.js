module.exports = function (...p) {
    return {
        visitor: {
            CallExpression (path) {
                let cbObj = {
                    App: true,
                    Page: true,
                    Component: true
                };
                let name = path.node.callee.name;
                
                if (cbObj[name]) {
                    p[1].name = name;
                }
            }
        }
    };
};

