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
  pages: {
    url: {
      original: 'https://docs.alipay.com/mini/framework/page-json',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
    },
    type: 7,
    status: 0,
    desc: '设置页面路径',
  },
  window: {
    name: '用于对小程序进行全局配置，设置页面文件的路径、窗口表现、网络超时时间、多 tab 等',
    url: {
      original: 'https://docs.alipay.com/mini/framework/app-json',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window',
    },
    desc: 'window 用于设置小程序的状态栏、导航条、标题、窗口背景色等。',
    status: 1,
    props: {
      defaultTitle: {
        type: 1,
        status: 0,
        desc: '页面默认标题',
        msg: 'navigationBarTitleText',
      },
      pullRefresh: {
        type: 1,
        status: 0,
        desc: '是否允许下拉刷新。默认NO',
        msg: 'enablePullDownRefresh',
      },
      allowsBounceVertical: {
        type: 0,
        status: 2,
        desc: '是否允许向下拉拽。默认 YES',
        msg: '暂不支持',
      },
      transparentTitle: {
        type: 0,
        status: 2,
        desc: '导航栏透明设置。默认 none',
        msg: '暂不支持',
      },
      titlePenetrate: {
        type: 0,
        status: 2,
        desc: '是否允许导航栏点击穿透。默认 NO',
        msg: '暂不支持',
      },
      showTitleLoading: {
        type: 0,
        status: 2,
        desc: '是否进入时显示导航栏的 loading。默认 NO',
        msg: '暂不支持',
      },
      titleImage: {
        type: 0,
        status: 2,
        desc: '导航栏图片地址',
        msg: '暂不支持',
      },
      titleBarColor: {
        type: 1,
        status: 0,
        desc: '页面的背景色',
        msg: 'navigationBarBackgroundColor',
      },
      backgroundColor: {
        type: 7,
        status: 0,
        desc: '窗口的背景色',
      },
      backgroundImageColor: {
        type: 0,
        status: 2,
        desc: '下拉露出显示的背景图底色',
        msg: '暂不支持',
      },
      backgroundImageUrl: {
        type: 0,
        status: 2,
        desc: '下拉露出显示的背景图链接',
        msg: '暂不支持',
      },
      gestureBack: {
        type: 0,
        status: 2,
        desc: 'iOS 用，是否支持手势返回。默认 NO，支持 YES / NO',
        msg: '暂不支持',
      },
      enableScrollBar: {
        type: 0,
        status: 2,
        desc: 'Android 用，是否显示 WebView 滚动条',
        msg: '暂不支持',
      },
    },
  },
  tabBar: {
    name: '底部 tab 栏的表现',
    url: {
      original: 'https://docs.alipay.com/mini/framework/app-json',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar',
    },
    desc: '如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。',
    props: {
      textColor: {
        type: 1,
        status: 0,
        desc: 'tab 上的文字默认颜色，仅支持十六进制颜色',
        msg: 'color',
      },
      selectedColor: {
        type: 7,
        status: 0,
        desc: '选中文字颜色',
      },
      backgroundColor: {
        type: 7,
        status: 0,
        desc: 'tab 的背景色，仅支持十六进制颜色',
      },
      items: {
        name: '每个 tab 配置',
        type: 1,
        status: 0,
        desc: 'tab 的列表',
        msg: 'list',
        props: {
          pagePath: {
            type: 7,
            status: 0,
            desc: '设置页面路径',
          },
          name: {
            type: 1,
            status: 0,
            desc: 'tab 名称',
            msg: 'text',
          },
          icon: {
            type: 1,
            status: 0,
            desc: '平常图标路径',
            msg: 'iconPath',
          },
          activeIcon: {
            type: 1,
            status: 0,
            desc: '高亮图标路径',
            msg: 'selectedIconPath',
          },
        },
      },
    },
  },
}
