let lifeInfo = [
    {
        name: '小程序App',
        type: 'app',
        body: require('./app.js')
    },
    {
        name: '页面',
        type: 'page',
        body: require('./page.js')
    },
    {
        name: '自定义组件',
        type: 'component',
        body: require('./component.js')
    },
];
let descObject = {};

lifeInfo.forEach(function (lifeItem) {
    descObject = Object.assign(descObject, lifeItem.body);
});

let info = {
    lifeInfo,
    descObject,
    wxVersion: '2.2.4'
};

module.exports = info;
