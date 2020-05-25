const { useReducer } = require('@amove/next');
const babel = require("@babel/core");
useReducer({
    ProcessBabelPlugins (node, store) {
        let code = this.$node.content;
        store.config.babel.plugins = store.config.babel.plugins || [];
        this.$node.content = babel.transform(code, {
            plugins: [...store.config.babel.plugins]
        }).code;
    }
});
