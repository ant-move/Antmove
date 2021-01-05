const lifeInfo = [
  {
    name: '小程序App',
    type: 'app',
    body: require('./app.js'),
  },
  {
    name: '页面',
    type: 'page',
    body: require('./page.js'),
  },
  {
    name: '自定义组件',
    type: 'component',
    body: require('./component.js'),
  },
]
let descObject = {}

lifeInfo.forEach((lifeItem) => {
  descObject = Object.assign(descObject, lifeItem.body)
})

let info = {
  lifeInfo,
  descObject,
  wxVersion: '2.2.4',
}

const { isAmap } = require('../../utils/index')

if (isAmap()) {
  info = require('@antmove/wx-amap').lifeCycle
}

module.exports = info
