const fs = require("fs-extra");
const path = require("path");
const Config = require("../config.js");
module.exports = function (entrypath) {
    const dirList = fs.readdirSync(entrypath);
    dirList.forEach(dir => {
        if (dir && fs.statSync(path.join(entrypath, dir)).isDirectory()) {
            if (dir.indexOf('antmove')!==-1 ) {
                Config.library.customComponentPrefix = '/' + dir + Config.library.customComponentPrefix;
            }
        }
    });

};



