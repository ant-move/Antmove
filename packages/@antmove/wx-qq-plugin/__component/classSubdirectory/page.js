const utils = require('../../api/utils')

const { warnLife } = utils
const config = require('../../api/config')

const getUrl = function() {
  const pages = getCurrentPages()
  const url = pages[pages.length - 1].__route__
  const _arr = url.split('/')
  const _name = _arr[_arr.length - 1]
  qq.setStorageSync('_pageMsg', JSON.stringify({ pageName: _name, pagePath: url }))
  return url
}
const getLogInfo = function() {
  let num = 0
  const info = qq.getStorageSync({
    key: '__antmove_loginfo',
  }).data.pages
  info.forEach((v, i) => {
    num += v.logs.length
  })
  return num
}

const watchShakes = function() {
  const pages = getCurrentPages()
  const url = pages[pages.length - 1].route
  const logUrl = 'pages/ant-move-runtime-logs/index'
  const specificUrl = 'pages/ant-move-runtime-logs/specific/index'
  qq.watchShake({
    success() {
      const num = getLogInfo()
      const ifWatch = qq.getStorageSync({
        key: 'ifWatch',
      }).data
      if (!ifWatch || url === logUrl || url === specificUrl || !num) {
        watchShakes()
        return false
      }
      qq.confirm({
        title: '温馨提示',
        content: `已收集了${num}条问题日志，是否查看?  (该弹窗和问题收集页面的代码由Antmove嵌入，上线时请记得去掉)`,
        confirmButtonText: '赶紧看看',
        cancelButtonText: '暂不需要',
        success(res) {
          if (res.confirm) {
            qq.navigateTo({
              url: '/pages/ant-move-runtime-logs/index',
            })
          }
        },
        complete() {
          watchShakes()
        },
      })
    },
  })
}
module.exports = {
  processTransformationPage(_opts, options) {
    _opts = Object.assign(_opts, options)

    _opts.onLoad = function(res) {
      if (typeof options.data === 'function') {
        options.data = options.data()
      }

      getUrl()
      if (config.env === 'development') {
        watchShakes()
      }
      if (options.onResize) {
        warnLife('There is no onResize life cycle', 'onResize')
      }
      if (options.onLoad) {
        options.onLoad.call(this, res)
      }
    }

    _opts.onReady = function(param) {
      if (options.onReady) {
        options.onReady.call(this, param)
      }
    }
  },
}
