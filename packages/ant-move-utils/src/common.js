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
    }
};

module.exports = utils;