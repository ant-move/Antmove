const utils = require('@antmove/utils');
const fs = require("fs-extra");
const path = require("path");
const {
    parserDirInfo,
    callIfIsFunc
} = utils;


module.exports = class Transform {
    constructor (plugin, opts = {}) {
        this.$options = opts || {};
        this.$data = {};
        this.$plugin = plugin;
    }

    beforeRun (cb = () => {}) {
        process.env.compilerType = this.$options.type;
        let inputDir = this.$options.entry;
        let outputDir = this.$options.dist;

        let lifeCycles = this.$plugin.lifeCycles;
        let self = this;
        const packagePath = path.join(__dirname, '../..', 'package.json');
        const packageJson = fs.readFileSync(packagePath);
        const versionData = { version: JSON.parse(packageJson).version};
        if (lifeCycles.defaultOptions.exclude) {
            this.$options.exclude = this.$options.exclude.concat(lifeCycles.defaultOptions.exclude);
        }
        lifeCycles.$options = Object.assign(lifeCycles.defaultOptions, this.$options, versionData);
        /**
         * Setting compile env
         */
        process.env.NODE_ENV = lifeCycles.$options.env;
        lifeCycles.beforeParse(function () {
            self.run(inputDir, outputDir, cb);

        });
    }

    run (inputDir, outputDir, cb = () => {}) {
        let self = this;
        this.entry = inputDir;
        this.output = outputDir;

        /**
         * add utils for plugin
         */
        this.$plugin._ = utils;
        this.$plugin.$options = this.$options;

        let lifeCycles = this.$plugin.lifeCycles;

        let _opts = Object.assign({}, this.$options, {
            dirpath: inputDir
        });
        this.$data.inputProjectInfo = parserDirInfo(_opts, function (info) {
        
            info.dist = path.join(outputDir, info.path.split(inputDir)[1]).replace('//', '/');

            callIfIsFunc(lifeCycles.onParsing.bind(self.$plugin), info);
        });

        callIfIsFunc(lifeCycles.onParsed.bind(this.$plugin), this.$data.inputProjectInfo);

        callIfIsFunc(lifeCycles.beforeCompile.bind(this.$plugin), this);

        // begin generate target files
        walk(this.$data.inputProjectInfo, function (fileInfo) {
            callIfIsFunc(lifeCycles.onCompiling.bind(self.$plugin), fileInfo, self);
        });

        callIfIsFunc(lifeCycles.compiled.bind(this), this, cb);
        let configPath = this.$options.output+'antmove.config.js';
        if (fs.existsSync(configPath)) {
            fs.unlinkSync(configPath);
        }
        let pro = getProgramName (this.$options.type.split ("-") [1]);
        if ( this.$options.component === "component" ) {

            let outputpath = path.join(this.$options.dist, 'app.js');
            if ( fs.pathExistsSync(outputpath)) {
                fs.unlinkSync(outputpath);
                outputpath = outputpath.replace(/\.js/, '.json');

                fs.unlinkSync(outputpath);

                fs.unlinkSync(outputpath.replace(/app\.json/, "app."+pro.css));
                deleteFolder(this.$options.entry);
                var _path = this.$options.entry;
                let pathArr = _path.match(/(\S*)\/\.antmove/) || _path.match(/(\S*)\\\.antmove/);
                _path = pathArr[1];
                fs.rmdirSync (_path);
            }

        }
    }

};

function walk (arr = [], cb) {
    arr.forEach( function (el) {
        if (Array.isArray(el.children)) {
            walk(el.children, cb);
        } else {
            cb && cb(el);
        }
    });
}

function deleteFolder (path) {
    var files = [], curPath = '';
    if (fs.existsSync(path)) {
        if (fs.statSync(path).isDirectory()) {
            files = fs.readdirSync(path);
            files.forEach (function (file) {
                if (path.charAt(path.length-1)==="/") {
                    curPath = path + file;
                } else {
                    curPath = path + "/" + file ;
                }                    
                if (fs.statSync(curPath).isDirectory()) {
                    curPath = curPath + "/";
                    deleteFolder(curPath);
                } else {
                    fs.unlinkSync(curPath);                  
                }
            });
            try {
                fs.rmdirSync(path);
            } catch (err) {
                console.log();
            }
        } else {
            fs.unlinkSync(curPath);
        }
    }
}

function getProgramName (type = "wx") {
    let pro = {};
    switch (type) {
    case "wx" : 
        pro.name = "微信";
        pro.css = "wxss";
        break;
    case "alipay": 
        pro.name = "支付宝";
        pro.css = "acss";
        break;
    case "baidu": 
        pro.name = "百度";
        pro.css = "css";
        break;
    case "qq":
        pro.name = "qq";
        pro.css = "qss";
        break;
    default : 
        pro.css = "wxss";
    }
    return pro;
}