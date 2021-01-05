/**
 * @alipay code block
 * /*@amap ---- @amap*\/
 *  */
module.exports = {
  JsCommentBlock(node) {
    const code = this.$node.content
    const reg = /\/\*\s*@amap\s*\n+((.|\s)*)\n+\s*@amap\s*\*\//g
    this.$node.content = code.replace(reg, (...r) => {
      return r[1]
    })
  },
}
