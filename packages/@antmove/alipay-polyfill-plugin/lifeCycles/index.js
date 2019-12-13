const axmlParser = require('../parse/parse.js');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require("path");
const compileAxml = require('./compile/compileAxml');
const compileJs = require('./compile/compileJs');
const generateAPi = require('../generate/generateApi');
const generateComponent = require('../generate/generateComponent');
const Config = require('../config.js');

const {
    isTypeFile,
    recordOptions
} = require('@antmove/utils');

function isAliApp () {
    return true;
}

module.exports = {
    defaultOptions: {
        exclude: [
            'node_modules',
            'antmove.config.js'
        ],
    },
    beforeParse: async function (next) {
        if (!isAliApp(this.$options.entry)) {
            console.log(chalk.red('[Ops] ' + this.$options.entry + ' is not an ailapp miniproramm directory.'));
            return false;
        }
        recordOptions(this.$options);
        fs.emptyDirSync(this.$options.dist);
        Config.component2 = this.$options.component2;
        Config.env = process.env.NODE_ENV ===  "development" ? 'development' : 'production';
        next();
    },
    onParsing (fileInfo) {
        fileInfo.output = this.$options.dist;

        if (isTypeFile('.axml', fileInfo.path)) {
            let ast = axmlParser.parseFile(fileInfo.path);
            fileInfo.ast = ast;
        }

    },
    onParsed () {
    },
    beforeCompile () {
        /**
         * 
         */
    },
    onCompiling (fileInfo, ctx) {
        if (fileInfo.type !== 'file') {
            fs.ensureDirSync(fileInfo.dist);
            return false;
        }

        if (isTypeFile('.axml', fileInfo.path)) {
            compileAxml(fileInfo, ctx);        
        } else if (isTypeFile('.js', fileInfo.path)) {
            let originCode = fs.readFileSync(fileInfo.path, 'utf8');
             
            compileJs(fileInfo, ctx, originCode);
        } else if (fileInfo.deep > 0&&fileInfo.extname === '.json') {
            let content = fs.readFileSync(fileInfo.path, 'utf8');
            const { transformPackage, prettierCode } =require('@antmove/utils');
            if (fileInfo.path.includes('package.json')) {
                content = transformPackage(fileInfo);
            }
            content = prettierCode(content, 'json', {
                useTabs: true,
                tabWidth: 4
            });
            fs.outputFileSync(fileInfo.dist, content);
        } else {
            fs.outputFileSync(fileInfo.dist, fs.readFileSync(fileInfo.path));
        }
        
        return fileInfo;
    },
    compiled: function (ctx, cb = () => {}) {
        cb ();
        generateComponent(ctx.output, this.$options);
        generateAPi(ctx.output);
        generateNodeTrees(ctx.output, Config);
    }
};

function generateNodeTrees (output, config) {
    let str = global.appNodesTreeStr + '}';
    fs.outputFileSync(path.join(output, config.library.customComponentPrefix, 'api/relations.js'), str);
}