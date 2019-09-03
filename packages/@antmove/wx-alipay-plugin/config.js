module.exports = {
    "env": 'production',
    isDev () {
        return this.env === 'development';
    },
    target: '_',
    min: false, // minify polyfill api
    options: {
        scopeStyle: false,
        pageContainerClassName: 'page-container-classname'
    },
    library: {
        customComponentPrefix: '/__antmove',    // 编译输出目录
        customComponentNamePrefix: 'antmove'
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
            'classSubdirectory/relation.js': true,
            'classSubdirectory/processRelation.js': true,
            'classSubdirectory/promise.js': true,
            'classSubdirectory/utils.js': true,
            'componentClass.js': true,
            'lifeCyclesMap.js': true
        },
        wrapApis: {}
    },
    log: {
        runtime: {
            dirname: 'ant-move-runtime-logs'
        }
    }
};
