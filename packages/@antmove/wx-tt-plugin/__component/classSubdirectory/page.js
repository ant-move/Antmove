const utils = require('../../api/utils');
const { warnLife } = utils;
const config = require('../../api/config');

const getUrl = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].__route__;
    let _arr = url.split('/');
    let _name = _arr[_arr.length - 1];
    tt.setStorageSync({
        key: '_pageMsg',
        data: {
            pageName: _name,
            pagePath: url
        }
    });
    return url;
};
const getLogInfo = function () {
    let num = 0;
    let info = tt.getStorageSync({
        key: '__antmove_loginfo'
    }).data.pages;
    info.forEach(function (v, i) {
        num += v.logs.length;
    });
    return num;
};

const watchShakes = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let logUrl = "pages/ant-move-runtime-logs/index"; 
    let specificUrl = "pages/ant-move-runtime-logs/specific/index";
    tt.watchShake({
        success: function () { 
            let num = getLogInfo();  
            let ifWatch = tt.getStorageSync({
                key: 'ifWatch'
            }).data;
            if (!ifWatch || url === logUrl || url === specificUrl || !num) {
                watchShakes();
                return false;
            }
            tt.confirm({
                title: '温馨提示',
                content: `已收集了${num}条问题日志，是否查看?  (该弹窗和问题收集页面的代码由Antmove嵌入，上线时请记得去掉)`,
                confirmButtonText: '赶紧看看',
                cancelButtonText: '暂不需要',
                success: function (res) {
                    if (res.confirm) {
                        tt.navigateTo({
                            url: '/pages/ant-move-runtime-logs/index'
                        });
                    }
                },
                complete: function () {
                    watchShakes();
                }
            });
        }
    }); 
};
module.exports = {
    processTransformationPage (_opts, options) {
        _opts = Object.assign(_opts, options);

        _opts.onLoad = function (res) {
            if (typeof options.data === 'function') {
                options.data = options.data();
            }

            getUrl();
            if (config.env === "development") {
                // watchShakes();
            } 
            if (options.onResize) {
                warnLife("There is no onResize life cycle", "onResize");
            }
            if (options.onLoad) {
                options.onLoad.call(this, res);
            }
        };

        _opts.onReady = function (param) {
            if (options.onReady) {
                options.onReady.call(this, param);
            }
        };
    }
};