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

const info = {
  jsonInfo,
  descObject,
  wxVersion: '2.2.4',
}

module.exports = info
