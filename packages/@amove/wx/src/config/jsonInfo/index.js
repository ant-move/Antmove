let jsonInfo = [
        {
            name: '全局配置',
            type: 'globalconfig',
            body: require('./globalconfig')
        },
        {
            name: '页面配置',
            type: 'pageconfig',
            body: require('./pageconfig')
        }
    ],
    descObject = {};

jsonInfo.forEach(function (json) {
    descObject = Object.assign(descObject, json.body);
});

let info = {
    jsonInfo,
    descObject,
    wxVersion: '2.2.4'
};

module.exports = info;