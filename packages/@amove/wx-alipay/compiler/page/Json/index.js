const fs = require("fs-extra");
const path = require("path");
const { useReducer } = require("@amove/next");
const humps = require("humps");

useReducer({
    PageJson (node, store) {
        this.$node.content = '';
        let keyArray = Object.keys(store.config.preAppData.nodes);
        keyArray.forEach(key => {
            let _P = path.join(store.config.entry, key);
            let _np = path.join(store.config.entry, node.body._node.projectPath);
            if (_P === _np) {
                this.$node.content = store.config.preAppData.nodes[key].json;
            }
        });
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
    UsingComponent (node) {
        let json = node.body.json.usingComponents;
        let code = {};
        for (let key in json) {
            code[humps.decamelize(key, { separator: "-" })] = "./" + json[key];
        }
        this.$node.content.usingComponents = code;
    },
    PageJsonMounted () {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content,
            },
        });
    },
});
