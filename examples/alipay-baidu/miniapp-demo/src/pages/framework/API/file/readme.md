# 文件
### 扫码预览
![file.png](https://cache.amap.com/ecology/tool/miniapp/1563435848807.png)
## my.saveFile
保存文件到本地（本地文件大小总容量限制：10M）

### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| apFilePath | String | 是 | 文件路径 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success返回值说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| apFilePath | String | 文件保存路径 |

## my.getFileInfo
### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| apFilePath | String | 是 | 文件路径 | v9.05 |
| digestAlgorithm | String | 否 | 摘要算法，支持md5和sha1，默认为md5 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success返回值说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| size | Number | 文件大小 |
| digest | String | 摘要结果 |

## my.getSavedFileInfo
获取保存的文件信息
### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| apFilePath | String | 是 | 文件路径 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success返回值说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| size | Number | 文件大小 |
| createTime | Number | 创建时间 |

## my.getSavedFileList
获取保存的所有文件
### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success返回值说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| fileList | List | 文件列表 |

### File对象属性说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| size | Number | 文件大小 |
| createTime | Number | 创建时间 |
| apFilePath | String | 文件路径 |

## my.removeSavedFile
删除某个保存的文件

### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| apFilePath | String | 是 | 文件路径 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 示例说明
```html
<view class="page">
  <view class="page-description">文件</view>
  <view class="page-section">
    <view class="page-section-title">保存文件到本地</view>
    <view class="page-section-demo">
      <button type="primary" onTap="saveFile">saveFile</button>
    </view>
    <view class="page-section-title">获取文件信息</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getFileInfo">getFileInfo</button>
    </view>

    <view class="page-section-title">获取保存的文件信息</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getSavedFileInfo">getSavedFileInfo</button>
    </view>

    <view class="page-section-title">获取保存的所有文件信息</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getSavedFileList">getSavedFileList</button>
    </view>

    <view class="page-section-title">删除某个保存文件</view>
    <view class="page-section-demo">
      <button type="primary" onTap="removeSavedFile">removeSavedFile</button>
    </view>
  </view>
</view>
```
```javascript
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
```