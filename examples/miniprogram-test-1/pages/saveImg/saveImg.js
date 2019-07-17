// pages/saveImg/saveImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  saveImg(){

    console.log(123)
    wx.saveImageToPhotosAlbum({ 
      filePath: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg' ,
      fail(err){
        console.log(err)
      }
    });
  },
  showImg(){
    wx.previewImage({
      current: "https://pub-static.haozhaopian.net/static/web/site/features/cn/crop/images/crop_20a7dc7fbd29d679b456fa0f77bd9525d.jpg", // 当前显示图片的http链接
      urls: ["https://pub-static.haozhaopian.net/static/web/site/features/cn/crop/images/crop_20a7dc7fbd29d679b456fa0f77bd9525d.jpg", 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg'] // 需要预览的图片http链接列表
    })
  },
  compressImage(){
   
    wx.compressImage({
      src: 'https://pub-static.haozhaopian.net/static/web/site/features/cn/crop/images/crop_20a7dc7fbd29d679b456fa0f77bd9525d.jpg', // 图片路径
      quality: 50 // 压缩质量
    })
  },
  mychooseMessageFile(){
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  chooseImageTap(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
      }
    });
  }
  
  
})