Page({
  data: {
    key: '',
    data: '',
    keySync: '',
    dataSync: '',
  },

  keyChange(e) {
    console.log(e)
    this.setData({
      key: e.detail.value,
    })
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value,
    })
  },

  keyChangeSync(e) {
    console.log(e)
    this.setData({
      keySync: e.detail.value,
    })
  },

  dataChangeSync(e) {
    this.setData({
      dataSync: e.detail.value,
    })
  },

  getStorage() {
    const { key } = this.data
    const { data } = this.data
    console.log('data: ', this.data)
    if (key.length === 0) {
      this.setData({
        key,
        data,
      })

      my.alert({
        title: '读取数据失败',
        content: 'key 不能为空',
      })
    } else {
      my.getStorage({
        key,
        success(res) {
          my.alert({
            title: '读取数据成功',
            content: `data: '${JSON.stringify(res.data)}'`,
          })
        },
      })
      console.log('读取数据成功', my.getStorageSync({ key }).data)
    }
  },

  setStorage() {
    const { key } = this.data
    const { data } = this.data
    if (key.length === 0) {
      this.setData({
        key,
        data,
      })

      my.alert({
        title: '保存数据失败',
        content: 'key 不能为空',
      })
    } else {
      const that = this
      my.setStorage({
        key,
        data,
        success() {
          that.setData({
            key,
            data,
          })

          my.alert({
            title: '存储数据成功',
            content: `${key}: ${data}`,
          })
        },
      })
    }
  },

  removeStorage() {
    const that = this
    my.removeStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: '',
          data: '',
        })

        my.alert({
          title: '删除数据成功',
          content: '',
        })
      },
    })
  },
  clearStorage() {
    const that = this
    my.clearStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: '',
          data: '',
        })

        my.alert({
          title: '清除数据成功',
          content: '',
        })
      },
    })
  },
  getStorageInfo() {
    my.getStorageInfo({
      success(res) {
        my.alert({
          content: JSON.stringify({
            keys: res.keys,
            currentSize: res.currentSize,
            limitSize: res.limitSize,
          }),
        })
      },
    })
  },

  getStorageSync() {
    const key = this.data.keySync
    const data = this.data.dataSync
    console.log('data: ', this.data)
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      })

      my.alert({
        title: '同步读取数据失败',
        content: 'key 不能为空',
      })
    } else {
      const res = my.getStorageSync({ key })
      if (!res.error) {
        my.alert({
          title: '同步读取数据成功',
          content: `data: '${JSON.stringify(res.data)}'`,
        })
      }
    }
  },

  setStorageSync() {
    const key = this.data.keySync
    const data = this.data.dataSync
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      })

      my.alert({
        title: '同步保存数据失败',
        content: 'key 不能为空',
      })
    } else {
      const res = my.setStorageSync({ key, data })
      if (!res.error) {
        this.setData({
          keySync: key,
          dataSync: data,
        })

        my.alert({
          title: '同步存储数据成功',
          content: `${key}: ${data}`,
        })
      }
    }
  },

  removeStorageSync() {
    const res = my.removeStorageSync({ key: this.data.keySync })
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: '',
      })

      my.alert({
        title: '同步删除数据成功',
        content: '',
      })
    }
  },
  clearStorageSync() {
    const res = my.clearStorageSync()
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: '',
      })

      my.alert({
        title: '同步清除数据成功',
        content: '',
      })
    }
  },
  getStorageInfoSync() {
    const res = my.getStorageInfoSync()
    if (!res.error) {
      my.alert({
        content: JSON.stringify({
          keys: res.keys,
          currentSize: res.currentSize,
          limitSize: res.limitSize,
        }),
      })
    }
  },
})
