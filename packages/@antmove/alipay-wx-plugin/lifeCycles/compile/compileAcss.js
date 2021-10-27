const fs = require('fs-extra')
const { prettierCode } = require('@antmove/utils')
const css = require('css')
const generateAppCssStyle = require('../../generate/generateApp.css.js')
const Base64 = require('js-base64').Base64
const path = require('path')

module.exports = function(fileInfo, ctx) {
  fileInfo.dist = fileInfo.dist.replace(/\.acss/, '.wxss')
  let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || ''
  cssContent = cssContent.replace(/\.acss"/g, '.wxss"')
    
  if (fileInfo.deep === 0 || fileInfo.filename === 'app.acss') {
    cssContent = generateAppCssStyle(cssContent, ctx.output)
  }

  try {
    cssContent = processUrl(cssContent, ctx, fileInfo)
  } catch (error) {
    console.error(`Invalid Acss file: ${fileInfo.dist}`)
  }

  cssContent = prettierCode(cssContent, 'scss')
  fs.outputFileSync(fileInfo.dist, cssContent)
}

/**
 * process Css
 */
function processUrl(code, ctx) {
  const entry = ctx.entry
  code = css.parse(code)
  const rules = code.stylesheet.rules
  rules.forEach((el) => {
    if (el.type === 'rule') {
      el.declarations
        .map((dec) => {
          if (dec.property === 'background' || dec.property === 'background-image') {
            const reg = dec.value.match(/url\(['|"]*(\/.+)\)/)
                        
            if (reg) {
              let img = path.join(entry, reg[1])
              img = img.replace(/['|"]/, '')
              try {
                const str = fs.readFileSync(img, 'utf8')
                const base64 = Base64.encode(str)
                dec.value = dec.value.replace(/url\(['|"]*(\/.+)\)/, (...$) => {
                  let type = $[1].split('.')
                  type = type.pop()
                  type = type.replace(/['|"]/, '')

                  return `url(data:image/${type};base64,${base64})`
                })
              } catch (err) {
                console.error(`[Error]: no such file, open ${img}`)
              }
            }
          }

          return dec
        })
    }
  })

  return css.stringify(code)
}
