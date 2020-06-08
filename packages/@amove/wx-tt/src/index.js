const {useReducer} = require("@amove/next");
require('./compiler');
useReducer ({
    ApplicationMounted (node) {
        this.addChild("runGenerateBundleApi");
        this.addChild("runGenerateBundleComponent");
    }
})
