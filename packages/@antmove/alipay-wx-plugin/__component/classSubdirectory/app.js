const utils = require('../../api/utils');
const { warnLife } = utils;
// const config = require('../../config.js');
const config = {
    env: "development"
};

const getUrl = function () {
    let pages = getCurrentPages();
    if (pages.length > 0) {
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
    }

};

const watchShakes = function () {
    let pages = getCurrentPages();
    if (pages.length > 0) {
        let url = pages[pages.length - 1].route;
        let logUrl = "pages/ant-move-runtime-logs/index";
        let specificUrl = "pages/ant-move-runtime-logs/specific/index";
        if (url === logUrl || url === specificUrl) {
            return;
        }
        wx.watchShake({
            success: function () {
                watchShakes();
                let res = wx.getStorageSync({
                    key: 'timer',
                });
                let timer = new Date().getTime();
                if (res.data === null) {
                    wx.setStorageSync(
                        'timer',
                        {
                            timer
                        }
                    );
                }
                if (res.data && res.data.timer + 5000 > timer) {
                    wx.confirm({
                        title: '温馨提示',
                        content: '是否进入警告日志页面',
                        confirmButtonText: '马上进入',
                        cancelButtonText: '暂不需要',
                        success: function (res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '../../pages/ant-move-runtime-logs/index'
                                });
                            }
                        }
                    });
                }
                if (res.data) {
                    wx.setStorageSync(
                        'timer',
                        {
                            timer
                        }
                    );
                }
            }
        });
    }


};

const makeLifes = function (_opts, options) {
    if (options.onPageNotFound) {
        warnLife(`There is no onPageNotFound life cycle`, "onPageNotFound");
    }
    _opts.onLaunch = function (res) {
        wx.clearStorageSync({
            key: "logInfo"
        });
        wx.clearStorageSync({
            key: "_pageMsg"
        });
        getUrl();
        if (config.env === "development") {
            watchShakes();
        }
        let body = {};
        function pre (params = {}) {
            return utils.defineGetter(params, body.params, function (obj, prop) {
                warnLife(`onLaunch return value is not support ${prop} attribute!`, "onLaunch");
            });
        }
        if (options.onLaunch) {
            body = {
                params: {
                    referrerInfo: {
                        props: {
                            sourceServiceId: {
                                type: 0,
                                desc: "missing",
                            }
                        }
                    }
                }
            };
            res = pre(res);
            options.onLaunch.call(this, res);
        }
        _opts.onShow = function (res) {
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                    warnLife(`onShow return value is not support ${prop} attribute!`, "onShow");
                });
            }
            if (options.onShow) {
                body = {
                    params: {
                        referrerInfo: {
                            props: {
                                sourceServiceId: {
                                    type: 0,
                                    desc: "missing",
                                }
                            }
                        }
                    }
                };
                res = pre(res);
                options.onShow.call(this, res);
            }
        };
        if (options.onHide) {
            _opts.onHide = function () {
                options.onHide.call(this);
            };
        }
        if (options.onError) {
            _opts.onError = function () {
                options.onError.call(this);
            };
        }
    };
};

module.exports = {
    processTransformationApp (_opts, options) {
        _opts = Object.assign(_opts, options);
        makeLifes(_opts, options);
        return _opts;
    }
};