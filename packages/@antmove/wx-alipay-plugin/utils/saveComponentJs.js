const fs = require('fs-extra');
const path = require('path');

module.exports = function (fileInfo, code, options) {
    const jsonPath = fileInfo.path + 'on';
    if (fs.existsSync(jsonPath)) {
        const jsonData = JSON.parse(fs.readFileSync(jsonPath));
        if (jsonData.component) {
            let cacheJsPath = path.join(options.dist, '__antmove');
           
            if (!fs.existsSync(cacheJsPath)) {

                fs.mkdirSync(cacheJsPath);
            }
            const newCacheJsPath = path.join(cacheJsPath, '.antmove_cache');

            if (!fs.existsSync(newCacheJsPath)) {
                fs.mkdirSync(newCacheJsPath);
            }
            const antmoveCachePath = path.join(newCacheJsPath, 'antmove_cache.json');
            let antmoveCache = {};
            if (fs.existsSync(antmoveCachePath)) {
                antmoveCache = JSON.parse(fs.readFileSync(antmoveCachePath));
            }
            let fileName = 'component' + Math.random().toString(36).substr(2, 5)+'.js'; 
            let fileKey = fileInfo.path.split(options.entry)[1].replace(/\\/g, '/');
            antmoveCache[fileKey] = fileName;
            const catchCodePath = path.join(newCacheJsPath, fileName);
            fs.writeFileSync(catchCodePath, code);
            fs.writeFileSync(antmoveCachePath, JSON.stringify(antmoveCache));
        }
    }
};