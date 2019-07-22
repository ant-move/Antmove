/**
 * @alipay code block
 * /*@amap ---- @amap*\/
 *  */
module.exports = function (code) {
    let reg = /\/\*\s*@amap\s*\n+((.|\s)*)\n+\s*@amap\s*\*\//g;
    return code.replace(reg, function (...r) {
        return r[1];
    });
};