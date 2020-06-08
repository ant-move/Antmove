/**
 * add component wrap bundle
 */
const path = require('path');
const fs = require('fs-extra');
// const Config = require('../../../config.js');
// const { generateLogPage } = require('./generateRuntimeLogPage');

let entry = path.join(__dirname, `../../runtime/__component`);


function copyDirectory (output, directoryPath, Config) {
    const customComponentPrefix = Config.library.customComponentPrefix;
    let entryPath = entry + '/' + directoryPath;
    let outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`);
    
    // if not support component2
    if (!Config.component2) {
        entryPath = entryPath.replace('classSubdirectory', 'runtime2');
        copyUtils('/runtime2', output, Config);
    }
    
    const err = fs.copySync(entryPath, outputPath);
    if (err) console.error(err);
    
}

function copyUtils (readPath, output, Config) {
    const customComponentPrefix = Config.library.customComponentPrefix;
    let _entryPath =  entry + readPath;
    let dir = fs.readdirSync(_entryPath);
    dir.forEach((fileName) => {
        let entryPath = _entryPath + '/' + fileName;
        // console.log(entryPath)
        let outputPath = path.join(output, `${customComponentPrefix}/component/utils/${fileName}`);
        const err = fs.copySync(entryPath, outputPath);
        if (err) console.error(err);
    });
}   

module.exports = {
    runGenerateBundleComponent (node, store) {
        let output = store.config.output;
        const config = store.config.preAppData.config;
        // generateLogPage(output);
        copyUtils('/utils', output, config);
        Object.keys(config.compile.customComponent)
            .forEach(function (item) {
                copyDirectory(output, item, config);
            });
    }
};
