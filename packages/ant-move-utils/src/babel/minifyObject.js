module.exports = function (...p) {
    return {
        visitor: {
            ObjectExpression (path) {
                let opts = p[1].opts;
                let props = path.node.properties;
                path.node.properties = [];
                props.forEach(el => {
                    let name = el.key.name || el.key.value;
                    if (name && opts[name]) {
                        path.node.properties.push(el);
                    }
                });
            }
        }
    };
};