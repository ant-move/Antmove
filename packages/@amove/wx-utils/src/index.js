const { useReducer } = require("@amove/next");
require('./Wxml');
require('./Js');
require('./Json');
require('./Wxss');
useReducer({
    File: {
        hook: 'before',
        body (node, store) {
            node.dist = node.path.replace(store.config.entry, store.config.output);
            node.filePath = node.path.replace(store.config.entry, "");
            node.filePath = node.filePath.replace(/\.\w+$/, "");
            node.projectPath = node.path.replace(store.config.entry + "/", "");
            node.fullname = node.projectPath.replace(/\.\w+$/, "");
            this.$node = {
                body: node,
            };
        }
    }
})
