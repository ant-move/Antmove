const fs = require("fs-extra");
const path = require("path");
const { useReducer } = require("@amove/next");

useReducer({
    ComponentJson(node, store) {
        this.$node.content = JSON.parse(
            fs.readFileSync(node.body._node.path + ".json", "utf8")
        );
        let output =
            path.join(store.config.output, node.body._node.projectPath) +
            ".json";
        this.$node.dist = output;
        let json = this.$node.content;
        if (json.usingComponents) {
            this.addChild({
                type: "UsingComponent",
                body: {
                    json,
                },
            });
        }
        this.$node.content = JSON.stringify(this.$node.content);
    },
    ComponentJsonMounted() {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content,
            },
        });
    },
});
