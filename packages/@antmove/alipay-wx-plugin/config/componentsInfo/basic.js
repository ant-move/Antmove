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
    'text': {
        name: '文本',
        url: {
            original: 'https://docs.alipay.com/mini/component/text',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/text.html'
        },
        desc: '文本',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'selectable': createSupportProp('文本是否可选'),
            'space': createSupportProp('以何种方式显示连续空格'),
            'decode': createSupportProp('是否解码'),
            'number-of-lines': {
                type: 0,
                status: 2,
                desc: '多行省略，值须大于等于1',
            }
        }
    },
    'icon': {
        name: '图标',
        url: {
            original: 'https://docs.alipay.com/mini/component/icon',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html'
        },
        desc: '图标',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'type': createSupportProp('icon 类型，有效值： info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading'),
            'size': createSupportProp('icon 大小，单位 px'),
            'color': createSupportProp('icon的颜色，同css的color'),
        }
    },
    'progress': {
        name: '进度条',
        url: {
            original: 'https://docs.alipay.com/mini/component/progress',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html'
        },
        desc: '进度条',
        props: {
            'percent': createSupportProp('百分比0~100'),
            'show-info': createSupportProp('在右侧显示百分比值'),
            'stroke-width': {
                type: 3,
                status: 1,
                desc: '进度条线的宽度'
            },
            'active-color': {
                type: 1,
                status: 0,
                desc: '已选择的进度条的颜色',
                key: 'activeColor',
            },
            'background-color': {
                type: 1,
                status: 0,
                desc: '未选择的进度条的颜色',
                key: 'backgroundColor',
            },
            'active': createSupportProp('从左往右是否进行加载动画')
        }
    },
    'rich-text': {
        name: '富文本',
        url: {
            original: 'https://docs.alipay.com/mini/component/rich-text',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html'
        },
        desc: '富文本',
        props: {
            'nodes': {
                name: '富文本',
                status: 0,
                type: 7,
                desc: '富文本',
                props: {
                    'type': createSupportProp('节点类型'),
                    'name': createSupportProp('标签名'),
                    'attrs': createSupportProp('属性'),
                    'children': createSupportProp('子节点列表')
                }
            }
        }
    }
};