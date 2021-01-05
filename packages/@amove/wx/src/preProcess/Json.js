const fs = require('fs-extra')

module.exports = {
  Json(node, store) {
    const info = this.$node.body
    try {
      info.content = JSON.parse(fs.readFileSync(info.path, 'utf8') || {})
    } catch (error) {
      console.error(`Read ${info.path} error`)
    }
    if (info.deep === 0 && info.basename === 'app') {
      this.addChild('readAppJson')
    }
  },
}
