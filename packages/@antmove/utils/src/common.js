const path = require('path');
const minifyCss = require('./minify/minifyCss');
const minifyJs = require('./minify/uglify');

const utils = {
    minifyJs,
    minifyCss,
    callIfIsFunc (cb, params, p2) {
        if (typeof cb === 'function') {
            cb(params, p2);
        }
    },
    callFn (cb, params, context) {
        cb.call(context || this, params);
    },
    isTypeFile (extname, filepath) {
        return extname === path.extname(filepath);
    },
    transformStr
};

function transformStr (type = '') {
    /**
     * 组件名字母大写转小写
     */
    type;
    type = type.replace(/^[A-Z]/, function ($) {
        return $.toLowerCase();
    });

    type = type.replace(/[A-Z]/g, function ($) {
        return '-' + $.toLowerCase();
    });

    return type;
}

module.exports = utils;