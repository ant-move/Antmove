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
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/text.html',
            target: 'https://developer.toutiao.com/dev/miniapp/ukTOx4SO5EjL5kTM'
        },
        desc: '文本。',
        props: {
            'selectable': createSupportProp('是否可以选中文字'),
            'space': createSupportProp('是否显示连续的空格'),
            'decode': createSupportProp('是否转义')
        }
    },
    'rich-text': {
        name: '富文本',
        type: 1,
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
            target: 'https://developer.toutiao.com/dev/miniapp/uEDMy4SMwIjLxAjM',
        },
        desc: '富文本。',
        props: {
            'nodes': createSupportProp('节点列表 / HTML String')
        }
    },
    'icon': {
        name: '图标',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html',
            target: 'https://docs.alipay.com/mini/component/icon'
        },
        desc: '组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'color': createSupportProp('icon的颜色，同css的color'),
            'type': createSupportProp('icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear')
        }
    },
    'progress': {
        name: '进度条',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
            target: 'https://developer.toutiao.com/dev/miniapp/uMTOx4yM5EjLzkTM'
        },
        desc: '组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'percent': createSupportProp('百分比0~100'),
            'active': createSupportProp('进度条从左往右的动画'),
            'active-mode': createSupportProp('backwards: 动画从头播；forwards：动画从上次结束点接着播')
        }
    },
    'block': {
        name: '块',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html#block%20wx:for',
            target: 'https://developer.toutiao.com/dev/miniapp/uIzNx4iM3EjLycTM'
        },
        desc: '渲染一个包含多节点的结构块',
        type: 1,
        status: 0
    },
    'import': {
        name: '引用',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html',
            target: 'https://developer.toutiao.com/dev/miniapp/ucDOx4yN4EjL3gTM'
        },
        desc: 'import可以在该文件中使用目标文件定义的template',
        props: {
            src: createSupportProp('路径'),
        },
        type: 7,
        status: 0
    },
    'template': {
        name: '模板',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html',
            target: 'https://developer.toutiao.com/dev/miniapp/ucDOx4yN4EjL3gTM'
        },
        desc: '可以在模板中定义代码片段，然后在不同的地方调用',
        props: {
            'name': createSupportProp('名字'),
            'is': createSupportProp('声明需要的使用的模板'),
            'data': createSupportProp('数据'),
        },
        type: 7,
        status: 0
    }
};