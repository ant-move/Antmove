const fs = require('fs-extra');
const path = require('path');

module.exports = function isWechatApp (dirname, ifComponent) {
    if (ifComponent) return true;
    let isAlipay = false;
    let appJs = path.join(dirname, './app.js');
    let appJson = path.join(dirname, './app.json');
    if (fs.pathExistsSync(appJs) && fs.pathExistsSync(appJson)) {
        const JsonData = JSON.parse(fs.readFileSync(appJson));
        const JsonDataArr = JsonData.pages[0].split('/');
        JsonDataArr.pop();
        const dirPagePath = path.join(dirname, JsonDataArr.join('/'));
        const fileList = fs.readdirSync(dirPagePath);
        fileList.forEach(item => {
            if (item.includes('.axml')) {
                isAlipay = true;
            }
        });
        
    }

    return  isAlipay;
};