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
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
            target: 'https://q.qq.com/wiki/develop/miniprogram/component/canvas/canvas.html'
        },
        desc: '相关api：wx.createCanvasContext。',
        props: {
            'type': {
                type: 0,
                status: 2,
                desc: '指定 canvas 类型，当前仅支持 webgl'
            },
            'canvas-id': createSupportProp('canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性'),
            'disable-scroll': createSupportProp('当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新'),
            'bindtouchstart': createSupportProp('手指触摸动作开始'),
            'bindtouchmove': createSupportProp('手指触摸动作移动'),
            'bindtouchend': createSupportProp('手指触摸动作结束'),
            'bindtouchcancel': createSupportProp('手指触摸动作被打断，如来电提醒，弹窗'),
            'bindlongtap': createSupportProp('手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动'),
            'binderror': createSupportProp('当发生错误时触发 error 事件'),
        }
    }
};