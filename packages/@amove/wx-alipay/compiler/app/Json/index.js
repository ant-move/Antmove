const { useReducer } = require("@amove/next");

useReducer({
    AppJson (node, store) {
        // this.$node.content = JSON.parse(fs.readFileSync(node.body.path, "utf8"));
        let base = node.body.path.split('/');
        base = base.filter((f,i) => {
            return i === base.length-1 || i===base.length-2
        });
        base = base.join('/');
        this.$node.projectPath = base;
        this.$node.content = store.config.preAppData.appJson;
        if (store.config.hooks && typeof appJson === "function") {
            this.$ndoe.content = store.config.hooks.appJson(this.$node.content);
        }
        this.$node.dist = node.body.dist;
        this.addChild("ProcessAppJson");
        this.addChild({
            type: 'compilerLog',
            body: {
                _type: 'getJsonData',
                opts: {
                    pathInfo: this.$node.projectPath,
                    content: JSON.stringify(this.$node.content)
                }
            }
        })
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

