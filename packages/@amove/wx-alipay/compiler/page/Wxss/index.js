const { useReducer } = require("@amove/next");
const fs = require("fs-extra");
const path = require("path");
useReducer({
    PageWxss (node, store) {
        this.$node.content = fs.readFileSync(
            node.body._node.path + ".wxss",
            "utf8"
        );
        const config = store.config.preAppData.config;
        let output =
            path.join(store.config.output, node.body._node.projectPath) +
            ".wxss";
        if (!this.$node.content) {
            this.$node.content = `/*${node.filePath}*/`;
        }
        this.addChild({
            type: "ProcessCss",
            key: node.path + "ProcessCss",
            dist: output,
            body: node.body,
        });
        // this.addChild('ProcessFlexDirection')
        if (config.options.styleScope) {
            this.addChild("ProcessCssSemicolon");
        }
    },
});
