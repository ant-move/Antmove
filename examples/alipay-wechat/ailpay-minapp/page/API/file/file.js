Page({
  data: {
    tempFilePath: '',
    savedFilePath: '',
  },
  onLoad() {
    my.getStorage({
      key: 'savedFilePath', // 缓存数据的 key
      success: (res) => {
        this.setData({
          savedFilePath: res.data ? res.data : '',
        });
      },
    });
  },
  chooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log('chooseImage', res);
        this.setData({
          tempFilePath: res.apFilePaths[0],
        });
      },
    });
  },
  saveFile() {
    if (this.data.tempFilePath.length > 0) {
      const that = this;
      my.saveFile({
        apFilePath: this.data.tempFilePath,
        success(res) {
          console.log('saveFile', res);
          that.setData({
            savedFilePath: res.apFilePath,
          });
          my.setStorage({ key: 'savedFilePath', data: res.apFilePath });
          my.alert({
            title: '保存成功', // alert 框的标题
            content: `下次进入应用时，此文件仍可用:${JSON.stringify(res)}`,
          });
        },
      });
    }
  },
  getFileInfo() {
    my.getFileInfo({
      apFilePath:this.data.tempFilePath,
      digestAlgorithm:'sha1',
      success:(res)=>{
        my.alert({
          title: '文件信息',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res))
      }
    })
  },
  getSavedFileInfo() {
    my.getSavedFileInfo({
      apFilePath: this.data.savedFilePath,
      success: (res) => {
        my.alert({
          title: '文件信息',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res))
      }
    })
  },
  getSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({
          title: '已保存文件列表',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res))
      }
    });
  },
  removeSavedFile() {
    my.getSavedFileList({
      success: (res) => {
        my.removeSavedFile({
          apFilePath: res.fileList[0].apFilePath,
          success: (res) => {
            my.alert({
              title: '移除文件成功',
              content: JSON.stringify(res),
            });
            console.log('remove success')
          }
        })
      }
    });
  },
  clear() {
    my.setStorage({ key: 'savedFilePath', data: '' })
    this.setData({
      tempFilePath: '',
      savedFilePath: '',
    });
  },
});
