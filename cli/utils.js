const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').execSync;
const { comStores } = require('@antmove/utils');
function recordOptions (options, _input, _output) {
    if (!options.input || !options.output || !options.type) return;
    let configPath = path.join(options.input, `./antmove.config.js`);
    options = JSON.parse(JSON.stringify(options));
    options.input =_input;
    options.output = _output;
    options.npm =  getLastVersion();
    delete options.remote;
    delete options.defaultInput;
    options = JSON.stringify(options, null, 4);
    let _options = `module.exports = ${options}`;
    fs.outputFileSync(configPath,  _options);
}

function getLastVersion () {
    let obj = {};
    Object.keys(comStores).forEach(key => {
        const version = exec(`npm view ${comStores[key]} version`).toString().replace(/\n|\r|\t/, '');
        obj[key] = {
            name: comStores[key],
            version
        };
    });
    return obj;
}

function returnOptions (res) {
    let _path = path.join(res, './antmove.config.js');
    let isExist = fs.existsSync(_path);
    if (isExist) {
        let _options = require(_path);
        return _options;
    } else {
        return false;
    }
}
module.exports = {
    recordOptions,
    returnOptions
};