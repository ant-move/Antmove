Page({
  data:{
      closeShow:true,
      closeActionShow:true
  },
  linkClick() {
      my.showToast({
          content: '你点击了图标Link NoticeBar',
          duration: 3000
      });
  },
  closableClick() {
      this.setData({
          closeShow:false
      })
      my.showToast({
          content: '你点击了图标close NoticeBar',
          duration: 3000
      });
  },
  linkActionClick() {
      my.showToast({
          content: '你点击了文本Link NoticeBar',
          duration: 3000
      });
  },
  closableActionClick() {
      this.setData({
          closeActionShow:false
      })
      my.showToast({
          content: '你点击了文本close NoticeBar',
          duration: 3000
      });
  }
})