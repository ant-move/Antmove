const { useReducer } = require("@amove/next");
const path = require('path');
require('./Js');
useReducer({
    File: {
        hook: 'before',
        body (node, store) {
            let _entry =store.config.entry;
            _entry.charAt(_entry.length - 1) === path.sep ? _entry = _entry : _entry = _entry + path.sep;
            node.dist = node.path.replace(store.config.entry, store.config.output);
            node.filePath = node.path.replace(store.config.entry, "");
            node.filePath = node.filePath.replace(/\.\w+$/, "");
            node.projectPath = node.path.replace(store.config.entry, "");
            node.fullname = node.projectPath.replace(/\.\w+$/, "");
            this.$node = {
                body: node,
            };
        }
    }
});
