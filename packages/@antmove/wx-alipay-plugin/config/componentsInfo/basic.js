const { createSupportProp } = require('./utils.js');
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
    'icon': {
        name: '图标',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html',
            alipay: 'https://docs.alipay.com/mini/component/icon'
        },
        desc: '组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            },
            'size': {
                type: 3,
                status: 1,
                desc: 'icon的大小，单位px',
                msg: '支付宝小程序只支持数值类型'
            },
            'color': createSupportProp('icon的颜色，同css的color'),
            'type': createSupportProp('icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear')
        }
    },
    'progress': {
        name: '进度条',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
            alipay: 'https://docs.alipay.com/mini/component/progress'
        },
        desc: '组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'percent': createSupportProp('百分比0~100'),
            'show-info': createSupportProp('在进度条右侧显示百分比'),
            'border-radius': {
                type: 0,
                status: 2,
                desc: '圆角大小',
            },
            'font-size': {
                type: 0,
                status: 2,
                desc: '右侧百分比字体大小',
            },
            'stroke-width': {
                type: 3,
                status: 1,
                desc: '进度条线的宽度',
                msg: '支付宝小程序只支持数值类型'
            },
            'color': {
                type: 3,
                status: 0,
                desc: '进度条颜色',
                key: 'active-color',
            },
            'activeColor': {
                type: 1,
                status: 0,
                desc: '已选择的进度条的颜色',
                key: 'active-color',
            },
            'backgroundColor': {
                type: 1,
                status: 0,
                desc: '未选择的进度条的颜色',
                key: 'background-color',
            },
            'active': createSupportProp('进度条从左往右的动画'),
            'active-mode': {
                type: 0,
                status: 2,
                desc: 'backwards: 动画从头播；forwards：动画从上次结束点接着播',
            },
            'bindactiveend': {
                type: 0,
                status: 2,
                desc: '动画完成事件',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
        }
    },
    'rich-text': {
        name: '富文本',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
            alipay: 'https://docs.alipay.com/mini/component/rich-text'
        },
        desc: '富文本。',
        props: {
            'nodes': {
                type: 3,
                status: 1,
                desc: '节点列表/HTML String',
                msg: '支付宝小程序只支持Array类型'
            },
            'space': {
                type: 0,
                status: 2,
                desc: '显示连续空格',
            }
        }
    },
    'text': {
        name: '文本',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/text.html',
            alipay: 'https://docs.alipay.com/mini/component/text'
        },
        desc: '文本。',
        props: {
            'selectable': createSupportProp('文本是否可选'),
            'space': createSupportProp('显示连续空格'),
            'decode': createSupportProp('是否解码'),
            'hidden': {
                type: 0,
                status: 2,
                desc: '隐藏该组件',
            }
        }
    }
};