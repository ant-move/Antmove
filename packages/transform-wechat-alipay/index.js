const lifeCycles = require('./lifeCycles/index');
const updataTool = require("./utils/updataTool");
const isWechatApp = require('./utils/isWechatApp');
module.exports = {
    lifeCycles,
    updataTool,
    isApp: isWechatApp
};