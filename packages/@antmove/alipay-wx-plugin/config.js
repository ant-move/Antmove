module.exports = {
    "env": "development",
    "target": "WX",
    isDev () {
        return this.env === 'development';
    },
    library: {
        customComponentPrefix: '/__antmove_wechat',
        customComponentNamePrefix: 'antmove_wechat'
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
            dirname: 'ant-move-runtime-logs_wechat'
        }
    }
};
