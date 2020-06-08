// const config = require('../../../config');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    generateNodeTrees (node, store) {
        let output = store.config.output;
        let str = global.appNodesTreeStr + '}';
        const config = store.config.preAppData.config;
        fs.outputFileSync(path.join(output, config.library.customComponentPrefix, 'api/relations.js'), str);
    }
};