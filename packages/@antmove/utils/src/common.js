const path = require('path')
const minifyCss = require('./minify/minifyCss')
const minifyJs = require('./minify/uglify')

const utils = {
  minifyJs,
  minifyCss,
  callIfIsFunc(cb, params, p2) {
    if (typeof cb === 'function') {
      cb(params, p2)
    }
  },
  callFn(cb, params, context) {
    cb.call(context || this, params)
  },
  isTypeFile(extname, filepath) {
    return extname === path.extname(filepath)
  },
  transformStr,
  isVarName,
  isNumeric,
}

function transformStr(type = '') {
  /**
   * 组件名字母大写转小写
   */
  type = type.replace(/^[A-Z]/, ($) => {
    return $.toLowerCase()
  })

  type = type.replace(/[A-Z]/g, ($) => {
    return `-${$.toLowerCase()}`
  })

  return type
}

function isVarName(str) {
  if (typeof str !== 'string') {
    return false
  }

  if (str.trim() !== str) {
    return false
  }

  if (
    [
      'globalThis',
      'global',
      'AlipayJSBridge',
      'fetch',
      'self',
      'window',
      'document',
      'location',
      'XMLHttpRequest',
      'package',
    ].includes(str)
  ) {
    return false
  }

  try {
    new Function(str, 'var ' + str) // eslint-disable-line
  } catch (_) {
    return false
  }

  return true
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

module.exports = utils
