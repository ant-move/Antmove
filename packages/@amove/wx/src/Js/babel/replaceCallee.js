const babel = require("@babel/core");
module.exports = {
    AppGlobalObject (node) {
        let { entryName, outputName, opts = {}, cb } = node;
        let code = this.$node.content;
        this.$node.content = babel.transform(code, {
            plugins: [
                [
                    function (...p) {
                        return {
                            visitor: {
                                MemberExpression (path) {
                                    if (
                                        path.node.object.type ===
                                            "Identifier" &&
                                        path.node.object.name === p[1].entryName
                                    ) {
                                        path.node.object.name = p[1].outputName;
                                        p[1].opts[
                                            path.node.property.name
                                        ] = true;
                                        if (typeof p[1].cb === "function") {
                                            p[1].cb(path.node.property.name);
                                        }
                                    }
                                },
                                Identifier (path) {
                                    if (
                                        path.node.type === "Identifier" &&
                                        path.node.name === p[1].entryName
                                    ) {
                                        path.node.name = p[1].outputName;

                                        if (typeof p[1].cb === "function") {
                                            p[1].cb(path.node.name);
                                        }
                                    }
                                }
                            }
                        };
                    },
                    {
                        entryName,
                        outputName,
                        opts,
                        cb
                    }
                ]
            ]
        }).code;
    }
};
