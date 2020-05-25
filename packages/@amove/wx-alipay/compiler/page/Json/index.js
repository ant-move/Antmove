const fs = require("fs-extra");
const path = require("path");
const { useReducer } = require("@amove/next");
const humps = require("humps");

useReducer({
    PageJson(node, store) {
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
        this.addChild({
            type: "PageJsonWindow",
            body: {
                json: this.$node.content,
            },
        });
    },
    UsingComponent(node, store) {
        let json = node.body.json.usingComponents;
        let code = {};
        for (let key in json) {
            code[humps.decamelize(key, { separator: "-" })] = "./" + json[key];
        }
        this.$node.content.usingComponents = code;
    },
    PageJsonMounted() {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content,
            },
        });
    },
});
