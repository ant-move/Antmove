const { useReducer } = require('@amove/next');
const babel = require("@babel/core");

useReducer({
    ProcessJsGetCbName (node) {
        let { opts = {} } = node;
        let code = this.$node.content;
        this.$node.content = babel.transform(code, {
            plugins: [
                [
                    function (...p) {
                        return {
                            visitor: {
                                CallExpression (path) {
                                    let cbObj = {
                                        App: true,
                                        Page: true,
                                        Component: true
                                    };
                                    let name = path.node.callee.name;
                                    if (typeof p[1] === "object") {
                                        p[1].constructName =
                                            p[1].constructName || {};
                                    }
                                    if (cbObj[name]) {
                                        p[1].name = name;
                                        p[1].constructName =
                                            p[1].constructName || {};
                                        p[1].constructName[name] = name;
                                    }
                                    if (typeof p[1].cb === "function") {
                                        if (p[1].name) {
                                            p[1].cb(p[1]);
                                        }
                                    }
                                }
                            }
                        };
                    },
                    opts
                ]
            ]
        }).code;
        this.addChild({
            type: "InjectJsPolyfill",
            dist: node.dist,
            opts
        });
    }
});
