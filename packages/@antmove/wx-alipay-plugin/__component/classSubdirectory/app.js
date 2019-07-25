const utils = require('../../api/utils');
const { warnLife } = utils;
// const config = require('../../config');
const config = {
    env: 'development'
};

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

const watchShakes = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let logUrl = "pages/ant-move-runtime-logs/index"; 
    let specificUrl = "pages/ant-move-runtime-logs/specific/index";
    if ( url ===logUrl || url===specificUrl ) {
        return ;
    }  
    my.watchShake({
        success: function () {
            watchShakes(); 
            let res = my.getStorageSync({
                key: 'timer', 
            });
            let timer = new Date().getTime(); 
            if (res.data === null) {
                my.setStorageSync({
                    key: 'timer',
                    data: {
                        timer
                    }
                });
            }
            if (res.data&&res.data.timer+5000>timer) {
                my.confirm({
                    title: '温馨提示',
                    content: '是否进入警告日志页面',
                    confirmButtonText: '马上进入',
                    cancelButtonText: '暂不需要',
                    success: function (res) {
                        if (res.confirm) {
                            my.navigateTo({
                                url: '../../pages/ant-move-runtime-logs/index'
                            });
                        }
                    }
                });
            }
            if (res.data) {
                my.setStorageSync({
                    key: 'timer',
                    data: {
                        timer
                    }
                });
            }
        }
    }); 
};
module.exports = {
    processTransformationApp (_opts, options) {
        _opts = Object.assign(_opts, options);
        if (options.onPageNotFound) {
            warnLife(`There is no onPageNotFound life cycle`,"onPageNotFound");

        }
        _opts.onLaunch = function (res) {
            my.clearStorageSync({
                key: "logInfo"
            });
            my.clearStorageSync({
                key: "_pageMsg"
            });
            getUrl ();   
            if (config.env === "development") {
                watchShakes();
            }             
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                    warnLife(`onLaunch's return value is not support ${prop} attribute!`, "onLaunch");
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
                options.onLaunch.call(this,res);
            }

        };
        _opts.onShow = function (res) {
            let body = {};
            function pre (params = {}) {
                return utils.defineGetter(params, body.params, function (obj, prop) {
                    warnLife(`onShow's return value is not support ${prop} attribute!`, "onShow");
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
                options.onShow.call(this,res);
            }
        };
        if (options.onHide) {
            _opts.onHide = function () {
                options.onHide.call(this);
            };
        }
        if (options.onError) {
            _opts.onError =function () {
                options.onError.call(this);
            };
        }
    }
};