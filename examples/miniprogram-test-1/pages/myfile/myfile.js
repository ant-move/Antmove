// pages/myfile/myfile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  saveFile() {
    console.log(12)
    wx.chooseImage({
      success: (res) => {
        console.log(res)
          wx.saveFile({
          tempFilePath: res.tempFilePaths[0],
          success: (res) => {
            console.log(JSON.stringify(res))
          },
        });
      },
    });
  },
  /**
   * removeSavedFile/getSavedFileList
   */
  removeSavedFile() {
    wx.getSavedFileList({
      success: (res) => {
        wx.removeSavedFile({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            console.log('remove success')
          }
        })
      }
    });
  },
  /**
   * getSavedFileInfo/getSavedFileList
   */
  getSavedFileInfo() {
    wx.getSavedFileList({
      success: (res) => {
        wx.getSavedFileInfo({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            console.log('getSavedFileInfo:', res)
          }
        })
      }
    });
  },
  /**
   * getFileInfo/getSavedFileList
   */
  getFileInfo() {
    wx.getSavedFileList({
      success: (res) => {
        wx.getFileInfo({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            console.log('getFileInfo:', res)
          }
        })
      }
    });
  }
})