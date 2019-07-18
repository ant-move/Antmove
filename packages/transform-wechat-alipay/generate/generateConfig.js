const fs = require('fs-extra');
const path = require('path');
const Config = require('../config');
/**
 * generate config file which storge the compiling info.
 */

module.exports = function (output, obj = {}, cb=()=>{}) {
    let targetPath = path.join(output, `${Config.library.customComponentPrefix}/.config.json`);
    let code = `
        ${JSON.stringify(obj)}
    `;

    fs.outputFile(targetPath, code, err => {
        if (err) throw err;
        cb(targetPath);
    });
};