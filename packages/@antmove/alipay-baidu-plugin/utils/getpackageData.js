const fs = require('fs-extra');
const path = require('path');

module.exports = function () {

    let packagePath = path.join(__dirname, '../../../../node_modules/@antmove/alipay-baidu', 'package.json');
    let antmovePackagePath = path.join(__dirname, '../../../../node_modules/antmove', 'package.json');

    if (!fs.existsSync(packagePath)) {
        packagePath = path.join(__dirname, '..', 'package.json');
    }
    
    if (!fs.existsSync(antmovePackagePath)) {
        antmovePackagePath = path.join(__dirname, '../../../..', 'package.json');
    }
    
    const packageData = fs.readFileSync(packagePath, 'utf-8');
    const antmovePackageData = fs.readFileSync(antmovePackagePath, 'utf-8');

    return {
        packageData: JSON.parse(packageData),
        antmovePackageData: JSON.parse(antmovePackageData)
    };
};