const projectName = {
    name: "baidu",
    dirname: '__antmove_baidu',
    path: "/"
};

const Config = {
    "env": "development",
    "target": projectName.name,
    isDev () {
        return this.env === 'development';
    },
    getSelf (key) {
        return this[key];
    },
    getTarget () {
        return this.target;
    },
    library: {
        customComponentPrefix: `/${projectName.dirname}`,
        customComponentNamePrefix: `${projectName.dirname}`
    },
    wrapApiFiles: [
        'index.js',
        'utils.js',
        'log.js',
        'runtimeProcess.js'
        
    ],
    compile: {
        customComponent: {
            'classSubdirectory/app.js': true,
            'classSubdirectory/page.js': true,
            'classSubdirectory/component.js': true,
            'componentClass.js': true
        },
        wrapApis: {}
    },
    log: {
        runtime: {
            dirname: 'ant-move-runtime-logs_baidu'
        }
    }
};

module.exports = Config;