/*
 * @Author: your name
 * @Date: 2020-08-05 14:22:14
 * @LastEditTime: 2020-08-21 18:41:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /antmove-zqs/packages/@amove/wx-alipay/compiler/app/Wxss/index.js
 */
const path = require('path')
const { useReducer } = require('@amove/next')
const fs = require('fs-extra')

useReducer({
  AppWxss(node, store) {
    this.$node.content = fs.readFileSync(node.body.path, 'utf8')
    this.$node.projectPath = node.body.projectPath
    const output = path.join(store.config.output, node.body.projectPath)
    if (!this.$node.content) {
      this.$node.content = `/*${node.filePath}*/`
    }
    this.addChild('AppImportExpresstion')
    this.addChild({
      type: 'ProcessCss',
      key: `${node.path}ProcessCss`,
      dist: output,
      body: node.body,
    })
  },
  // transformAppCss(node, store) {
  //     let code = this.$node.content;
  //     const entry = path.join(__dirname, `../../../runtime/static`);
  //     const Config = store.config.preAppData.config;
  //     const customComponentPrefix = Config.library.customComponentPrefix;
  //     fs.copy(
  //         entry,
  //         path.join(store.config.output, `${customComponentPrefix}/static`),
  //         function (err) {
  //             if (err) console.error(err);
  //         }
  //     );
  //     const cssStyle = `
  //       @import '${customComponentPrefix}/static/app.acss';
  //     `;
  //     this.$node.content = cssStyle + "\n" + code;
  // },
  AppImportExpresstion(node, store) {
    const Config = store.config.preAppData.config
    const customComponentPrefix = Config.library.customComponentPrefix
    const entry = path.join(__dirname, '../../../runtime/static')
    const code = this.$node.content
    fs.copy(
      entry,
      path.join(store.config.output, `${customComponentPrefix}/static`),
      (err) => {
        if (err) { console.error(err) }
      },
    )
    const cssStyle = `
        @import '${customComponentPrefix}/static/app.acss';
      `
    this.$node.content = `${cssStyle}\n${code}`
  },
})
