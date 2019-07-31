const { transformStr } = require('@antmove/utils');

module.exports = function (ast, fileInfo) {
    ast.type = transformStr(ast.type);
};
