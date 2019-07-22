const fs = require('fs-extra');
const path = require('path');
const Config = require('../config');
/**
 * generate config file which storge the compiling info.
 */

module.exports = function (output, obj = {}) {
    let targetPath = path.join(output, `${Config.library.customComponentPrefix}/.config.json`);
    let code = `
        ${JSON.stringify(obj)}
    `;

    try {
        fs.outputFileSync(targetPath, code);
    } catch (err) {
        throw err;
    }
};