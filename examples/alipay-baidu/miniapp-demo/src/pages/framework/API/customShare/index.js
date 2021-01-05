Page({
  data: {},
  onLoad() {},
  onShareAppMessage() {
    return {
      title: '小程序示例',
      desc: '小程序官方示例Demo，展示已支持的接口能力及组件。',
      path: 'pages/index/index',
      content: 'content......',
      imageUrl: 'https://www.baidu.com/img/bd_logo1.png',
      bgImgUrl: 'https://www.baidu.com/img/bd_logo1.png',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
    }
  },
})
