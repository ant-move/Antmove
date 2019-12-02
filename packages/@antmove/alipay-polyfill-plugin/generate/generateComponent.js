/**
 * component polyfill
 */
const Config = require('../config');
const fs = require('fs-extra');
const path = require('path');

let customComponentPrefix = Config.library.customComponentPrefix;
let entryIndex = path.join(__dirname, '../__component/componentClass.js');
let entryCompoent = '';

module.exports = function generate (output,options) {
    if (!options.component2) {
        entryCompoent = path.join(__dirname, '../__component/runtime2');
    } else {
        entryCompoent = path.join(__dirname, '../__component/classSubdirectory');
    }
    let outputPath = path.join(output, `${customComponentPrefix}/component/componentClass.js`);
    let componentSupportPath = path.join(output, `${customComponentPrefix}/component/classSubdirectory`);
    fs.copySync(entryIndex, outputPath);
    fs.copySync(entryCompoent, componentSupportPath);
    // if not support component2
    // if (!Config.component2) {
    //     fs.removeSync(path.join(entry, 'classSubdurectory'));
    // } else {
    //     fs.removeSync(path.join(entry, 'rumtime2'));
    // }
};