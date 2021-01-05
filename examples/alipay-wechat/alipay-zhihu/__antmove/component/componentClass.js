/**
 * type:0 missing
 * type:1 diff
 * 
 */
const appTransformation = require('./classSubdirectory/app');
const pageTransformation = require('./classSubdirectory/page');
const componentTransformation = require('./classSubdirectory/component');

module.exports = function processComponent (options = {}, type = 'Component') {
    let _opts = {};
    if (type === "App" && options) {
        appTransformation.processTransformationApp(_opts,options);

    } else if (type === 'Page' && options) {
        pageTransformation.processTransformationPage(_opts,options);

    } else if (type === 'Component' && options) {
        componentTransformation.processTransformationComponent(_opts,options);

    }  
    return _opts;
};
