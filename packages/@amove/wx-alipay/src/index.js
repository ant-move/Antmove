const { useReducer } = require("@amove/next")
require('../compiler/file');
require('../compiler');

useReducer({
    ApplicationMounted (node) {
        this.addChild("runGenerateBundleApi");
        this.addChild("runGenerateBundleComponent");
        this.addChild("generateNodeTrees");
    }
})
