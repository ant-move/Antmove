/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 * 5 - wrapComponent - 使用自定义组件代替
 * 6 - diff tagName
 * 7 - equal - 完全支持
 * 
 * status - 支持程度
 * 0 - 完整支持
 * 1 - 部分支持
 * 2 - 不支持
 * 
 * desc - 组件或属性作用描述
 */

const info = {
  pages: {
    name: '设置页面路径',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages',
      alipay: 'https://docs.alipay.com/mini/framework/app-json',
    },
    desc: '用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。',
    status: 0,
    type: 7,
  },
  window: {
    name: '设置默认页面的窗口表现',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window',
      alipay: 'https://docs.alipay.com/mini/framework/app-json',
    },
    desc: 'window 用于设置小程序的状态栏、导航条、标题、窗口背景色等。',
    status: 1,
    props: {
    },
  },
  tabBar: {
    name: '底部 tab 栏的表现',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar',
      alipay: 'https://docs.alipay.com/mini/framework/app-json',
    },
    desc: '如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。',
    props: {
    },
  },
  networkTimeout: {
    name: '网络超时时间',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#networkTimeout',
      alipay: '',
    },
    desc: '各类网络请求的超时时间，单位均为毫秒。',
  },
  debug: {
    name: '是否开启 debug 模式，默认关闭',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#debug',
      alipay: '',
    },
    desc: '可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。',
  },
  functionalPages: {
    name: '是否启用插件功能页，默认关闭',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#functionalPages',
      alipay: '',
    },
    desc: '插件所有者小程序需要设置这一项来启用插件功能页。',
  },
  subpackages: {
    name: '分包结构配置',
    status: 1,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#subpackages',
      alipay: 'https://docs.alipay.com/mini/framework/subpackages',
    },
    props: {
    },
    desc: '启用分包加载时，声明项目分包结构。',
  },
  workers: {
    name: 'Worker 代码放置的目录',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#workers',
      alipay: '',
    },
    desc: '使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录',
  },
  requiredBackgroundModes: {
    name: '需要在后台使用的能力，如「音乐播放」',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#requiredBackgroundModes',
      alipay: '',
    },
    desc: '申明需要后台运行的能力，类型为数组。目前支持以下项目：audio后台音乐播放',
  },
  plugins: {
    name: '使用到的插件',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#plugins',
      alipay: '',
    },
    desc: '声明小程序需要使用的插件。',
  },
  preloadRule: {
    name: '分包预下载规则',
    type: 0,
    status: 1,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#preloadRule',
      alipay: 'https://docs.alipay.com/mini/framework/subpackages',
    },
    desc: '声明分包预下载的规则',
    props: {
    },
  },
  resizable: {
    name: 'iPad 小程序是否支持屏幕旋转，默认关闭',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#resizable',
      alipay: '',
    },
    desc: '在 iPad 上运行的小程序可以设置支持屏幕旋转。',
  },
  navigateToMiniProgramAppIdList: {
    name: '需要跳转的小程序列表，详见 wx.navigateToMiniProgram',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#navigateToMiniProgramAppIdList',
      alipay: '',
    },
    desc: '当小程序需要使用 wx.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个。',
  },
  usingComponents: {
    name: '全局自定义组件配置',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#usingComponents',
      alipay: '',
    },
    desc: '在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。',
  },
  permission: {
    name: '小程序接口权限相关设置',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission',
      alipay: '',
    },
    desc: '小程序接口权限相关设置。字段类型为 Object',
  },
  sitemapLocation: {
    name: '指明 sitemap.json 的位置',
    type: 0,
    status: 2,
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#sitemapLocation',
      alipay: '',
    },
    desc: '指明 sitemap.json 的位置',
  },
}

module.exports = info
