const fs = require('fs-extra');
const path = require('path');

module.exports = function isWechatApp (dirname) {
    let appJs = path.join(dirname, './app.js');
    let appJson = path.join(dirname, './app.json');

    return (fs.pathExistsSync(appJs) && fs.pathExistsSync(appJson));
};