const utils = require('../../api/utils');
const { warnLife } = utils;

const getUrl = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let _arr = url.split('/');
    let _name = _arr[_arr.length - 1];
    swan.setStorageSync({
        key: '_pageMsg',
        data: {
            pageName: _name,
            pagePath: url
        }
    });
    return url;
};
const makeEventObj = function (_opts, options) {
    let lifeArr = ['data', 'events', 'onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onShareAppMessage', 'onTitleClick', 'onOptionMenuClick', 'onPopMenuClick', 'onPullDownRefresh', 'onPullIntercept', 'onTabItemTap', 'onPageScroll', 'onReachBottom'];
    Object.keys(options).map (key => {
        if (lifeArr.indexOf(key)===-1) {
            const keyFn = options[key];
            options[key] = function (...res) {
                if (res[0]&&res[0].target) {
                    res[0].target.dataset ={ ...res[0].currentTarget.dataset}||{};
                    return keyFn.call(this, res[0]);
                } 
                return keyFn.apply(this, res);
            };
        }
    });
};

const makeLife = function (_opts, options) {
    _opts.onLoad = function (res) {
        getUrl();
        if (options.onResize) {
            warnLife("There is no onResize life cycle", "onResize");
        }
        if (options.onLoad) {
            options.onLoad.call(this, res);
        }
    };
};

module.exports = {
    processTransformationPage (_opts, options) {
        makeEventObj (_opts, options);
        _opts = Object.assign(_opts, options);
        makeLife(_opts, options);
    }
};

