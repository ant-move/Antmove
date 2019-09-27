const fs = require("fs-extra");
const path = require('path');

module.exports = function (antpath) {
    const antmovePath = path.join(antpath, '__antmove');
    const cachePath = path.join(antmovePath, '.antmove_cache', 'antmove_cache.json');
    if (fs.existsSync(antmovePath)&&fs.existsSync(cachePath)) {
        const cacheData = fs.readFileSync(cachePath);
        return JSON.parse(cacheData);
    }
    return false;
};