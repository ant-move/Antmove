const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').execSync;
const { comStores } = require('@antmove/utils');
function recordOptions (options, _input, _output) {
    if (!options.input || !options.output || !options.type) return;
    let configPath = path.join(options.input, `./antmove.config.js`);
    options = JSON.parse(JSON.stringify(options));
    let ifNpm = getLastVersion(options);
    if (ifNpm) {
        options.npm =  getLastVersion(options);
    }
    options.input =_input;
    options.output = _output;
    delete options.remote;
    delete options.defaultInput;
    options = JSON.stringify(options, null, 4);
    let _options = `module.exports = ${options}`;
    fs.outputFileSync(configPath,  _options);
}

function getLastVersion (options) {
    let obj = {};
    let packJsonPath = path.join(options.input, `./package.json`);
    let isExist = fs.existsSync(packJsonPath);
    let code = '';
    let ifVant = false;
    let _obj = {};
    if (isExist) {
        code = fs.readFileSync(packJsonPath);
        code = code.toString();
        code = JSON.parse(code);
        Object.keys(code).forEach(function (name) {

           if (name === "dependencies" || name === "devDependencies") {
            _obj = {..._obj,...code[name]}
            }
        })
        Object.keys(_obj).forEach(function (name) {
            if (name === "vant-weapp") {
                ifVant = true;
            }
        })
        if (!ifVant) {
            return false          
        }
    }
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
        console.log(_options)
        return _options;
    } else {
        return false;
    }
}
module.exports = {
    recordOptions,
    returnOptions
};