const path = require('path')
const fs = require('fs-extra')
const { prettierCode } = require('@antmove/utils')
const generateAppCssStyle = require('../../generate/generateApp.css.js')

module.exports = function(fileInfo, ctx, projectPath) {
  fileInfo.dist = fileInfo.dist.replace(/\.acss/, '.css')
  let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || ''
   
  cssContent = cssContent.replace(/\.acss"/g, '.css";').replace(/\.acss'/g, '.css\';')

  if (fileInfo.deep === 0 || fileInfo.filename === 'app.acss') {
    cssContent = generateAppCssStyle(cssContent, ctx.output)
  }

  cssContent = prettierCode(cssContent, 'scss')
  const cssContentArr = cssContent.match(/(?<=url\().*?(?=.\))/g)
  if (cssContentArr) {
    cssContentArr.map((item) => {
      if (item.indexOf('"/') === 0 || item.indexOf('/') === 0 || item.indexOf('\'/') === 0) {
        const pathWay = fileInfo.dist.split(projectPath)[1]
        const num = pathWay.split(path.sep).length - 3
        const pathArr = []
        if (num > 0) {
          for (let i = 0; i <= num; i++) {
            pathArr.push('..')
          }
        } else {
          pathArr.push('.')
        }
        const newCssContent = item.replace(/\//, `${pathArr.join('/')}/`)
        cssContent = cssContent.replace(item, newCssContent)
      }
    })
  }
  fs.outputFileSync(fileInfo.dist, cssContent)
}
