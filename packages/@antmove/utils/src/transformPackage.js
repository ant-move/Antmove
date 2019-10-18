const fs = require('fs-extra');
const path = require('path');
let convertedComponents = require('./comStores');
const convertedNpmName = Object.keys(convertedComponents);

module.exports = function transformPackage (fileInfo) {
    let packageJson = JSON.parse(fs.readFileSync(fileInfo.path).toString());
    if (fs.existsSync(path.join(fileInfo.entry, `./antmove.config.js`))) {
        let antmoveJson = fs.readFileSync(path.join(fileInfo.entry, `./antmove.config.js`)).toString();
        antmoveJson = antmoveJson.replace(/module.exports = /, '').replace(/;/, '');
        antmoveJson = eval("(" + antmoveJson + ")");
        if (!antmoveJson.npm) return JSON.stringify(packageJson, null, 4);
        packageJson = replaceNpmName(packageJson, antmoveJson);
    }
    return JSON.stringify(packageJson, null, 4);
};

function replaceNpmName (packageJson, antmoveJson) {
    packageJson.dependencies && Object.keys(packageJson.dependencies).forEach(key => {
        if (convertedNpmName.includes(key)) {
            const newKey = antmoveJson.npm[key].name;
            packageJson.dependencies[newKey] = antmoveJson.npm[key].version;
            delete packageJson.dependencies[key];
        }
    });
    packageJson.devDependencies && Object.keys(packageJson.devDependencies).forEach(key => {
        if (convertedNpmName.includes(key)) {
            const newKey = antmoveJson.npm[key].name;
            packageJson.devDependencies[newKey] = antmoveJson.npm[key].version;
            delete packageJson.devDependencies[key];
        }
    });
    return packageJson;
}