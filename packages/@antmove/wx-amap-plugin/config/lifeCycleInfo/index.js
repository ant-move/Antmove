let lifeInfo = [
    {
        name: '全局',
        type: 'app',
        body: require('./app.js')
    },
    {
        name: '页面',
        type: 'page',
        body: require('./page.js')
    },
    {
        name: '组件',
        type: 'component',
        body: require('./component.js')
    },
];
let descObject = {};

lifeInfo.forEach(function (lifeItem) {
    descObject = Object.assign(descObject, lifeItem.body);
});

module.exports = {
    lifeInfo,
    descObject,
    wxVersion: '2.2.4'
};

