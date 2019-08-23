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
    'canvas': {
        name: '画布',
        url: {
            original: 'https://docs.alipay.com/mini/component/canvas',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html'
        },
        desc: '相关 API：my.createCanvasContext',
        props: {
            'id': {
                type: 1,
                status: 0,
                desc: 'canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性',
                key: 'canvas-id',
            },
            'style': createSupportProp('内联样式'),
            'class': createSupportProp('外联样式'),
            'width': {
                type: 0,
                status: 2,
                desc: 'canvas width attribute'
            },
            'height': {
                type: 0,
                status: 2,
                desc: 'canvas height attribute'
            },
            'disable-scroll': createSupportProp('禁止屏幕滚动以及下拉刷新'),
            'onTap': {
                type: 1,
                status: 0,
                desc: '点击事件',
                key: 'bindtap'
            },
            'onTouchStart': {
                type: 1,
                status: 0,
                desc: '手指触摸动作开始',
                key: 'bindtouchstart',
            },
            'onTouchMove': {
                type: 1,
                status: 0,
                desc: '手指触摸后移动',
                key: 'bindtouchmove',
            },
            'onTouchEnd': {
                type: 1,
                status: 0,
                desc: '手指触摸动作结束',
                key: 'bindtouchend',
            },
            'onTouchCancel': {
                type: 1,
                status: 0,
                desc: '手指触摸动作被打断，如来电提醒，弹窗',
                key: 'bindtouchcancel',
            },
            'onLongTap': {
                type: 1,
                status: 0,
                desc: '手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动',
                key: 'bindlongtap',
            }
        }
    }
};