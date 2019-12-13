const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').execSync;
const { comStores } = require('@antmove/utils');
function recordOptions (options) {
    if (!options.input || !options.output || !options.type) return;
    let _input = './',
        _output = processPath(options);
    let configPath = path.join(options.input, `./antmove.config.js`);
    options = JSON.parse(JSON.stringify(options));
    let _options = {};
    _options.input =_input;
    _options.output = _output;
    _options.env = options.env;
    _options.platform = options.platform;
    _options.component2 =options.component2;
    _options.scope = options.scope;
    _options.type = options.type;
    _options.component = options.component;
    let ifNpm = getLastVersion(options);
    if (ifNpm) {
        _options.npm =  getLastVersion(options);
    }
    _options = JSON.stringify(_options, null, 4);
    antmoveConfigDist = `module.exports = ${_options}`;
    fs.outputFileSync(configPath,  antmoveConfigDist);
}

function getLastVersion (options) {
    let packJsonPath = path.join(options.input, `./package.json`);
    let isExist = fs.existsSync(packJsonPath);
    if (!isExist) {
        return false
    }
    let obj = {};
    let code = '';
    let ifVant = false;
    let _obj = {};
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

function processPath ( opts ) {
    let _path = "";
    _path = path.relative(opts.input, opts.output);
    return _path;
}
module.exports = {
    recordOptions,
    returnOptions
};