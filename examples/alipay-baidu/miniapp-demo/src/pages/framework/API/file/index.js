Page({
  data: {},
  onLoad() { },
  saveFile() {
    my.chooseImage({
      success: (res) => {
        my.saveFile({
          apFilePath: res.apFilePaths[0],
          success: (data) => {
            my.alert({
              content: `成功，${JSON.stringify(data)}`,
            })
          },
        })
      },
    })
  },
  getFileInfo() {
    my.chooseImage({
      success: (res) => {
        my.getFileInfo({
          apFilePath: res.apFilePaths[0], // 文件路径
          success: (data) => {
            my.alert({
              content: `成功，${JSON.stringify(data)}`,
            })
          },
          fail: (data) => {
            my.alert({
              content: `失败，${JSON.stringify(data)}`,
            })
          },
        })
      },
    })
  },
  getSavedFileInfo() {
    my.chooseImage({
      success: (res) => {
        console.log(res)
        my.saveFile({
          apFilePath: res.apFilePaths[0],
          success: num => {
            console.log(num)
            my.getSavedFileInfo({
              apFilePath: num.apFilePath,
              success: (data) => {
                my.alert({
                  content: `成功，${JSON.stringify(data)}`,
                })
              },
              fail: (data) => {
                my.alert({
                  content: `失败，${JSON.stringify(data)}`,
                })
              },
            })
          },
        })
      },
    })
  },
  getSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
        console.log(res)
      },
      fail: (res) => {
        my.alert({
          content: `失败，${JSON.stringify(res)}`,
        })
      },
    })
  },
  removeSavedFile() {
    my.getSavedFileList({
      success: (res) => {
        my.removeSavedFile({
          apFilePath: res.fileList[0].apFilePath,
          success: (data) => {
            my.alert({
              content: `成功，${JSON.stringify(data)}`,
            })
          },
          fail: (data) => {
            my.alert({
              content: `失败，${JSON.stringify(data)}`,
            })
          },
        })
      },
    })
  },
})
