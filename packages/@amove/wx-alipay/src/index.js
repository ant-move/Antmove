/*
 * @Author: your name
 * @Date: 2020-08-05 14:22:14
 * @LastEditTime: 2020-08-21 19:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antmove-zqs/packages/@amove/wx-alipay/src/index.js
 */
const path = require('path')
const { useReducer } = require('@amove/next')
require('../compiler/file')
require('../compiler')
require('../compilerLog/record')

useReducer({
  ApplicationMounted(node, store) {
    this.addChild('runGenerateBundleApi')
    this.addChild('runGenerateBundleComponent')
    this.addChild('generateNodeTrees')
    this.addChild('generateMiniProjectJson')
    if (store.config.env === 'development') {
      this.addChild('processRecord')
      const types = {
        writeReportPage: {
          distpath: path.join(store.config.output, `${store.config.preAppData.config.library.customComponentPrefix}/.config.json`),
          beginTime: node.beginTime,
        },
      }
      for (const t in types) {
        this.addChild({
          type: 'compilerLog',
          key: `compilerLog${t}`,
          body: {
            _type: t,
            opts: types[t],
          },
        })
      }
    }
  },
  processRecord(node, store) {
    const types = {
      findOpenAbility: {},
      statistics: {},
    }
    for (const t in types) {
      this.addChild({
        type: 'compilerLog',
        key: `compilerLog${t}`,
        body: {
          _type: t,
          opts: types[t],
        },
      })
    }
  },
})
