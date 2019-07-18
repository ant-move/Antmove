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

module.exports = {
    ...babelPlugins,
    ...preprecessCode,
    log,
    renderMD,
    ...file,
    ...common,
    transformDoc,
    record,
    reportMethods,
    ...childProcess,
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
    }
};