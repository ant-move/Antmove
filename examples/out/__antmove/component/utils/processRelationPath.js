const utils = require('../../api/utils');
const {browserPath } = utils;
let posix = browserPath();

function processRelationPath (self, relation) {
    let from = self.is, to = relation;
    if (to[0] === '.') {
        to = '../' + to;
    }
    let _p = posix.join(from, to);
    return _p;
}

module.exports = processRelationPath;