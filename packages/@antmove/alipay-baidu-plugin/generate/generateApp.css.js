/**
 * add component wrap bundle
 */
const path = require('path');
const fs = require('fs-extra');
const Config = require('../config.js');

const entry = path.join(__dirname, `../static`);

function generateAppAcss (output, customComponentPrefix) {
    fs.copy(entry, path.join(output, `${customComponentPrefix}/static`), function (err) {
        if (err) console.error(err);
    });
}



module.exports = function (str, output) {
    const customComponentPrefix = Config.library.customComponentPrefix;
    let returnData = "";
    generateAppAcss(output, customComponentPrefix);
    if (str.indexOf('/__antmove/static/app.css')===-1) {
        const cssStyle = `
            @import '${customComponentPrefix}/static/app.css';

            page {
                background: #fff;
            }
        `;
        returnData = cssStyle + '\n' + str;
    } else {
        returnData = str.replace('/__antmove/static/app.css', `${customComponentPrefix}/static/app.css`);
    }
    

    return returnData;
};
