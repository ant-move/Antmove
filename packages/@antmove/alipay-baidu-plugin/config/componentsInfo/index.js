let ComponentsInfo = [
        {
            name: '视图',
            type: 'view',
            body: require('./view.js')
        },
        {
            name: '基础',
            type: 'basic',
            body: require('./basic.js')
        },
        {
            name: '表单',
            type: 'form',
            body: require('./form.js')
        },
        {
            name: '导航',
            type: 'navigator',
            body: require('./navigator.js')
        },
        {
            name: '媒体组件',
            type: 'media',
            body: require('./media.js')
        },
        {
            name: '地图',
            type: 'map',
            body: require('./map.js')
        },
        {
            name: '画布',
            type: 'canvas',
            body: require('./canvas.js')
        },
        {
            name: '开放能力',
            type: 'openAbility',
            body: require('./openAbility.js')
        },
        {
            name: '无障碍访问',
            type: 'accessibility',
            body: require('./accessibility.js')
        }
    ],
    descObject = {};

ComponentsInfo.forEach(function (component) {
    descObject = Object.assign(descObject, component.body);
});

module.exports = {
    ComponentsInfo,
    descObject,
    wxVersion: '2.2.4'
};