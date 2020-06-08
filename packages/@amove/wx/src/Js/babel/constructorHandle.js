const babel = require("@babel/core");
module.exports = {
    ApplicationAppJsPolyfill (node) {
        let { opts = {} } = node;
        let code = this.$node.content;
        this.$node.content = babel.transform(code, {
            plugins: [
                [
                    function ({ types: t }, ...p) {
                        return {
                            visitor: {
                                CallExpression (path) {
                                    let name = path.node.callee.name;
                                    if (
                                        !(
                                            name === "Page" ||
                                            name === "App" ||
                                            name === "Component"
                                        )
                                    )
                                        return false;
                                    path.node.callee.name =
                                        p[0].targetName + name;
                                    /**
                                     * Transform data object to function
                                     */
                                    if (
                                        p[0].targetName === "alipay" &&
                                        (name === "Page" || name === "App") &&
                                        path.node.arguments[0] &&
                                        path.node.arguments[0].properties
                                    ) {
                                        path.node.arguments[0].properties.forEach(
                                            function (obj) {
                                                if (
                                                    obj.key &&
                                                    obj.key.name === "data"
                                                ) {
                                                    obj.value = t.functionExpression(
                                                        null,
                                                        [],
                                                        t.blockStatement([
                                                            t.returnStatement(
                                                                obj.value
                                                            )
                                                        ])
                                                    );
                                                }
                                            }
                                        );
                                    }
                                }
                            }
                        };
                    },
                    opts
                ]
            ]
        }).code;
    }
};
