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
    
    
    const err = fs.copySync(entryPath, outputPath);
    if (err) console.error(err);
    
}


module.exports = {
    runGenerateBundleComponent (node, store) {
        let output = store.config.output;
        const config = store.config.preAppData.config;
        // generateLogPage(output);
        //copyUtils('/utils', output, config);
        Object.keys(config.compile.customComponent)
            .forEach(function (item) {
                copyDirectory(output, item, config);
            });
    }
};
