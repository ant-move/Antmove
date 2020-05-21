let apiInfo = [
    {
        name: '基础',
        type: 'basic',
        body: require('./basic.js')
    },
    {
        name: '画布',
        type: 'canvas',
        body: require('./canvas.js')
    },
    {
        name: '设备相关',
        type: 'equipment',
        body: require('./equipment.js')
    },
    {
        name: '第三方平台',
        type: 'extPlatform',
        body: require('./extPlatform.js')
    },
    {
        name: '文件系统',
        type: 'file',
        body: require('./file.js')
    },
    {
        name: '位置',
        type: 'location',
        body: require('./location.js')
    },
    {
        name: '媒体',
        type: 'media',
        body: require('./media.js')
    },
    {
        name: '网络',
        type: 'network',
        body: require('./network.js')
    },
    {
        name: '开放能力',
        type: 'openAbility',
        body: require('./openAbility.js')
    },
    {
        name: '路由',
        type: 'router',
        body: require('./router.js')
    },
    {
        name: '转发',
        type: 'share',
        body: require('./share.js')
    },
    {
        name: '数据缓存',
        type: 'storage',
        body: require('./storage.js')
    },
    {
        name: 'wxml 模板',
        type: 'template',
        body: require('./template.js')
    },
    {
        name: '界面',
        type: 'view',
        body: require('./view.js')
    }
];
let descObject = {};

apiInfo.forEach(function (apiItem) {
    descObject = Object.assign(descObject, apiItem.body);
});

let info = {
    apiInfo,
    descObject,
    wxVersion: '2.2.4'
};


module.exports = info;