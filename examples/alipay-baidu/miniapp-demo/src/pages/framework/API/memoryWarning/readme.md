# my.onMemoryWarning
### 扫码预览
![memoryWarning.png](https://cache.amap.com/ecology/tool/miniapp/1563438207764.png)
<br/>开始监听内存不足的告警事件，Android 下有告警等级划分：TRIM_MEMORY_RUNNING_LOW 和 TRIM_MEMORY_RUNNING_CRITICAL；iOS 没有等级划分。

## 入参

Function 类型，callback 回调函数入参为 Object 类型，属性如下：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| level | Number | 系统内存的告警等级, 仅 Android 有此字段. |

[] Android 下告警等级对应系统宏：

```javascript
int TRIM_MEMORY_RUNNING_LOW = 10
int TRIM_MEMORY_RUNNING_CRITICAL = 15
```

# my.offMemoryWarning
停止监听内存不足的告警事件，需要保证 onMemoryWarning/offMemoryWarning 中的入参（callback）是同一个对象。
## 入参
Function 类型，callback 回调函数。

## 示例代码

```html
<view class="page">
  <view class="page-description">内存不足告警</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">memoryWarning</view>
      请保证您当前的设备符合要求： 内存不足
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="onMemoryWarning">onMemoryWarning</button>
      <button size="default" type="primary" onTap="offMemoryWarning">offMemoryWarning</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  onLoad() {
    this.callback = (res) => {
      let levelString = 'iOS 设备, 无 level 传入.'
      switch (res.level) {
        case 10:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_LOW'
          break
        case 15:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL'
          break
        default:
      }
      my.alert({
        title: '收到内存不足告警',
        content: levelString,
      })
    }
  },
  onMemoryWarning() {
    my.onMemoryWarning(this.callback)
  },
  onUnload() {
    my.offMemoryWarning(this.callback)
  },
})
```


