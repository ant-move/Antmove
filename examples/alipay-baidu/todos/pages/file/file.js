Page({
  data: {
    imgArr: []
  },
  onLoad() { },
  chooseImage() {
    my.chooseImage({
      sourceType: ['camera', 'album'],
      count: 2,
      success: (res) => {
        this.setData({
          imgArr: res.apFilePaths
        })
        my.alert({
          content: JSON.stringify(res),
        });
      },
      fail: () => {
        my.showToast({
          content: 'fail',
        });
      }
    })
  },
  getFileInfo() {
      console.log(this.data.imgArr)
    const apFilePath = this.data.imgArr[0];
    my.getFileInfo({
      apFilePath,
      digestAlgorithm: 'sha1',
      success: (res) => {
        my.alert({
          title: JSON.stringify(res)
        });
      }
    })
  },
  getSavedFileInfo() {
    const apFilePath = this.data.imgArr[0];
    my.getSavedFileInfo({
      apFilePath,
      success: (res) => {
        my.alert({
          title: JSON.stringify(res)
        });
      }
    })
  },
  getSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        console.log(2,res)
      }
    });
  },
  removeSavedFile() {
    const apFilePath = this.data.imgArr[0];
    my.removeSavedFile({
      apFilePath,
      success: (res) => {
        my.alert({
          title: 'remove success'
        })
      }
    })
  },
  saveFile() {
    my.saveFile({
      apFilePath: this.data.imgArr[0],
      success: (res) => {
        my.alert({
          title: JSON.stringify(res)
        });
      },
    });
  },
});
