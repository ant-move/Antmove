/**
 * component polyfill
 */
const Config = require('../config');
const fs = require('fs-extra');
const path = require('path');

let customComponentPrefix = Config.library.customComponentPrefix;
let entry = path.join(__dirname, '../__component');

module.exports = function generate (output) {
    let outputPath = path.join(output, `${customComponentPrefix}/component`);

    fs.copySync(entry, outputPath);

    // if not support component2
    if (!Config.component2) {
        fs.removeSync(path.join(entry, 'classSubdurectory'));
    } else {
        fs.removeSync(path.join(entry, 'rumtime2'));
    }
};