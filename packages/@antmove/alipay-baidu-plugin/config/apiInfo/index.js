const apiInfo = [
  {
    name: '界面',
    type: 'interface',
    body: require('./interface.js'),
  },
  {
    name: '多媒体',
    type: 'media',
    body: require('./media.js'),
  },
  {
    name: '缓存',
    type: 'file',
    body: require('./file.js'),
  },
  {
    name: '位置',
    type: 'location',
    body: require('./location.js'),
  },
  {
    name: '网络',
    type: 'network',
    body: require('./network.js'),
  },
  {
    name: '数据安全',
    type: 'security',
    body: require('./security.js'),
  },
  {
    name: '分享',
    type: 'share',
    body: require('./share.js'),
  },
  {
    name: '自定义通用菜单',
    type: 'currency',
    body: require('./currency.js'),
  },
  {
    name: '更新管理',
    type: 'update',
    body: require('./update.js'),
  },
  {
    name: '小程序当前运行版本类型',
    type: 'getRunScene',
    body: require('./getRunScene.js'),
  },
  {
    name: '自定义分析',
    type: 'reportAnalytics',
    body: require('./reportAnalytics.js'),
  },
  {
    name: '开放能力',
    type: 'openAbility',
    body: require('./openAbility.js'),
  },
  {
    name: '设备',
    type: 'equipment',
    body: require('./equipment.js'),
  }
]
let descObject = {}

apiInfo.forEach((apiItem) => {
  descObject = Object.assign(descObject, apiItem.body)
})

module.exports = {
  apiInfo,
  descObject,
  wxVersion: '2.2.4',
}
