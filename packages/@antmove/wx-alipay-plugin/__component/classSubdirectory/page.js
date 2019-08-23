const utils = require('../../api/utils');
const { warnLife } = utils;
const config = require('../../api/config');
config.env = 'development';
const createNode = require('./relation');

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
            createNode(this);
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
                options.onLoad.call(this, res);
            }
        };

        _opts.onReady = function (param) {
            let ast = this.$node.getRootNode();
            setTimeout(() => {
                processRelationNodes(ast);
            }, 0);
            if (options.onReady) {
                options.onReady.call(this, param);
            }
        };
    }
};


function processRelationNodes (ast = {}) {
    let $nodes = ast.$nodes;
    let destoryArray = ast.destoryArray;
  
    for (let i = 0; i < destoryArray.length - 1; i++) {
        if (destoryArray[i] > destoryArray[i+1]) {
            $nodes[destoryArray[i+1]].appendChild($nodes[destoryArray[i]]);
        } else {
            for (let j = i + 2; j <= destoryArray.length - 1; j++) {
                if (destoryArray[i] > destoryArray[j]) {
                    $nodes[destoryArray[j]].appendChild($nodes[destoryArray[i]]);
                    break;
                } else if (j === destoryArray.length - 1) {
                    ast.$page.appendChild($nodes[destoryArray[i]]);
                }
            }
        }
    }
  
    if (destoryArray[destoryArray.length - 1] < destoryArray[destoryArray.length - 2]) {
        ast.$page.appendChild($nodes[destoryArray[destoryArray.length - 1]]);
    }

    ast.mountedHandles
        .forEach(function (fn) {
            fn();
        });
}