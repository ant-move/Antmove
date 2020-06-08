const babel = require("@babel/core");
module.exports = {
    JsConditionCompile (node, store) {
        let { opts } = node;
        let code = this.$node.content;
        this.$node.content = babel.transform(code, {
            plugins: [
                [
                    function (...p) {
                        return {
                            visitor: {
                                IfStatement (path) {
                                    let name, value;
                                    let right = path.node.test.right;
                                    let left = path.node.test.left;
                                    let temp;
                                    let dist = p[1].dist;
                                    if (left && left.type === "StringLiteral") {
                                        temp = right;
                                        right = left;
                                        left = temp;
                                    }
                                    if (!(right && left && left.object)) {
                                        return false;
                                    }
                                    name =
                                        left.object.name +
                                        "." +
                                        left.property.name;
                                    value = right.value;
                                    const typeOutput = [
                                        "wx",
                                        "alipay",
                                        "tt",
                                        "qq",
                                        "baidu",
                                        "amap"
                                    ];
                                    if (
                                        name === "wx.__target__" ||
                                        name === "_my.__target__"
                                    ) {
                                        if (
                                            typeOutput.includes(value) &&
                                            dist === value
                                        ) {
                                            path.replaceWithMultiple(
                                                path.node.consequent.body
                                            );
                                        } else {
                                            path.replaceWithMultiple(
                                                path.node.alternate.body
                                            );
                                        }
                                    } else if (
                                        name === "my.__target__" ||
                                        name === "_wx.__target__" ||
                                        name === "_swan.__target__"
                                    ) {
                                        if (
                                            typeOutput.includes(value) &&
                                            dist === value
                                        ) {
                                            path.replaceWithMultiple(
                                                path.node.consequent.body
                                            );
                                        } else {
                                            path.replaceWithMultiple(
                                                path.node.alternate.body
                                            );
                                        }
                                    } else {
                                        return false;
                                    }
                                },
                                ConditionalExpression (path) {
                                    if (
                                        path.node.test.type ===
                                        "BinaryExpression"
                                    ) {
                                        let name, value;
                                        let right = path.node.test.right;
                                        let left = path.node.test.left;
                                        let temp;
                                        if (
                                            left &&
                                            left.type === "StringLiteral"
                                        ) {
                                            temp = right;
                                            right = left;
                                            left = temp;
                                        }
                                        if (!(right && left && left.object)) {
                                            return false;
                                        }

                                        name =
                                            left.object.name +
                                            "." +
                                            left.property.name;
                                        value = right.value;
                                        const typeOutput = [
                                            "wx",
                                            "alipay",
                                            "tt",
                                            "qq",
                                            "baidu",
                                            "amap"
                                        ];
                                        if (
                                            name === "wx.__target__" ||
                                            name === "_my.__target__"
                                        ) {
                                            if (typeOutput.includes(value)) {
                                                path.replaceWithMultiple(
                                                    path.node.alternate
                                                );
                                            } else {
                                                path.replaceWithMultiple(
                                                    path.node.consequent
                                                );
                                            }
                                        } else if (
                                            name === "my.__target__" ||
                                            name === "_wx.__target__" ||
                                            name === "_swan.__target__"
                                        ) {
                                            if (typeOutput.includes(value)) {
                                                path.replaceWithMultiple(
                                                    path.node.alternate
                                                );
                                            } else {
                                                path.replaceWithMultiple(
                                                    path.node.consequent
                                                );
                                            }
                                        } else {
                                            return false;
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
    }
};
