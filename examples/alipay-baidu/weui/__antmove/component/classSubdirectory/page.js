const utils = require('../../api/utils');
const { warnLife } = utils;
const config = require('../../api/config');
config.env = 'development';

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
const watchShakes = function () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let logUrl = "pages/ant-move-runtime-logs/index"; 
    let specificUrl = "pages/ant-move-runtime-logs/specific/index";
    if ( url ===logUrl || url===specificUrl ) {
        watchShakes();
    }  
    my.watchShake({
        success: function () {
            watchShakes();
            my.confirm({
                title: '温馨提示',
                content: '是否进入警告日志页面',
                confirmButtonText: '马上进入',
                cancelButtonText: '暂不需要',
                success: function (res) {
                    if (res.confirm) {
                        my.navigateTo({
                            url: '/pages/ant-move-runtime-logs/index'
                        });
                    }
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
                watchShakes();
            } 
            if (options.onResize) {
                warnLife("There is no onResize life cycle", "onResize");
            }
            if (options.onLoad) {
                options.onLoad.call(this,res);
            }
        };
    }
};
