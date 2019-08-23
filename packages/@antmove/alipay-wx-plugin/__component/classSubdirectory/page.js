const utils = require('../../api/utils');
const { warnLife } = utils;

const getUrl = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let _arr = url.split('/');
    let _name = _arr[_arr.length - 1];
    wx.setStorageSync(
        '_pageMsg',
        {
            pageName: _name,
            pagePath: url
        }
    );
    return url;
};

const makeLife = function (_opts, options) {
    _opts.onLoad = function (res) {
        getUrl();
        if (options.events) {
            warnLife("There is no events life cycle", "events");
        }
        if (options.onTitleClick) {
            warnLife("There is no onTitleClick life cycle", "onTitleClick");
        }
        if (options.onOptionMenuClick) {
            warnLife("There is no onOptionMenuClick life cycle", "onOptionMenuClick");
        }
        if (options.onPopMenuClick) {
            warnLife("There is no onPopMenuClick life cycle", "onPopMenuClick");
        }
        if (options.onPullIntercept) {
            warnLife("There is no onPullIntercept life cycle", "onPullIntercept");
        }
        if (options.onLoad) {
            options.onLoad.call(this, res);
        }
    };
};

module.exports = {
    processTransformationPage (_opts, options) {
        _opts = Object.assign(_opts, options);
        makeLife(_opts, options);
        return _opts;
    }
};
