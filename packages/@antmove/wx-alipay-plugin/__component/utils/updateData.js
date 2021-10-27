const config = require('../../api/config.js')

function updateData(param) {
  const ctx = this
  if (typeof ctx.properties === 'object') {
    ctx.properties.name = ctx.properties.name || ''
    ctx.properties.value = ctx.properties.value || null
    Object.keys(ctx.properties)
      .forEach((item) => {
        // didupdate
        if (param && param[0][item] === this.props[item]) { return false }
        if (ctx.props[item] !== undefined && typeof ctx.props[item] !== 'function' && item[0] !== '$' && ctx.data[item] !== ctx.props[item]) {
          ctx.setData({
            [item]: ctx.props[item],
          })
        }
        if (typeof ctx.props[item] === 'function' && config.env !== 'production') {
          console.warn('外部使用自定义组件时，如果传递参数是函数，请使用props获取，避免使用data获取')
        }
      })
  }
}

module.exports = updateData
