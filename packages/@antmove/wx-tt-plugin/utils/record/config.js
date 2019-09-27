const globalconfig = require("../../config/jsonInfo/globalconfig");
const pageconfig = require("../../config/jsonInfo/pageconfig");
const components = require("../../config/componentsInfo/index");
const apis = require("../../config/apiInfo/index");
const openAbility = require("../../config/apiInfo/openAbility");
const lifeCycleInfo = require('../../config/lifeCycleInfo');
const path = require('path');
const packagepath = path.join(__dirname, '../../../../package.json');

module.exports = {
    isShow: true,
    pagePath: '/',                      // /代表项目根目录
    globalconfig,
    pageconfig,
    components,
    apis,
    openAbility,
    lifeCycleInfo,
    packagepath
};