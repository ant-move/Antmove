/**
 * type:0 missing
 * type:1 diff
 * 
 */
const appTransformation = require('./classSubdirectory/app');
const pageTransformation = require('./classSubdirectory/page');
const componentTransformation = require('./classSubdirectory/component');

module.exports = function processComponent (type = 'Component') {
    let _opts = {};
    // if (type === "App" && options) {

    // } else if (type === 'Page' && options) {
    //     Page(pageTransformation.processTransformationPage(_opts, options));

    // } else if (type === 'Component' && options) {
    //     Component(componentTransformation.processTransformationComponent(_opts, options));
    // }


    // return _opts;

    let core = {
        App: function (options = {}) {
            return App(appTransformation.processTransformationApp(_opts, options));
        },
        Page (options = {}) {
            return Page(pageTransformation.processTransformationPage(_opts, options));
        },
        Component (options = {}) {
            return Component(componentTransformation.processTransformationComponent(_opts, options));
        }
    };

    return core[type];
};
