const appTransformation = require('./classSubdirectory/app');
const pageTransformation = require('./classSubdirectory/page');
const componentTransformation = require('./classSubdirectory/component');

module.exports = {
    baiduApp ( options = {}) {
        let _opts = {};
        appTransformation.processTransformationApp(_opts, options);
        return App(_opts);
    },
    baiduPage (options = {}) {
        let _opts = {};
        pageTransformation.processTransformationPage(_opts, options);
        return Page(_opts);
    },
    baiduComponent (options = {}) {
        let _opts = {};
        componentTransformation.processTransformationComponent(_opts, options);
        return Component(_opts);
    }
};
