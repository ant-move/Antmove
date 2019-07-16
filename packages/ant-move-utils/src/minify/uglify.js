let UglifyJs = require('uglify-js');
module.exports = function (code, opts = {}) {
    let result = UglifyJs.minify(code, opts);

    if (result.error) {
        console.log('error: ', result.error);
        return code;
    } 
    return result.code;
};