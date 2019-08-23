str1 = `module.exports = {
    heardArray:[
        {doc: 'readme', label: '指南'},
        {doc: 'wechat-alipay-api-basic', label: '微信转支付宝'},
        {doc: 'alipay-wechat-api-view', label: '支付宝转微信'}, 
        {doc: 'alipay-baidu-api-currency', label: '支付宝转百度'},
        { href: 'https://github.com/ant-move/antmove', label: 'GitHub' }
]}`
str2 = `module.exports = {
    heardArray : [ 
        {doc: 'readme', label: '指南'}, 
        {doc: 'wechat-alipay-api-basic', label: '微信转支付宝'}, 
        {doc: 'alipay-wechat-api-view', label: '支付宝转微信'}, 
        {doc: 'alipay-baidu-api-currency', label: '支付宝转百度'},
        {doc: 'wechat-amap-components-view',label: '微信转高德'},
        { href: 'https://github.com/ant-move/antmove', label: 'GitHub' }
]}`
module.exports = {
    //external or inside
    isExternal : "external",
    str1,
    str2
}