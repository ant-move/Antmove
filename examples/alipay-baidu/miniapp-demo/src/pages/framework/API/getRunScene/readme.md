# 小程序当前运行版本类型
### 扫码预览
![getRunScene.png](https://cache.amap.com/ecology/tool/miniapp/1563438000683.png)
## my.getRunScene(Object)
获取当前小程序的运行版本，扫码体验：<br />最低版本v9.15.0
## 入参

Object 类型，属性如下：

| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v10.0.0 |
| fail | Function | 否 | 调用失败的回调函数 | v10.0.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v10.0.0 |

### success 返回值
| 名称 | 类型 | 描述 |
| --- | --- | --- |
| envVersion | String | 小程序当前运行的版本，枚举类型：develop（开发版）、trial（体验版）、release（发布版） |

### 错误码
| 错误码 | 描述 | 解决方案 |
| --- | --- | --- |
| 3 | 发生未知错误 | |

### 代码示例

```html
<view class="page">
  <view class="page-description">获取小程序运行版本</view>
  <view class="page-section">
    <view class="page-section-title">getRunScene</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="getRunScene">
        getRunScene
      </button>      
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  getRunScene() {
    my.getRunScene({
      success(result) {
        my.alert({
          title: '小程序版本',
          content: `${result.envVersion}`,
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
})
```

