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
} = require('@antmove/utils');
const customComponentPrefix = Config.library.customComponentPrefix;
let entry = path.join(__dirname, `../__component`);
Config.compile.customComponent = Object.assign({}, Config.compile.customComponent);

function copyDirectory (output, directoryPath) {
    let entryPath = entry + '/' + directoryPath;
    let outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`);

    if (!Config.isDev()) {
        const stat = fs.statSync(entryPath);
        if (stat.isDirectory()) {
            const dir = fs.readdirSync(entryPath);
            fs.ensureDir(outputPath);
            dir.forEach(file => {
                let filePath = path.join(entryPath, file);
                let suffixName = path.extname(filePath);
                let content = fs.readFileSync(filePath, 'utf8');
                let output = path.join(outputPath, file);
                if (suffixName === '.js') {
                    content = minifyJs(transformEs6(content));
                }
                fs.outputFileSync(output, content);
            });
        } else {
            let suffixName = path.extname(entryPath);
            let content = fs.readFileSync(entryPath, 'utf8');
            if (suffixName === '.js') {
                content = minifyJs(transformEs6(content));
            }
            fs.outputFileSync(outputPath, content);
        }
    } else {
        fs.copy(entryPath, outputPath, function (err) {
            if (err) console.error(err);
        });
    }
    
}


module.exports = function (output, config) {
    generateLogPage(output);
    Object.keys(config || Config.compile.customComponent)
        .forEach(function (item) {
            copyDirectory(output, item);
        });
};
