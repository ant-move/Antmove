var CleanCss = require('clean-css');

module.exports = function (code, opts = {}) {
    return new CleanCss(opts).minify(code);
};