# 更新管理

## my.getUpdateManager

创建一个 UpdateManager 对象，获取**全局唯一**的版本更新管理器，用于管理小程序更新。最低版本v10.00。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563452974718.png)

## UpdateManager

 UpdateManager 对象，用来管理更新，可通过 my.getUpdateManager 接口获取实例。

### UpdateManager.applyUpdate()

当小程序新版本下载完成后（即收到 `onUpdateReady` 回调），强制小程序重启并使用新版本

### UpdateManager.onCheckForUpdate(function callback)

监听向高德后台请求检查更新结果事件。钱包在小程序冷启动时自动检查更新，不需由开发者主动触发。

### UpdateManager.onUpdateReady(function callback)

监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调

### UpdateManager.onUpdateFailed(function callback)

监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调。

## 示例代码
```html
<view class="page">
  <view class="page-description">更新管理</view>
  <view class="page-section">
    <view class="page-section-title">getUpdateManager</view>
    <view class="page-section-demo">
      <button type="primary" onTap="updateManager">更新</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  updateManager() {
    const updateManager = my.getUpdateManager()
    updateManager.onCheckForUpdate((res) => {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
      my.alert({
        title: '请求完新版本信息的回调',
        content: JSON.stringify(res),
      })
    })
    updateManager.onUpdateReady(() => {
      my.confirm({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        },
      })
    })
    updateManager.onUpdateFailed((res = {}) => {
      // 新版本下载失败
      my.alert({
        title: '新版本下载失败',
        content: JSON.stringify(res),
      })
    })
  },
})
```