const fs = require('fs-extra');
const {
    ifProcessHandleFn,
    transformClass,
    transformEs6
} = require('@antmove/utils');

module.exports = function (fileInfo, ctx, originCode, apis) {
    originCode = transformClass(originCode);
    originCode = ifProcessHandleFn(originCode, {
        entry: 'wx',
        dist: 'wx',
        code: 'wx.__target__'
    });
    originCode = transformEs6(originCode);
    let insertCode = '';
    originCode = insertCode + originCode;    
    fs.outputFileSync(fileInfo.dist, originCode);
};