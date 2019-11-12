const fs = require('fs-extra');
const path = require('path');

module.exports = function isWechatApp (dirname, ifComponent) {
    if (ifComponent) return true;
    let appJs = path.join(dirname, './app.js');
    let appCss = path.join(dirname, './app.wxss');
    let appJson = path.join(dirname, './app.json');

    return (fs.pathExistsSync(appJs)
            && fs.pathExistsSync(appCss)
            && fs.pathExistsSync(appJson));
};