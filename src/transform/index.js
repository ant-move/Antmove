const utils = require('ant-move-utils');
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

    beforeRun () {
        let inputDir = this.$options.entry;
        let outputDir = this.$options.dist;
        let lifeCycles = this.$plugin.lifeCycles;
        let self = this;

        lifeCycles.$options = this.$options;
        lifeCycles.beforeParse(function () {
            self.run(inputDir, outputDir);
        });
    }

    run (inputDir, outputDir) {
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
            info.dist = info.path.replace(inputDir, outputDir);
            callIfIsFunc(lifeCycles.onParsing.bind(self.$plugin), info);
        });

        callIfIsFunc(lifeCycles.onParsed.bind(this.$plugin), this.$data.inputProjectInfo);

        callIfIsFunc(lifeCycles.beforeCompile.bind(this.$plugin), this);

        // begin generate target files
        walk(this.$data.inputProjectInfo, function (fileInfo) {
            callIfIsFunc(lifeCycles.onCompiling.bind(self.$plugin), fileInfo, self);
        });

        callIfIsFunc(lifeCycles.compiled.bind(this), this);
    }
};

function walk (arr = [], cb) {
    arr.forEach(function (el) {
        if (Array.isArray(el.children)) {
            walk(el.children, cb);
        } else {
            cb && cb(el);
        }
    });
}