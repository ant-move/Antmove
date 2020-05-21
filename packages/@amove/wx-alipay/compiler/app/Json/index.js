const { useReducer } = require("@amove/next");
const fs = require("fs-extra");

useReducer({
    AppJson (node, store) {
        // this.$node.content = JSON.parse(fs.readFileSync(node.body.path, "utf8"));
        this.$node.content = store.config.preAppData.appJson;
        if (store.config.hooks && typeof appJson === "function") {
            this.$ndoe.content = store.config.hooks.appJson(this.$node.content);
        }
        this.$node.dist = node.body.dist;
        this.addChild("ProcessAppJson");
    },
    AppJsonMounted (node, store) {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content,
            },
        });
    },
});
