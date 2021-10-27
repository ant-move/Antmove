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

module.exports = {
  defaultTitle: {
    type: 1,
    status: 0,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '页面默认标题',
    msg: '封装后支持',
    key: 'navigationBarTitleText',
  },
  allowsBounceVertical: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '是否允许向下拉拽。默认 YES',
    msg: '百度小程序不支持修改',
  },
  pullRefresh: {
    type: 1,
    status: 0,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '是否允许下拉刷新。默认NO',
    msg: '封装后支持',
    key: 'enablePullDownRefresh',
  },
  transparentTitle: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '导航栏透明设置',
    msg: '百度小程序不支持',
        
  },
  titlePenetrate: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '是否允许导航栏点击穿透',
    msg: '百度小程序不支持',
  },
  showTitleLoading: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '是否进入时显示导航栏的 loading',
    msg: '百度小程序不支持',
  },
  titleImage: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '导航栏图片地址',
    msg: '百度小程序不支持',
  },
  titleBarColor: {
    type: 1,
    status: 0,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '导航栏背景色',
    msg: '封装后支持',
    key: 'navigationBarBackgroundColor',
  },
  backgroundColor: {
    type: 7,
    status: 0,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '背景颜色',
    msg: '完全支持',
  },
  backgroundImageColor: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '下拉露出显示的背景图底色',
    msg: '百度小程序不支持',
  },
  backgroundImageUrl: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '下拉露出显示的背景图链接',
    msg: '百度小程序不支持',
  },
  gestureBack: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: 'iOS 用，是否支持手势返回',
    msg: '百度小程序不支持',
  },
  enableScrollBar: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: 'Android 用，是否显示 WebView 滚动条',
    msg: '百度小程序不支持',
  },
  optionMenu: {
    type: 0,
    status: 2,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
      original: 'https://docs.alipay.com/mini/framework/page-json',
    },
    desc: '设置导航栏额外图标，目前支持设置属性 icon',
    msg: '百度小程序不支持',
  },
  component: {
    type: 7,
    status: 0,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/framework/custom-component/',
      original: 'https://docs.alipay.com/mini/framework/component_configuration',
    },
    desc: '声明自定义组件',
    msg: '完整支持',
  },
  usingComponents: {
    type: 7,
    status: 0,
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/framework/custom-component/',
      original: 'https://docs.alipay.com/mini/framework/component_configuration',
    },
    desc: '声明依赖的自定义组件所在路径',
    msg: '完整支持',
  },
}
