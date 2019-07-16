/**
 * add component wrap bundle
 */
const path = require('path');
const fs = require('fs-extra');
const Config = require('../config.js');
const { generateLogPage } = require('./generateRuntimeLogPage');
const {
    minifyJs,
    transformEs6
} = require('ant-move-utils');
const customComponentPrefix = Config.library.customComponentPrefix;
let entry = path.join(__dirname, `../__component`);
Config.compile.customComponent = Object.assign({}, Config.compile.customComponent);

function copyDirectory (output, directoryPath) {
    let entryPath = entry + '/' + directoryPath;
    let outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`);
    
    fs.copy(entryPath, outputPath, function (err) {
        if (err) console.error(err);
    });
}


module.exports = function (output, config) {
    generateLogPage(output);
    Object.keys(config || Config.compile.customComponent)
        .forEach(function (item) {
            copyDirectory(output, item);
        });
};
