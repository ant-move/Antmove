/**
 * @alipay code block
 * /*@amap ---- @amap*\/
 *  */
module.exports = function(code) {
  const reg = /\/\*\s*@amap\s*\n+((.|\s)*)\n+\s*@amap\s*\*\//g
  return code.replace(reg, (...r) => {
    return r[1]
  })
}
