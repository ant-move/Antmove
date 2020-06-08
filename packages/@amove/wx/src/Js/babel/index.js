const babel = require("@babel/core");
module.exports = {
    JsClassDeclaration (node, store) {
        let code = this.$node.content;
        this.$node.content = babel.transform(code, {
            plugins: [
                [
                    require("@babel/plugin-proposal-class-properties"),
                    { loose: true }
                ]
            ]
        }).code;
    }
};
