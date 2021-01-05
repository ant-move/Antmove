const path = require('path')
const fs = require('fs-extra')
const css = require('css')
const { transformEnvStyle, prettierCode, processErrMassage } = require('@antmove/utils')
const generateAppCssStyle = require('../../generate/generateApp.css.js')
const Config = require('../../config')
const processClassNames = require('./processClassNames')

module.exports = function(
  fileInfo,
  ctx,
  inCompileWxml = false,
  isComponentPage = false,
) {
  if (fileInfo.hasCompiledStyle) {
    return false
  }
  let originFileInfo = null
  let classNamesWrap = false
  const xmldistPath = fileInfo.dist
  if (inCompileWxml) {
    originFileInfo = fileInfo

    /**
     * 在 compileWxml 中调用
     */
    fileInfo.parent
      && fileInfo.parent.children.forEach((el) => {
        if (el.extname === '.wxss') {
          fileInfo = el
        }
      })

    fileInfo.hasCompiledStyle = true
    if (Config.options.scopeStyle) {
      classNamesWrap = processClassNames(originFileInfo)
    }
  }

  if (isComponentPage) {
    fileInfo.dist = xmldistPath.replace(/\.wxml/, '.acss')
  }
  fileInfo.dist = fileInfo.dist.replace(/\.wxss/, '.acss')
  let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || ''
  const filepath = fileInfo.path.replace(fileInfo.entry, '')
  if (fileInfo.extname === '.wxss') {
    let _obj = {}
    try {
      _obj = css.parse(cssContent, { source: filepath })
    } catch (error) {
      processErrMassage(error, filepath)
    }

    _obj.stylesheet.rules = transformEnvStyle(_obj.stylesheet.rules, 'alipay')
    _obj.stylesheet.rules.forEach((r) => {
      const keyframes = r.keyframes
      if (keyframes) {
        const newFrames = keyframes.filter((k) => {
          return k.type !== 'comment'
        })
        r.keyframes = newFrames
      }
    })

    cssContent = css.stringify(_obj)
  }
  cssContent = prettierCode(cssContent, 'scss')

  cssContent = cssContent
    // .replace(/\.wxss"/g, '.acss";')
    // .replace(/\.wxss'/g, ".acss';")
    .replace(/\.wxss("|')/g, (match, $1) => {
      return `.acss${$1};`
    })

  if (
    !ctx.isNpmComponent
    && fileInfo.deep === 0
    && fileInfo.filename === 'app.wxss'
  ) {
    cssContent = generateAppCssStyle(cssContent, ctx.output)
  }

  cssContent = cssContent.replace(/@import\s+['|"](\S+)['|"]/g, (...$) => {
    let rule = $[1]
    if (rule[0] !== '/' && rule[0] !== '.') {
      const tempPath = path.join(
        fileInfo.dirname,
        rule.replace(/\.acss'*/g, '.wxss'),
      )
      if (fs.pathExistsSync(tempPath)) {
        rule = `./${rule}`
      } else {
        rule = `/${rule}`
      }
    }

    return `@import '${rule}';\n`
  })
  if (Config.options.scopeStyle && classNamesWrap) {
    const { classPrefix, classPrefixDisplay } = classNamesWrap
    // let rootClassNames = classNamesWrap.value[0].split(/\s+/);

    try {
      const cssObj = css.parse(cssContent, { source: filepath })
      cssObj.stylesheet.rules.forEach((el) => {
        if (el.selectors) {
          el.selectors = el.selectors.map((selector) => {
            /**
             * 兼容双分号选择器情况
             */
            selector = selector.replace(/^;+/, '')
            if (selector.match(/@/)) {
              return selector
            }

            if (selector.match(':host')) {
              return selector.replace(/:host/g, `.${classPrefix}`)
            }

            let ret = ''
            // rootClassNames.forEach(function (className) {
            //     let temp = selector.split(' ');
            //     if (temp[0] === ('.' + className)) {
            //         ret = selector + '-' + classPrefix;
            //     }
            // });
            ret = `.${classPrefix} ${selector}`

            return ret
          })
        }
      })
      cssContent = css.stringify(cssObj)
      cssContent = `.${classPrefix}{\ndisplay: ${classPrefixDisplay};\nheight: initial;\n}\n${cssContent}`
    } catch (e) {
      console.log()
      console.log('Invalid wxss file. - ', fileInfo.path)
    }
  }

  /**
   * page base component
   */
  cssContent = cssContent.replace(/^(page)(\s+|\{|\.|,)/, (...$) => {
    const className = `.${Config.options.pageContainerClassName}${$[2]}`
    return className
  })

  /**
   * page 标签高度百分比样式兼容
   */
  /*
    try {
        let cssObj = css.parse(cssContent);
        cssObj.stylesheet.rules
            .forEach(function (el) {
                if (el.selectors) {
                    let bool = false;
                    el.selectors
                        .forEach(function (selector) {
                            if (selector === '.' + Config.options.pageContainerClassName) {
                                bool = true;
                            }
                        });
                    if (bool) {
                        el.declarations =
                        el.declarations
                            .map(function (dec) {
                                if (dec.property === 'height' || dec.property === 'min-height') {
                                    dec.value = dec.value.replace(/%/, 'vh');
                                }

                                return dec;
                            });
                    }
                }
            });
        cssContent = css.stringify(cssObj);
    } catch (e) {
        console.error('[parseError]: ' + fileInfo.dist);
    }*/

  cssContent = prettierCode(cssContent, 'scss')
  if (/\S*\.wxml/.test(fileInfo.filename)) {
    return
  }
  fs.outputFileSync(fileInfo.dist, cssContent)
}
