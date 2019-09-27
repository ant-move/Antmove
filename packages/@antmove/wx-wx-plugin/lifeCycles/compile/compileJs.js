const fs = require('fs-extra');
const {
    ifProcessHandleFn
} = require('@antmove/utils');

module.exports = function (fileInfo, ctx, originCode, apis) {
    originCode = ifProcessHandleFn(originCode);
    let insertCode = '';
    originCode = insertCode + originCode;    
    fs.outputFileSync(fileInfo.dist, originCode);
};