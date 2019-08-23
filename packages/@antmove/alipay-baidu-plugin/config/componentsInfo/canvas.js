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
            target: 'https://smartprogram.baidu.com/docs/develop/component/canvas/#canvas/',
            original: 'https://docs.alipay.com/mini/component/canvas'
        },
        desc: '画布。相关 API：my.createCanvasContext。',
        props: {
            id: createSupportProp('组件唯一标识符',1,'canvas-id'),
            'disable-scroll': createSupportProp('组件唯一标识符'),
            onTap: createSupportProp('组件唯一标识符',1),
            onTouchStart: createSupportProp('组件唯一标识符',1),
            onTouchMove: createSupportProp('组件唯一标识符',1),
            onTouchEnd: createSupportProp('组件唯一标识符',1),
            onTouchCancel: createSupportProp('组件唯一标识符',1),
            onLongTap: createSupportProp('组件唯一标识符',1)
        }
    }
};