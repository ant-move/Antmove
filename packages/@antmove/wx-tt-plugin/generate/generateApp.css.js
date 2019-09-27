/**
 * add component wrap bundle
 */
const path = require('path');
const fs = require('fs-extra');
const Config = require('../config.js');
const customComponentPrefix = Config.library.customComponentPrefix;
const entry = path.join(__dirname, `../static`);

function generateAppAcss (output) {
    fs.copy(entry, path.join(output, `${customComponentPrefix}/static`), function (err) {
        if (err) console.error(err);
    });
}


module.exports = function (str, output, type) {
    generateAppAcss(output);
    const postfixName = type === 'wx-alipay' ? 'app.acss' : 'app.ttss';
    const cssStyle = `
    @import '${customComponentPrefix}/static/${postfixName}';
`;
    return cssStyle + '\n' + str;
};
