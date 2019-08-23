const { createDescObj } = require('./utils');
/**
 * 基础
 */
module.exports = {
    onInit: createDescObj(
        0,
        "组件创建时触发",
        "https://docs.alipay.com/mini/framework/component-lifecycle",
        "https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/",
        {
            msg: "封装可实现"
        }
    ),
    deriveDataFromProps: createDescObj(
        2,
        "组件创建时触发",
        "https://docs.alipay.com/mini/framework/component-lifecycle",
        ""
    ),
    
    didMount: createDescObj(
        0,
        "组件创建时触发",
        "https://docs.alipay.com/mini/framework/component-lifecycle",
        "https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/",
        {
            msg: "封装可实现"
        }
    ),
    didUpdate: createDescObj(
        0,
        "组件更新完毕时触发",
        "https://docs.alipay.com/mini/framework/component-lifecycle",
        ""
    ),
    didUnmount: createDescObj(
        0,
        "组件删除时触发",
        "https://docs.alipay.com/mini/framework/component-lifecycle",
        ""
    ),
};