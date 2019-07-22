/**
 * add runtime log page for target alipay app
 */
const path = require('path');
const fs = require('fs-extra');
const config = require('../config');

let componentDirName = config.log.runtime.dirname || '__runtime__logs__';

let logPagePath = path.join(__dirname, '../', '__component/' + componentDirName);
function generateLogPage (dist) {
    let distPath = path.join(dist, '/pages/' + componentDirName);

    if (config.env === 'development') {
        fs.copySync(logPagePath, distPath);
    }
}

function processAppJson (json) {
    json = JSON.parse(json);
    if (config.env === 'development') {
        json.pages.push('pages/' + componentDirName + '/index');
        json.pages.push('pages/' + componentDirName + '/specific/index');
    }

    return JSON.stringify(json);
}

module.exports = {
    generateLogPage,
    processAppJson
};