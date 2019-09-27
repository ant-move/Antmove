const Config = require('../config');
const fs = require('fs-extra');
const path = require('path');

let customComponentPrefix = Config.library.customComponentPrefix;
let entry = path.join(__dirname, '../__api');

module.exports = function generate (output) {
    let outputPath = path.join(output, `${customComponentPrefix}/api`);

    fs.copySync(entry, outputPath);
};