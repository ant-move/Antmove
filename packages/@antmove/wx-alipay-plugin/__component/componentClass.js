/**
 * type:0 missing
 * type:1 diff
 * 
 */
const appTransformation = require('./classSubdirectory/app');
const pageTransformation = require('./classSubdirectory/page');
const componentTransformation = require('./classSubdirectory/component');

module.exports = function processComponent ( type = 'Component') {
    const core = {
        App: function (options = {}) {
            let _opts = {};
            appTransformation.processTransformationApp(_opts, options);
            App(_opts);
        },
        Page: function (options = {}) {
            let _opts = {};
            pageTransformation.processTransformationPage(_opts, options);
            Page(_opts);
        },
        Component: function (options = {}) {
            let _opts = {};
            componentTransformation.processTransformationComponent(_opts, options);
            
            Component(_opts);
        }
    };

    return core[type];
};
