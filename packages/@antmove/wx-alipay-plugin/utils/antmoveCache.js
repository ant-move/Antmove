const fs = require('fs-extra');
const path = require('path');

module.exports = function (data) {
    const cacheDirPath = path.join(data.distPath, '__antmove', '.antmove_cache');
    if (!fs.existsSync(cacheDirPath)) {
        fs.mkdirSync(cacheDirPath);
    }   
    
    const cachePath = path.join(cacheDirPath, 'antmove_cache.json');

    fs.writeFileSync(cachePath, JSON.stringify(data));


};