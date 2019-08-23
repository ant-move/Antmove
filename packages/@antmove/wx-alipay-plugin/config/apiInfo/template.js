const { createDescObj } = require('./utils');
/**
 * wxml 模板
 */
module.exports = {
    createSelectorQuery: createDescObj(
        1,
        '返回一个 SelectorQuery 对象实例',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html',
        'https://docs.alipay.com/mini/api/selector-query',
        {
            msg: '返回值方法缺失',
            returnValue: {
                props: {
                    in: {
                        type: 0,
                        desc: '将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）'
                    }
                }
            }
        }
    ),
    createIntersectionObserver: createDescObj(
        2,
        '创建并返回一个 IntersectionObserver 对象实例',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html',
        ''
    ),
    IntersectionObserver: createDescObj(
        2,
        'IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html',
        ''
    ),
    NodesRef: createDescObj(
        2,
        '用于获取 WXML 节点信息的对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html',
        ''
    ),
    SelectorQuery: createDescObj(
        0,
        '查询节点信息的对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html',
        'https://docs.alipay.com/mini/api/selector-query'
    )
};