const jsonInfo = [
  {
    name: '全局配置',
    type: 'globalconfig',
    body: require('./globalconfig'),
  },
  {
    name: '页面配置',
    type: 'pageconfig',
    body: require('./pageconfig'),
  }
]
let descObject = {}

jsonInfo.forEach((json) => {
  descObject = Object.assign(descObject, json.body)
})

let info = {
  jsonInfo,
  descObject,
  wxVersion: '2.2.4',
}

const { isAmap } = require('../../utils/index')

if (isAmap()) {
  info = require('@antmove/wx-amap').json
}

module.exports = info
