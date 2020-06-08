const { useReducer } = require("@amove/next");
const fs = require("fs-extra");
useReducer({
    Wxs(node, store) {
        this.$node.content = fs.readFileSync(node.body.path, "utf8");
        this.$node.dist =
            store.config.output + "/" + node.body.fullname + ".sjs";
    },
    WxsMounted() {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content,
            },
        });
    }
})
