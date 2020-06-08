const path = require('path');
const fs = require('fs-extra');
const babelPlugins = require('./babel/index');
const preprecessCode = require('./preprocessCode');
const log = require('./log');
const file = require('./file.js');
const renderMD = require('./renderMD/index');
const common = require('./common');
const transformDoc = require('./tool/TransformationDoc/index');
const record = require("./record");
const reportMethods = require("./reportMethods");
const childProcess = require('./childProcess');
const transformPackage = require('./transformPackage');
const comStores = require('./comStores');
const getVersion = require('./getVersion');
const processMixTemplate = require('./processMixTemplate');

const axios = require('axios').default;
/**
 * error message report
 */
function reportError (type, appName, _msg = 'log', logType, isReprot) {
    if (!isReprot) return;
    type = type || process.env.compilerType || '';
    appName = appName || process.env.appName || '';
    let fromId = process.env.fromId || '0';
    let msg = `${type}-${appName}-${_msg}-${fromId}`;
    try {
        axios({
            method: 'post',
            url: 'http://gm.mmstat.com/fsp.1.1', 
            data: `{"gmkey":"OTHER","gokey":"delay=0&hash=&last_pos=0%252C0&msg=${msg}&page=null&patch_ver=-&pid=platformi-server-app&query=&raw_ua=Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_14_6)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F77.0.3865.90%2520Safari%252F537.36&referrer=http://&rel=&scr=2560x1440&spm_a=&spm_b=&title=mini-server&tracker_ver=4.3.0&type=${logType || 12}&ua=Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_14_6)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F77.0.3865.90%2520Safari%252F537.36&uid=","logtype":"2"}`
        });
    } catch (error) {
        
    }
}

process.on('uncaughtException', function (err) {
    /* 处理异常*/
    console.error(err.stack);
    reportError(null, null, err.stack + 'jsError', 11);
    process.emit('exit', 1);
});

module.exports = {
    ...require('./getAntmoveConfigJs'),
    ...getVersion,
    ...babelPlugins,
    ...preprecessCode,
    log,
    renderMD,
    ...file,
    ...common,
    transformDoc,
    record,
    reportMethods,
    comStores,
    transformPackage,
    ...childProcess,
    processMixTemplate,
    /**
     * defineGetter
     */
    defineGetter (obj = {}, descObj ={}, cb = () => {}) {
        return new Proxy(obj, {
            get (target, attr) {
                if (typeof attr === 'string' && descObj[attr]) {
                    cb && cb(target, attr);
                }
    
                return target[attr];
            }
        });
    },
    setAppName (name) {
        process.env.appName = name;
    },
    setCompileType (type) {
        process.env.compilerType = type;
    },
    setAppFromId (fromId) {
        process.env.fromId = fromId;
    },
    reportError,
    getAppName (pagesPath, baseDirName, attrName) {
        let appName = '';
        pagesPath && pagesPath.some(item => {
            const filePath = path.join(baseDirName, `${item}.json`);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (content[attrName]) {
                appName = content[attrName];
                return true;
            }
            return false;
        });
        return appName;
    }
};
