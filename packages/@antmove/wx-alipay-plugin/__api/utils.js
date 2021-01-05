/* eslint-disable */

const logUtils = require('./log.js')

const hasProxy = typeof Proxy !== 'undefined'
let _Proxy = function () {}

if (hasProxy) {
  _Proxy = Proxy
}

module.exports = {
  ...logUtils,

  nextUid(len = 8) {
    return Math.random()
      .toString(36)
      .substr(len + 1)
  },

  parseSelector(sel) {
    let ret = sel
    if (sel.indexOf('>>>') !== -1) {
      console.warn('支付宝不支持跨自定义组件的后代选择器，已降级')
      const arr = sel.split('>>>')
      ret = arr[arr.length - 1].trim()
    }
    return ret
  },

  /**
   * defineGetter
   */
  defineGetter(obj = {}, descObj = {}, cb = () => {}) {
    if (!hasProxy) {
      return obj
    }
    return new _Proxy(obj, {
      get(target, attr) {
        if (
          typeof attr === 'string' &&
          descObj[attr] &&
          descObj[attr].type === 0
        ) {
          cb && cb(target, attr)
        }

        return target[attr]
      },
    })
  },

  /**
   * sourceObj : 要操作对象
   * wxAttr: 微信key值
   * alipayAttr: 支付宝key值
   **/
  objectMap(sourceObj = {}, wxAttr, alipayAttr) {
    if (!hasProxy) {
      Object.defineProperty(sourceObj, wxAttr, {
        get() {
          return sourceObj[alipayAttr]
        },
      })

      return sourceObj
    }
    return new _Proxy(sourceObj, {
      get(target, attr) {
        if (attr === wxAttr) {
          return target[alipayAttr]
        }
      },
    })
  },
  // 类型转换
  changeType(str) {
    const hexA = new Array(0)
    if (typeof attr === 'string') {
      // 十六进制字符串转字节数组
      let pos = 0
      let len = str.length
      if (len % 2 !== 0) {
        return null
      }
      len /= 2
      for (let i = 0; i < len; i++) {
        const s = str.substr(pos, 2)
        const v = parseInt(s, 16)
        hexA.push(v)
        pos += 2
      }
      return hexA
    }
  },
  // https://github.com/wandergis/coordtransform/blob/master/index.js
  gcj02towgs84(_lng, _lat) {
    const lat = +_lat
    const lng = +_lng
    const ee = 0.00669342162296594323
    const a = 6378245.0

    if (out_of_china(lng, lat)) {
      return [lng, lat]
    } else {
      let dlat = transformlat(lng - 105.0, lat - 35.0)
      let dlng = transformlng(lng - 105.0, lat - 35.0)
      const radlat = (lat / 180.0) * Math.PI
      let magic = Math.sin(radlat)
      magic = 1 - ee * magic * magic
      const sqrtmagic = Math.sqrt(magic)
      dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * Math.PI)
      dlng = (dlng * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * Math.PI)
      const mglat = lat + dlat
      const mglng = lng + dlng
      return [lng * 2 - mglng, lat * 2 - mglat]
    }
  },

  ab2hex(buffer) {
    const hexArr = Array.prototype.map.call(new Uint8Array(buffer), (bit) => {
      return `00${bit.toString(16)}`.slice(-2)
    })
    return hexArr.join('')
  },

  /**
   * change attr for object
   * replace attr by newAttr
   */
  changeObjAttr(obj = {}, attr, newAttr) {
    if (obj[attr] !== undefined) {
      obj[newAttr] = obj[attr]
      delete obj[attr]
    } else {
      console.warn(`${attr} attribute is missing!`)
    }

    return obj
  },
  fnAppClass,
  browserPath,
  mapAuthSetting,
}

function out_of_china(lng, lat) {
  // 纬度3.86~53.55,经度73.66~135.05
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}

function transformlat(lng, lat) {
  let ret =
    -100.0 +
    2.0 * lng +
    3.0 * lat +
    0.2 * lat * lat +
    0.1 * lng * lat +
    0.2 * Math.sqrt(Math.abs(lng))
  ret +=
    ((20.0 * Math.sin(6.0 * lng * Math.PI) +
      20.0 * Math.sin(2.0 * lng * Math.PI)) *
      2.0) /
    3.0
  ret +=
    ((20.0 * Math.sin(lat * Math.PI) + 40.0 * Math.sin((lat / 3.0) * Math.PI)) *
      2.0) /
    3.0
  ret +=
    ((160.0 * Math.sin((lat / 12.0) * Math.PI) +
      320 * Math.sin((lat * Math.PI) / 30.0)) *
      2.0) /
    3.0
  return ret
}

function transformlng(lng, lat) {
  let ret =
    300.0 +
    lng +
    2.0 * lat +
    0.1 * lng * lng +
    0.1 * lng * lat +
    0.1 * Math.sqrt(Math.abs(lng))
  ret +=
    ((20.0 * Math.sin(6.0 * lng * Math.PI) +
      20.0 * Math.sin(2.0 * lng * Math.PI)) *
      2.0) /
    3.0
  ret +=
    ((20.0 * Math.sin(lng * Math.PI) + 40.0 * Math.sin((lng / 3.0) * Math.PI)) *
      2.0) /
    3.0
  ret +=
    ((150.0 * Math.sin((lng / 12.0) * Math.PI) +
      300.0 * Math.sin((lng / 30.0) * Math.PI)) *
      2.0) /
    3.0
  return ret
}

function fnAppClass() {
  const fn = {
    $data: {},
    add(key, cb = () => {}) {
      fn.$data[key] = fn.$data[key] || []
      fn.$data[key].push(cb)
      return fn
    },
    insert(key, cb = () => {}) {
      fn.$data[key] = fn.$data[key] || []
      fn.$data[key].unshift(cb)
    },
    getFn(key) {
      return fn.$data[key]
    },
    bind(key, ctx = {}) {
      fn.$data[key] = fn.$data[key] || []
      fn.add(key, ctx[key])
      ctx[key] = function (...params) {
        const self = this
        fn.getFn(key).forEach((cb) => {
          cb.apply(self, params)
        })
      }
    },
  }
  return fn
}

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path)}`
    )
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  let res = ''
  let lastSegmentLength = 0
  let lastSlash = -1
  let dots = 0
  let code
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i)
    } else if (code === 47 /* /*/) {
      break
    } else {
      code = 47 /* /*/
    }
    if (code === 47 /* /*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (
          res.length < 2 ||
          lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== 46 /* .*/ ||
          res.charCodeAt(res.length - 2) !== 46 /* .*/
        ) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf('/')
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = ''
                lastSegmentLength = 0
              } else {
                res = res.slice(0, lastSlashIndex)
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/')
              }
              lastSlash = i
              dots = 0
              continue
            }
          } else if (res.length === 2 || res.length === 1) {
            res = ''
            lastSegmentLength = 0
            lastSlash = i
            dots = 0
            continue
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) {
            res += '/..'
          } else {
            res = '..'
          }
          lastSegmentLength = 2
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, i)}`
        } else {
          res = path.slice(lastSlash + 1, i)
        }
        lastSegmentLength = i - lastSlash - 1
      }
      lastSlash = i
      dots = 0
    } else if (code === 46 /* .*/ && dots !== -1) {
      ++dots
    } else {
      dots = -1
    }
  }
  return res
}

function _format(sep, pathObject) {
  const dir = pathObject.dir || pathObject.root
  const base =
    pathObject.base || (pathObject.name || '') + (pathObject.ext || '')
  if (!dir) {
    return base
  }
  if (dir === pathObject.root) {
    return dir + base
  }
  return dir + sep + base
}

const posix = {
  // path.resolve([from ...], to)
  resolve: function resolve(...args) {
    let resolvedPath = ''
    let resolvedAbsolute = false
    let cwd

    for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      let path
      if (i >= 0) {
        path = args[i]
      } else {
        if (cwd === undefined) {
          cwd = process.cwd()
        }
        path = cwd
      }

      assertPath(path)

      // Skip empty entries
      if (path.length === 0) {
        continue
      }

      resolvedPath = `${path}/${resolvedPath}`
      resolvedAbsolute = path.charCodeAt(0) === 47 /* /*/
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute)

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) {
        return `/${resolvedPath}`
      }
      return '/'
    } else if (resolvedPath.length > 0) {
      return resolvedPath
    }
    return '.'
  },

  normalize: function normalize(path) {
    assertPath(path)

    if (path.length === 0) {
      return '.'
    }

    const isAbsolute = path.charCodeAt(0) === 47 /* /*/
    const trailingSeparator = path.charCodeAt(path.length - 1) === 47 /* /*/

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute)

    if (path.length === 0 && !isAbsolute) {
      path = '.'
    }
    if (path.length > 0 && trailingSeparator) {
      path += '/'
    }

    if (isAbsolute) {
      return `/${path}`
    }
    return path
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path)
    return path.length > 0 && path.charCodeAt(0) === 47 /* /*/
  },

  join: function join(...p) {
    if (p.length === 0) {
      return '.'
    }
    let joined
    for (let i = 0; i < p.length; ++i) {
      const arg = p[i]
      assertPath(arg)
      if (arg.length > 0) {
        if (joined === undefined) {
          joined = arg
        } else {
          joined += `/${arg}`
        }
      }
    }
    if (joined === undefined) {
      return '.'
    }
    return posix.normalize(joined)
  },

  relative: function relative(from, to) {
    assertPath(from)
    assertPath(to)

    if (from === to) {
      return ''
    }

    from = posix.resolve(from)
    to = posix.resolve(to)

    if (from === to) {
      return ''
    }

    // Trim any leading backslashes
    let fromStart = 1
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /* /*/) {
        break
      }
    }
    const fromEnd = from.length
    const fromLen = fromEnd - fromStart

    // Trim any leading backslashes
    let toStart = 1
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /* /*/) {
        break
      }
    }
    const toEnd = to.length
    const toLen = toEnd - toStart

    // Compare paths to find the longest common path from root
    const length = fromLen < toLen ? fromLen : toLen
    let lastCommonSep = -1
    let i = 0
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /* /*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1)
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i)
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /* /*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0
          }
        }
        break
      }
      const fromCode = from.charCodeAt(fromStart + i)
      const toCode = to.charCodeAt(toStart + i)
      if (fromCode !== toCode) {
        break
      } else if (fromCode === 47 /* /*/) {
        lastCommonSep = i
      }
    }

    let out = ''
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /* /*/) {
        if (out.length === 0) {
          out += '..'
        } else {
          out += '/..'
        }
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0) {
      return out + to.slice(toStart + lastCommonSep)
    }

    toStart += lastCommonSep
    if (to.charCodeAt(toStart) === 47 /* /*/) {
      ++toStart
    }
    return to.slice(toStart)
  },

  _makeLong: function _makeLong(path) {
    return path
  },

  dirname: function dirname(path) {
    assertPath(path)
    if (path.length === 0) {
      return '.'
    }
    let code = path.charCodeAt(0)
    const hasRoot = code === 47 /* /*/
    let end = -1
    let matchedSlash = true
    for (let i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i)
      if (code === 47 /* /*/) {
        if (!matchedSlash) {
          end = i
          break
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false
      }
    }

    if (end === -1) {
      return hasRoot ? '/' : '.'
    }
    if (hasRoot && end === 1) {
      return '//'
    }
    return path.slice(0, end)
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') {
      throw new TypeError('"ext" argument must be a string')
    }
    assertPath(path)

    let start = 0
    let end = -1
    let matchedSlash = true
    let i

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) {
        return ''
      }
      let extIdx = ext.length - 1
      let firstNonSlashEnd = -1
      for (i = path.length - 1; i >= 0; --i) {
        const code = path.charCodeAt(i)
        if (code === 47 /* /*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1
            break
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false
            firstNonSlashEnd = i + 1
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1
              end = firstNonSlashEnd
            }
          }
        }
      }

      if (start === end) {
        end = firstNonSlashEnd
      } else if (end === -1) {
        end = path.length
      }
      return path.slice(start, end)
    }
    for (i = path.length - 1; i >= 0; --i) {
      if (path.charCodeAt(i) === 47 /* /*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1
          break
        }
      } else if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // path component
        matchedSlash = false
        end = i + 1
      }
    }

    if (end === -1) {
      return ''
    }
    return path.slice(start, end)
  },

  extname: function extname(path) {
    assertPath(path)
    let startDot = -1
    let startPart = 0
    let end = -1
    let matchedSlash = true
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    let preDotState = 0
    for (let i = path.length - 1; i >= 0; --i) {
      const code = path.charCodeAt(i)
      if (code === 47 /* /*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1
          break
        }
        continue
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false
        end = i + 1
      }
      if (code === 46 /* .*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i
        } else if (preDotState !== 1) {
          preDotState = 1
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      return ''
    }
    return path.slice(startDot, end)
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError(
        `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
      )
    }
    return _format('/', pathObject)
  },

  parse: function parse(path) {
    assertPath(path)

    const ret = { root: '', dir: '', base: '', ext: '', name: '' }
    if (path.length === 0) {
      return ret
    }
    let code = path.charCodeAt(0)
    const isAbsolute = code === 47 /* /*/
    let start
    if (isAbsolute) {
      ret.root = '/'
      start = 1
    } else {
      start = 0
    }
    let startDot = -1
    let startPart = 0
    let end = -1
    let matchedSlash = true
    let i = path.length - 1

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    let preDotState = 0

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i)
      if (code === 47 /* /*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1
          break
        }
        continue
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false
        end = i + 1
      }
      if (code === 46 /* .*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i
        } else if (preDotState !== 1) {
          preDotState = 1
        }
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) {
          ret.base = path.slice(1, end)
          ret.name = path.slice(1, end)
        } else {
          ret.base = path.slice(startPart, end)
          ret.name = path.slice(startPart, end)
        }
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot)
        ret.base = path.slice(1, end)
      } else {
        ret.name = path.slice(startPart, startDot)
        ret.base = path.slice(startPart, end)
      }
      ret.ext = path.slice(startDot, end)
    }

    if (startPart > 0) {
      ret.dir = path.slice(0, startPart - 1)
    } else if (isAbsolute) {
      ret.dir = '/'
    }

    return ret
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
}

posix.posix = posix

function browserPath() {
  return posix
}

function mapAuthSetting(obj) {
  const keys = [
    ['scope.userLocation', 'location'],
    ['scope.writePhotosAlbum', 'album'],
    ['scope.camera', 'camera'],
    ['scope.userInfo', 'userInfo'],
    ['scope.address', 'aliaddress'],
    ['scope.werun', 'alipaysports'],
  ]

  const authSetting = {}

  keys.forEach((item) => {
    const value = obj[item[1]]
    if (typeof value !== 'undefined') {
      authSetting[item[0]] = value
    }
  })

  return authSetting
}
