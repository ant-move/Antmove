const { runApp, useReducer, App } = require('@amove/next')
const preApplication = require('@amove/directory-to-ast')
const AmoveBabel = require('@amove/babel')
// const Index = require("./index");
const { WxPre, WxPlugin } = require('@amove/wx')
// const utils = require("@amove/wx-utils");

const defulatConfig = {
  env: 'production',
  isDev() {
    return this.env === 'development'
  },
  hasWxs: true, // 是否支持 wxs
  wxsPolyfillPath: 'api/sjs/',
  TYPE: 'tt',
  component2: true,
  target: '_',
  min: false, // minify polyfill api
  options: {
    scopeStyle: false,
    pageContainerClassName: 'page-container-classname',
  },
  library: {
    customComponentPrefix: '/__antmove', // 编译输出目录
    customComponentNamePrefix: 'antmove',
  },
  wrapApiFiles: ['index.js', 'utils.js', 'log.js', 'runtimeProcess.js'],
  compile: {
    customComponent: {
      'classSubdirectory/app.js': true,
      'classSubdirectory/page.js': true,
      'classSubdirectory/component.js': true,
      'componentClass.js': true,
      'utils.js': true,
    },
    wrapApis: {},
  },
  log: {
    runtime: {
      dirname: 'ant-move-runtime-logs',
    },
  },
  ex: {
    xml: '.ttml',
    css: '.ttss',
    _type: '_tt',
  },
}

module.exports = function(options = {}) {
  let preAppData = {}
  options.type = options.type || 'wx2my'
  options.fromId = options.fromId || '0'

  /**
     * 预处理，解析小程序页面组件结构
     */
  const preApp = new App()
  preApp.useReducer(preApplication, 'Application')
  preApp.useReducer(WxPre)
  preApp.runApp(
    {
      ...options,
      config: defulatConfig,
    },
    (ctx) => {
      preAppData = {
        nodes: ctx.store.nodes,
        appJson: ctx.store.appInfo,
        pages: ctx.store.pages,
        config: defulatConfig,
      }

      /**
             * 正式编译转换处理
             */
      useReducer(preApplication, 'Application')
      useReducer(AmoveBabel)
      // useReducer(Index);
      if (options.plugins && Array.isArray(options.plugins)) {
        options.plugins.forEach((el) => {
          useReducer(el)
        })
      }
      require('./src/index')
      require('@amove/wx-utils')
      useReducer(WxPlugin)
      runApp(
        {
          ...options,
          preAppData,
        },
        () => {
          console.log('完成')
        },
      )
    },
        
  )
}
