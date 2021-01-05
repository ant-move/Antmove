const css = require('css')
const { prettierCode } = require('./preprocessCode')

function filterCssObj(code, type = 'alipay') {
  const cssObj = css.parse(code)
  cssObj.stylesheet.rules = processStyleRules(cssObj.stylesheet.rules, type)
  code = css.stringify(cssObj)
  code = prettierCode(code, 'scss')
  return code
}

function processStyleRules(rules = [], type = 'alipay') {
  const typeArr = ['alipay', 'wx', 'quick', 'swan', 'tt']
  let closeBool = false
  let bool = true
  let targetBool = false

  rules = rules.filter((r) => {
    if (closeBool) {
      bool = true
      closeBool = false
    }
    if (targetBool) {
      bool = true
      targetBool = false
    }
    typeArr.forEach((t) => {
      if (new RegExp(`^${t}Start$`).test(r.comment) && t !== type) {
        bool = false
      } else if (new RegExp(`^${t}End$`).test(r.comment) && t !== type) {
        bool = false
        closeBool = true
      } else if (new RegExp(`^${t}(Start|End)$`).test(r.comment) && t === type) {
        targetBool = true
        bool = false
      }
    })
    return bool
  })
  return rules
}

module.exports = function(code, type = 'alipay', isObj = false) {
  if (isObj) {
    return filterCssObj(code, type)
  }
  return processStyleRules(code, type)
}
