let apiInfo = [
    {
        name: '界面',
        type: 'view',
        body: require('./view.js')
    },
    {
        name: '媒体',
        type: 'media',
        body: require('./media.js')
    },
    {
        name: '缓存',
        type: 'storage',
        body: require('./storage.js')
    },
    {
        name: '文件',
        type: 'file',
        body: require('./file.js')
    },
    {
        name: '位置',
        type: 'location',
        body: require('./location.js')
    },
    {
        name: '网络',
        type: 'network',
        body: require('./network.js')
    },
    {
        name: '设备',
        type: 'equipment',
        body: require('./equipment.js')
    },
    {
        name: '数据相关',
        type: 'data',
        body: require('./data.js')
    },
    {
        name: '分享',
        type: 'share',
        body: require('./share.js')
    },
    {
        name: '自定义通用菜单',
        type: 'menu',
        body: require('./menu.js')
    },
    {
        name: '小程序当前运行版本类型',
        type: 'edition',
        body: require('./edition.js')
    },
    {
        name: '自定义分析',
        type: 'analysis',
        body: require('./analysis.js')
    },
    {
        name: '更新管理',
        type: 'update',
        body: require('./update.js')
    },
    {
        name: '开放能力API',
        type: 'openAbility',
        body: require('./openAbility.js')
    },


];
let descObject = {};

apiInfo.forEach(function (apiItem) {
    descObject = Object.assign(descObject, apiItem.body);
});

module.exports = {
    apiInfo,
    descObject,
    wxVersion: '2.2.4'
};
