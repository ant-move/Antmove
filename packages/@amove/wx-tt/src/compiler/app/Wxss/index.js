const { useReducer } = require("@amove/next");
const fs = require("fs-extra");
const path = require("path");
useReducer({
    AppWxss (node, store) {
        this.$node.content = fs.readFileSync(node.body.path, "utf8");
        let output = path.join(store.config.output, node.body.projectPath);
        this.$node.dist = output;
        if (!this.$node.content) {
            this.$node.content = `/*${node.filePath}*/`;
        }
    }
});
