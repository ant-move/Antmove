const { runJs } = require('../../utils/childProcess');
const path = require('path');
// const Config = require('../../../config');

module.exports = {
    runGenerateBundleApi (node, store) {
        const Config = store.config.preAppData.config;
        let output = store.config.output;
        const filename = path.join(__dirname, './generateBundleApi.js');
        return new Promise(function (resolve, reject) {
            try {
                runJs(filename, {
                    output,
                    Config,
                }, function (code) {
                    resolve(code);
                });
            } catch (error) {
                reject(error);
            }
        });
    }
};