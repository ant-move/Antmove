const wxmlParser = require('../parse/parse.js');
// const upDataTool = require("../utils/updataTool");
const chalk = require('chalk');
const appJsonProcess = require('../component/appJson');
const pageJsonProcess = require('../component/pageJson');
const fs = require('fs-extra');
const path = require("path");
const checkCoverView = require("../utils/checkCoverView"); // cover-view 检测
const getPackageJson = require('../utils/getpackageData'); 
const compileWxml = require('./compile/compileWxml');
const compileWxss = require('./compile/compileWxss');
const compileJs = require('./compile/compileJs');
const saveComponentJs = require('../utils/saveComponentJs');
const generateBundleComponent = require('../generate/generateWrapComponents');
// const generateWxsDeps = require('../generate/generateWxsDep')



const project = {
    name: "",
    path: "",
    distPath: "",
    fileNum: 0,
    pageNum: 0,
    componentNum: 0,
    usetime: ""
};

const Config = require('../config.js');

const {
    prettierCode,
    isTypeFile,
    record,
    reportMethods,
    runJs,
    cjsToes,
    emptyFiles,
    setAppName,
    setCompileType,
    reportError,
    getAppName,
    recordOptions
} = require('@antmove/utils');
const { processAppJson } = require('../generate/generateRuntimeLogPage');
const {
    report,
    reportTable,
    reportSpeed,
    reportDist
} = reportMethods;
// 制作日志
const recordConfig = require("../utils/record/config");
const isWechatApp = require('../utils/isWechatApp');


// 默认报告不显示具体文件
let showCompile = true;
// 默认查看报告
let showReport = false;
let statFileNameArr = [];
let readtimes = 0;
let finishFile = 0;
let projectParents = "";
let beginTime = Number(new Date());
// 输出日志数据
let repData = {};
// let isUpdata = true;
// let baseurl = 'http://cache.amap.com/ecology/tool/antmove/wechat-alipay/';

module.exports = {
    defaultOptions: {
        exclude: [
            'project.config.json',
            'node_modules',
            'antmove.config.js'
        ],
        env: 'production',
        remote: false
    },
    beforeParse: async function (next) {
        setCompileType('wx-alipay');
        let ifComponent = false;
        if (this.$options.component === "component") {
            ifComponent = true;
        }

        try {
            if (!isWechatApp(this.$options.entry, ifComponent)) {
                let errStr = '[Ops] ' + this.$options.entry + ' is not a wechat miniproramm directory.';
                if (this.$options.error) {
                    throw new Error(errStr)
                } else {
                    console.log(chalk.red(errStr));
                    return false;
                }
            }
        } catch (err) {
            console.log(err);
            return false
        }

        recordOptions(this.$options);
        this.$options.empty && fs.existsSync(this.$options.dist) && emptyFiles(this.$options.dist, ['miniprogram_npm', 'node_modules', '.tea', 'mini.project.json']);        
        if (this.$options.scope && this.$options.scope !== 'false') {
            Config.options.scopeStyle = true;
        }

        Config.env = process.env.NODE_ENV ===  "development" ? 'development' : 'production';
        showReport = Config.env === 'development';
        Config.component2 = this.$options.component2;
        Config.aliAppType = this.$options.platform || 'alipay';
        if (this.$options.component === "component") {
            Config.min = true;
        }
        // isUpdata = this.$options.remote;    // 是否从远程拉取 polyfill 代码
        let date = "";
        report(date, { type: "title", showReport });
        const {
            getSurrounding,
            getToolVs,
            resDataInit
        } = record(recordConfig);
        repData = resDataInit();
        repData.surroundings = getSurrounding();
        let versionData = {};
        versionData.version = this.$options.version;
        repData.toolVs = getToolVs(versionData);

        // const toolPath = path.join(__dirname, '../package.json');
        // const toolVsData = JSON.parse(fs.readFileSync(toolPath)).version;
        // baseurl = baseurl + toolVsData;
        // try {
        //     await upDataTool({ baseurl, isUpdata, showReport });
        // } catch (err) {}
        next();
    },
    onParsing (fileInfo) {
        fileInfo.output = this.$options.dist;
        if (fileInfo.type === 'file') {
            project.fileNum++;
            if (fileInfo.filename === 'app.json') {
                project.path = fileInfo.dirname;
                let distPath = fileInfo.dist.split('app.json')[0];
                project.distPath = path.join(distPath.substr(0, distPath.length - 1));
                
                report("", {
                    type: "project",
                    path: project.path,
                    showReport,
                    showCompile
                });
            }
        }
        if (isTypeFile('.wxml', fileInfo.path)) {
            let ast = wxmlParser.parseFile(fileInfo.path);
            fileInfo.ast = ast;
        }

    },
    onParsed () {
        const {packageData, antmovePackageData} = getPackageJson();


        if (!this.$options.isWx2Baidu) {
            try {
                reportDist(`${antmovePackageData.version}`, this.$options.dist, {tool: '@antmove/wx-alipay', version: packageData.version});
            } catch (err) {
                return false;
            }
        } else {
            console.log('\n ');
        }
    },
    beforeCompile (ctx) {
        /**
         * 
         */
    },
    onCompiling (fileInfo, ctx) {
        const {
            getTemplateData,
            getStyleData,
            getCustomScript,
            getScriptData,
            getJsonData,
            getOthersFile
         
        } = record(recordConfig);
        if (fileInfo.type !== 'file') {
            fs.ensureDirSync(fileInfo.dist);
            return false;
        }

        let date = new Date();
        const reportData = {
            info: fileInfo.dirname,
            type: "parse",
            showReport,
            length: project.fileNum,
            nums: finishFile
        };


        if (!fileInfo.parent) {
            readtimes = 0;
            let pathArr = fileInfo.path.split(path.sep);
            projectParents = pathArr[pathArr.length - 3] || "";
            reportData.info = fileInfo.path.split(projectParents)[1].substr(1);
            report(date, reportData);
        } else {
            if (statFileNameArr.indexOf(fileInfo.dirname) === -1) {
                readtimes = 0;
                reportData.info = fileInfo.dirname.split(projectParents)[1].substr(1);
                report(date, reportData);
                statFileNameArr.push(fileInfo.dirname);
            }
        }
        readtimes++;
        if (isTypeFile('.wxml', fileInfo.path)) {
            compileWxss(fileInfo, ctx, true);
            const reptempData = getTemplateData(fileInfo, project.name);
            checkCoverView(fileInfo.ast, reptempData);
            let isComponent = false;
            if (this.$options.component === "component") {
                isComponent = true;
            }
            compileWxml(fileInfo, ctx, isComponent);
            const reportData = {
                info: fileInfo.path.split(projectParents)[1].substr(1),
                type: "compile",
                showCompile,
                showReport,
                length: project.fileNum,
                nums: finishFile
            };
            date = report(date, reportData);
            repData.transforms = Object.assign(repData.transforms, reptempData);
        } else if (isTypeFile('.wxss', fileInfo.path)) {
            compileWxss(fileInfo, ctx);
            const reptempData = getStyleData(fileInfo.path.split(projectParents)[1].substr(1));

            const reportData = {
                info: fileInfo.path.split(projectParents)[1].substr(1),
                type: "compile",
                showCompile,
                showReport,
                length: project.fileNum,
                nums: finishFile
            };
            date = report(date, reportData);
            repData.transforms = Object.assign(repData.transforms, reptempData);
        } else if (isTypeFile('.js', fileInfo.path)) {
            let pathinfo = fileInfo.path.split(projectParents)[1].substr(1);
            let originCode = fs.readFileSync(fileInfo.path, 'utf8');
            let wxoriginCode = originCode;
            let apis = {};
            if (this.$options.isWx2Baidu) {
                saveComponentJs(fileInfo, originCode, this.$options);
            } 
            compileJs(fileInfo, ctx, originCode, apis);

            const reportData = {
                info: pathinfo,
                type: "compile",
                showCompile,
                showReport,
                length: project.fileNum,
                nums: finishFile
            };
            date = report(date, reportData);
            const reptempData = getScriptData(pathinfo, apis, wxoriginCode);
            repData.transforms = Object.assign(repData.transforms, reptempData);
        } else if (isTypeFile('.wxs', fileInfo.path)) {
            let pathinfo = fileInfo.path.split(projectParents)[1].substr(1);
            const reptempData = getCustomScript(pathinfo);
            repData.transforms = Object.assign(repData.transforms, reptempData);
            let content = fs.readFileSync(fileInfo.path, 'utf8') || '';
            const reportData = {
                info: pathinfo,
                type: "compile",
                showCompile,
                showReport,
                length: project.fileNum,
                nums: finishFile
            };
            date = report(date, reportData);
            /**
             * 不支持 sjs 兼容处理
             */
            if (!Config.hasWxs) {
                content = content.replace(/\.wxs/g, '.wxs.js');
                if (content.match(/\s*getRegExp/g)) {
                    let preCode = `
                    function getRegExp (p1, p2) {
                        return new RegExp(p1, p2);
                    }
                    \n
                    `;
                    content = preCode + content;
                }
                fs.outputFileSync(fileInfo.dist.replace(/\.wxs$/, '.wxs.js'), content);
            } else {
                content = cjsToes(content);

                content = content.replace(/\.wxs/g, '.sjs');
                fs.outputFileSync(fileInfo.dist.replace(/\.wxs$/, '.sjs'), content);
            }
        } else {
            let content;
            if (fileInfo.deep === 0 && fileInfo.filename === 'app.json') {
                content = fs.readFileSync(fileInfo.path, 'utf8');
                if (this.$options.hooks && typeof this.$options.hooks.appJson === 'function') {
                    content = this.$options.hooks.appJson(content);
                }
                const appData = JSON.parse(content);
                let json = appData;
                if (json.window && json.window.navigationBarTitleText) {
                    setAppName(json.window.navigationBarTitleText);
                } else {
                    const appName = getAppName(json.pages, fileInfo.entry, 'navigationBarTitleText');
                    setAppName(appName);
                }
                try {
                    project.pageNum = appData.pages.length;
                } catch (err) {
                    project.pageNum = 0;
                }
                let pathInfo = fileInfo.path.split(projectParents)[1].substr(1);
                const jsonData = getJsonData(pathInfo, content);
                repData.transforms = Object.assign(repData.transforms, jsonData);
                content = processAppJson(content);
                const app = JSON.parse(content);

                let dirnameArr = fileInfo.dirname.split("/");
                if (dirnameArr.length <= 1) {
                    dirnameArr = dirnameArr[0].split("\\");
                }
                try {
                    project.name = app.window.navigationBarTitleText || dirnameArr[dirnameArr.length - 1];
                } catch (err) {
                    project.name = dirnameArr[dirnameArr.length - 1];
                }
                content = appJsonProcess(content);
                content = prettierCode(content, 'json', {
                    useTabs: true,
                    tabWidth: 4
                });
                const reportData = {
                    info: pathInfo,
                    type: "compile",
                    showCompile,
                    showReport,
                    length: project.fileNum,
                    nums: finishFile
                };
                date = report(date, reportData);
            } else if (fileInfo.deep > 0&&fileInfo.extname === '.json') {
                const { transformPackage } =require('@antmove/utils');
                let pathInfo = fileInfo.path.split(projectParents)[1].substr(1);
                let parent = fileInfo.parent;
                let bool = false;
                let wxmlFileInfo = null;
                parent && parent.children && parent.children.forEach(function (el) {
                    if (fileInfo.basename + '.wxml' === el.filename) {
                        bool = true;
                        wxmlFileInfo = el;
                    }
                });

                if (bool) {
                    content = fs.readFileSync(fileInfo.path, 'utf8');
                    content = pageJsonProcess.call(ctx, content, wxmlFileInfo);
                } else {
                    content = fs.readFileSync(fileInfo.path, 'utf8');
                }
                if (fileInfo.path.includes('package.json')) {
                    // content = transformPackage(fileInfo);
                }
                const jsonData = getJsonData(pathInfo, content);
                repData.transforms = Object.assign(repData.transforms, jsonData);

                content = prettierCode(content, 'json', {
                    useTabs: true,
                    tabWidth: 4
                });

                const pageJson = JSON.parse(content);
                if (pageJson.component) {
                    project.componentNum++;
                }
                const reportData = {
                    info: pathInfo,
                    type: "compile",
                    showCompile,
                    showReport,
                    length: project.fileNum,
                    nums: finishFile
                };
                date = report(date, reportData);
            } else {
                content = fs.readFileSync(fileInfo.path);
                const reportData = {
                    info: fileInfo.path.split(projectParents)[1].substr(1),
                    type: "compile",
                    showCompile,
                    showReport,
                    length: project.fileNum,
                    nums: finishFile
                };
                date = report(date, reportData);
                const otherData = getOthersFile(fileInfo.path.split(projectParents)[1].substr(1));
                repData.transforms = Object.assign(repData.transforms, otherData);

            }

            fs.outputFileSync(fileInfo.dist, content);

        }
        // 记录当前处理完成的文件数目
        finishFile++;

        const generateData = {
            info: fileInfo.path.split(projectParents)[1].substr(1),
            type: "generate",
            showReport,
            length: project.fileNum,
            nums: finishFile
        };

        if (!fileInfo.parent) {
            report(date, generateData);
        } else {
            if (readtimes === fileInfo.parent.children.length) {
                generateData.info = fileInfo.dirname.split(projectParents)[1].substr(1);
                report(date, generateData);
            }
        }
        // console.log(new Date() - date)
        if ( new Date() - date> 30 || finishFile%3===0 || finishFile === project.fileNum) {
            reportSpeed({
                showReport,
                length: project.fileNum,
                nums: finishFile
            });
        }
        
        return fileInfo;
    },
    compiled: async function (ctx, cb = () => {}) {
        reportError();
        const {
            findOpenAbility,
            statistics,
            writeReportPage
        } = record(recordConfig);
        generateBundleComponent(ctx.output, Config);
        await runGenerateBundleApi(ctx.output);

        generateNodeTrees(ctx.output, Config);
        const tableInfo = {
            "项目名称": project.name,
            "项目路径": project.path,
            "输出路径": project.distPath,
            "文件数": String(project.fileNum),
            "页面数": String(project.pageNum),
            "组件数": String(project.componentNum),

        };
        repData.tableInfo = tableInfo;
        let nowTime = report(beginTime, {
            showReport,
            type: "computedTime"
        });
        tableInfo['总耗时'] = nowTime + "ms";
        reportTable({ tableInfo, showReport });
        repData.opening = findOpenAbility(repData);
        let statisticsData = statistics(repData.transforms);
        repData.concept = statisticsData;
        let targetPath =  path.join(ctx.output, `${Config.library.customComponentPrefix}/.config.json`);
        writeReportPage(repData, targetPath);

        cb ();
    }
};

/**
 * Run generateBundleApi in child_process
 */
function runGenerateBundleApi (output) {
    const filename = path.join(__dirname, '../generate/generateBundleApi.js');
    return new Promise(function (resolve, reject) {
        try {
            runJs(filename, {
                output,
                Config,
            }, function (code) {
                resolve(code);
            });
        } catch (error) {
            reject(error);
        }
    });
}

function generateNodeTrees (output, config) {
    let str = global.appNodesTreeStr + '}';
    fs.outputFileSync(path.join(output, config.library.customComponentPrefix, 'api/relations.js'), str);
}