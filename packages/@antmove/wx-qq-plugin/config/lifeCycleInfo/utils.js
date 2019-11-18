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
    /**
     * 类型描述对象创建
     * opts = {
     *      msg: '缺少对某某参数的支持',
     *      params: {},
     *      returnValue: {}
     * }
     */
    createDescObj (status, desc, wxUrl, alipayUrl, opts = {}) {
        return {
            status,
            desc,
            url: {
                wechat: wxUrl,
                alipay: alipayUrl
            },
            body: opts
        };
    }
};