const fs = require("fs-extra");
const path = require("path");
const { useReducer } = require("@amove/next");
useReducer({
    ComponentWxss (node, store) {
        this.$node.content = fs.readFileSync(
            node.body._node.path + ".wxss",
            "utf8"
        );
        let output =
            path.join(store.config.output, node.body._node.projectPath) +
            ".wxss";
        const config = store.config.preAppData.config;
        if (!this.$node.content) {
            this.$node.content = `/*${node.filePath}*/`;
        }
        this.addChild({
            type: "ProcessCss",
            key: node.path + "ProcessCss",
            dist: output,
            body: node.body,
        })
    },
});
