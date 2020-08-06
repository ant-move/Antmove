/**
 * type:0 missing
 * type:1 diff
 * 
 */
const appTransformation = require('./classSubdirectory/app');
const pageTransformation = require('./classSubdirectory/page');
const componentTransformation = require('./classSubdirectory/component');

const originApp = App;
const originPage = Page;
const originComponent = Component;

App = function (options = {}) {
    let _opts = {};
    appTransformation.processTransformationApp(_opts, options);
    originApp(_opts);
},
Page = function (options = {}) {
    let _opts = {};
    pageTransformation.processTransformationPage(_opts, options);
    originPage(_opts);
},
Component = function (options = {}) {
    let _opts = {};
    componentTransformation.processTransformationComponent(_opts, options);
    
    originComponent(_opts);
}

