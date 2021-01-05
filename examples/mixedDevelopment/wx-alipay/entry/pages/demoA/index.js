Page({
    handleA(){
        if (wx.__target__ === 'wx') {
            console.log('这是个微信小程序')
        } else {
            console.log('这是个支付宝小程序')
        }
    },
    handleB(){
        if (wx.__target__ === 'alipay') {
            console.log('这是个支付宝小程序')
        } else {
            console.log('这是个微信小程序')
        }
    },
    handleC(){
        if (_my.__target__ === 'wx') {
            console.log('这是个微信小程序')
        } else {
            console.log('这是个支付宝小程序')
        }
    },
    handleD(){
        if (_my.__target__ === 'alipay') {
            console.log('这是个支付宝小程序')
        } else {
            console.log('这是个微信小程序')
        }
    }
})