const utils = require('../../api/utils');
const { warnLife } = utils;

const getUrl = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let _arr = url.split('/');
    let _name = _arr[_arr.length - 1];
    my.setStorageSync({
        key: '_pageMsg',
        data: {
            pageName: _name,
            pagePath: url
        }
    });
    return url;
};
module.exports = {
    processTransformationPage (_opts, options) {
        _opts = Object.assign(_opts, options);
        _opts.onLoad = function (res) {
            getUrl();
            if (options.onResize) {
                warnLife("There is no onResize life cycle", "onResize");
            }
            if (options.onLoad) {
                options.onLoad.call(this,res);
            }
        };
    }
};
