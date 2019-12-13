const chalk = require('chalk');

const fs = require('fs-extra');

const compileJs = require('./compile/compileJs');



//const Config = require('../config.js');

const {
    isTypeFile,
    setCompileType,
    reportError,
    recordOptions
} = require('@antmove/utils');


const isWechatApp = require('../utils/isWechatApp')


module.exports = {
    defaultOptions: {
        exclude: [
            'project.config.json'
        ],
        env: 'production',
        remote: false
    },
    beforeParse: async function (next) {
        setCompileType('wx-wx');
        fs.emptyDirSync(this.$options.dist);
        if (!isWechatApp(this.$options.entry)) {
            console.log(chalk.red('[Ops] ' + this.$options.entry + ' is not a wechat miniproramm directory.'));
            return false;
        }  
        recordOptions(this.$options);    
        next();
    },
    onParsing () {
    },
    onParsed () {
    },
    beforeCompile (ctx) {
        /**
         * 
         */
    },
    onCompiling (fileInfo, ctx) {        
        if (fileInfo.type !== 'file') {
            fs.ensureDirSync(fileInfo.dist);
            return false;
        } else if (isTypeFile('.js', fileInfo.path)) {          
            let originCode = fs.readFileSync(fileInfo.path, 'utf8');
            let apis = {};
            compileJs(fileInfo, ctx, originCode, apis);

        } else {
            let originCode = fs.readFileSync(fileInfo.path, 'utf8');
            fs.outputFileSync(fileInfo.dist, originCode)
        }   
        return fileInfo;
    },
    compiled: async function () {
        reportError();
    }
};
