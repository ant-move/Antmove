/**
 * 微信路径转支付宝路径格式
 */
const babel = require("@babel/core");
module.exports = {
    ProcessRequireExpression (node) {
        let { body } = node;
        let code = this.$node.content;
        let depObj = {};
        try {
            let packageJson = JSON.parse(
                fs.readFileSync(body.entry + "/package.json")
            );
            depObj = Object.assign(
                packageJson["dependencies"],
                packageJson["devDependencies"]
            );
        } catch (error) {
            // error
        }

        this.$node.content = babel.transform(code, {
            plugins: [
                require("@babel/plugin-proposal-export-default-from"),
                [
                    function (...p) {
                        function replacePath (pathname = "", cb = () => {}) {
                            if (p[1].module[pathname]) return pathname;

                            if (pathname[0] === "." || pathname[0] === "/") {
                                return pathname;
                            }

                            cb(pathname);
                        }
                        return {
                            visitor: {
                                ImportDeclaration (path) {
                                    let pathValue =
                                        path.node.source.value || "";
                                    if (p[1].module[pathValue]) return false;
                                    if (
                                        !(
                                            pathValue[0] === "/" ||
                                            pathValue[0] === "."
                                        )
                                    ) {
                                        pathValue = "./" + pathValue;
                                    }

                                    path.node.source.value = pathValue;
                                    path.node.source.raw = `"${pathValue}"`;
                                },
                                CallExpression (path) {
                                    if (
                                        path.node.callee &&
                                        path.node.callee.name === "require"
                                    ) {
                                        let args = path.node.arguments[0];
                                        if (
                                            args &&
                                            args.type === "StringLiteral"
                                        ) {
                                            replacePath(args.value, function (
                                                val
                                            ) {
                                                args.value = "./" + val;
                                                args.raw = `"${args.value}"`;
                                                path.node.arguments[0] = args;
                                            });
                                        }
                                    }
                                }
                            }
                        };
                    },
                    {
                        module: depObj
                    }
                ]
            ]
        }).code;
    }
};
