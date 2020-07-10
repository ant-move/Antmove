const path = require('path');
const fs = require('fs-extra');

module.exports = {
    generateMiniProjectJson (ndoe, store) {
        const jsonStr = `{
            "component2": true
        }`
        let output = store.config.output;
        let miniPath = path.join(output, 'mini.project.json');
        fs.outputFile(miniPath, jsonStr);
    }
};