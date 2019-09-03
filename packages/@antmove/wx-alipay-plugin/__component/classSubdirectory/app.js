const utils = require('../../api/utils');
const { warnLife } = utils;
const { setIfWatch } = require('./utils');
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
};

module.exports = {
    processTransformationApp (_opts, options) {
        _opts = Object.assign(_opts, options);
        _opts.onLaunch = function (res) {
            my.clearStorageSync({
                key: "logInfo"
            });
            my.clearStorageSync({
                key: "_pageMsg"
            });
            getUrl ();            
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                    warnLife(`onLaunch's return value is not support ${prop} attribute!`, `onLaunch/${prop}`);
                });
            }
            if (options.onLaunch) {
                body = {
                    params: {
                        scene: {
                            type: 0,
                            desc: "missing"
                        },
                        shareTicket: {
                            type: 0,
                            desc: "missing"
                        }
                    }
                };
                res = pre(res);

                if (typeof options.data === 'function') {
                    options.data = options.data();
                }

                options.onLaunch.call(this, res);
            }
            if (options.onPageNotFound) {
                warnLife(`There is no onPageNotFound life cycle`, "onPageNotFound");
    
            }
            if (options.onPageNotFound) {
                warnLife(`There is no onPageNotFound life cycle`,"onPageNotFound");
    
            }
        };
        _opts.onShow = function (res) {
            setIfWatch(true);
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                    warnLife(`onShow's return value is not support ${prop} attribute!`, `onShow/${prop}`);
                });
            }
            if (options.onShow) {
                body = {
                    params: {
                        scene: {
                            type: 0,
                            desc: "missing"
                        },
                        shareTicket: {
                            type: 0,
                            desc: "missing"
                        }
                    }
                };
                res = pre(res);
                options.onShow.call(this, res);
            }
        };
        _opts.onHide = function () {
            setIfWatch(false);
            if (options.onHide) {
                warnLife('', 'app/onHide');
                options.onHide.call(this);
            }
        }
        if (options.onError) {
            _opts.onError =function () {
                options.onError.call(this);
            };
        }
    }
};