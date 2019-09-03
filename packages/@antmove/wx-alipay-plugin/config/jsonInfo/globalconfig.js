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

let info = {
    'pages': {
        name: '设置页面路径',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages',
            alipay: 'https://docs.alipay.com/mini/framework/app-json'
        },
        desc: '用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。',
        status: 0,
        type: 7
    },
    'window': {
        name: '设置默认页面的窗口表现',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window',
            alipay: 'https://docs.alipay.com/mini/framework/app-json'
        },
        desc: 'window 用于设置小程序的状态栏、导航条、标题、窗口背景色等。',
        status: 1,
        props: {
            'navigationBarBackgroundColor': {
                type: 1,
                status: 0,
                desc: '导航栏背景颜色，如 #000000',
                key: 'titleBarColor'
            },
            'navigationBarTextStyle': {
                type: 0,
                status: 2,
                desc: '导航栏标题颜色，仅支持 black / white',
            },
            'navigationBarTitleText': {
                type: 1,
                status: 0,
                desc: '导航栏标题文字内容',
                key: 'defaultTitle'
            },
            'navigationStyle': {
                type: 0,
                status: 2,
                desc: '导航栏样式',
            },
            'backgroundColor': {
                type: 7,
                status: 0,
                desc: '窗口的背景色',
            },
            'backgroundTextStyle': {
                type: 0,
                status: 2,
                desc: '下拉 loading 的样式，仅支持 dark / light',
            },
            'backgroundColorTop': {
                type: 0,
                status: 2,
                desc: '顶部窗口的背景色，仅 iOS 支持',
            },
            'backgroundColorBottom': {
                type: 0,
                status: 2,
                desc: '底部窗口的背景色，仅 iOS 支持',
            },
            'enablePullDownRefresh': {
                type: 1,
                status: 0,
                desc: '是否开启全局的下拉刷新',
                key: 'pullRefresh'
            },
            'onReachBottomDistance': {
                type: 0,
                status: 2,
                desc: '页面上拉触底事件触发时距页面底部距离，单位为 px',
            },
            'pageOrientation': {
                type: 0,
                status: 2,
                desc: '屏幕旋转设置，支持 auto / portrait / landscape,详见 响应显示区域变化',
            }
        }
    },
    'tabBar': {
        name: '底部 tab 栏的表现',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar',
            alipay: 'https://docs.alipay.com/mini/framework/app-json'
        },
        desc: '如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。',
        props: {
            'color': {
                type: 1,
                status: 0,
                desc: 'tab 上的文字默认颜色，仅支持十六进制颜色',
                key: 'textColor'
            },
            'selectedColor': {
                type: 7,
                status: 0,
                desc: '选中文字颜色'
            },
            'backgroundColor': {
                type: 7,
                status: 0,
                desc: 'tab 的背景色，仅支持十六进制颜色',
            },
            'borderStyle': {
                type: 0,
                status: 2,
                desc: 'tabbar 上边框的颜色， 仅支持 black / white',
            },
            'list': {
                name: 'tab 的列表',
                type: 1,
                status: 0,
                desc: 'tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab',
                key: 'items',
                props: {
                    'pagePath': {
                        type: 7,
                        status: 0,
                        desc: '设置页面路径',
                    },
                    'text': {
                        type: 1,
                        status: 0,
                        desc: 'tab 上按钮文字',
                        key: 'name'
                    },
                    'iconPath': {
                        type: 1,
                        status: 0,
                        desc: '平常图标路径',
                        key: 'icon'
                    },
                    'selectedIconPath': {
                        type: 1,
                        status: 0,
                        desc: '选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。',
                        key: 'activeIcon'
                    }
                }
            },
            'position': {
                type: 0,
                status: 2,
                desc: 'tabBar 的位置，仅支持 bottom / top',
            },
            'custom': {
                type: 0,
                status: 2,
                desc: '自定义 tabBar',
            }
        }
    },
    'networkTimeout': {
        name: '网络超时时间',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#networkTimeout',
            alipay: ''
        },
        desc: '各类网络请求的超时时间，单位均为毫秒。',
    },
    'debug': {
        name: '是否开启 debug 模式，默认关闭',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#debug',
            alipay: ''
        },
        desc: '可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。',
    },
    'functionalPages': {
        name: '是否启用插件功能页，默认关闭',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#functionalPages',
            alipay: ''
        },
        desc: '插件所有者小程序需要设置这一项来启用插件功能页。',
    },
    'subpackages': {
        name: '分包结构配置',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#subpackages',
            alipay: ''
        },
        desc: '启用分包加载时，声明项目分包结构。',
    },
    'workers': {
        name: 'Worker 代码放置的目录',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#workers',
            alipay: ''
        },
        desc: '使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录',
    },
    'requiredBackgroundModes': {
        name: '需要在后台使用的能力，如「音乐播放」',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#requiredBackgroundModes',
            alipay: ''
        },
        desc: '申明需要后台运行的能力，类型为数组。目前支持以下项目：audio后台音乐播放',
    },
    'plugins': {
        name: '使用到的插件',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#plugins',
            alipay: ''
        },
        desc: '声明小程序需要使用的插件。',
    },
    'preloadRule': {
        name: '分包预下载规则',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#preloadRule',
            alipay: ''
        },
        desc: '声明分包预下载的规则',
    },
    'resizable': {
        name: 'iPad 小程序是否支持屏幕旋转，默认关闭',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#resizable',
            alipay: ''
        },
        desc: '在 iPad 上运行的小程序可以设置支持屏幕旋转。',
    },
    'navigateToMiniProgramAppIdList': {
        name: '需要跳转的小程序列表，详见 wx.navigateToMiniProgram',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#navigateToMiniProgramAppIdList',
            alipay: ''
        },
        desc: '当小程序需要使用 wx.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个。',
    },
    'usingComponents': {
        name: '全局自定义组件配置',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#usingComponents',
            alipay: ''
        },
        desc: '在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。',
    },
    'permission': {
        name: '小程序接口权限相关设置',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission',
            alipay: ''
        },
        desc: '小程序接口权限相关设置。字段类型为 Object',
    },
    'sitemapLocation': {
        name: '指明 sitemap.json 的位置',
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#sitemapLocation',
            alipay: ''
        },
        desc: '指明 sitemap.json 的位置',
    }
};

const { isAmap } = require('../../utils/index');

if (isAmap()) {
    info = require('@antmove/wx-amap/config/jsonInfo/globalconfig');
}

module.exports = info;