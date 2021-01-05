# 选择日期

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563528055567.png)

## my.datePicker(object)
打开日期选择列表。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| format | String | 否 | 返回的日期格式，<br />1. yyyy-MM-dd（默认）<br />2. HH:mm <br />3. yyyy-MM-dd HH:mm <br />4. yyy-MM （ 可用 **canIUse('datePicker.object.format.yyyy-MM')** 判断是否支持）<br />5. yyyy （可用 **canIUse('datePicker.object.format.yyyy')** 判断是否支持）<br /> | v8.90.0 |
| currentDate | String | 否 | 初始选择的日期时间，默认当前时间 | v8.90.0 |
| startDate | String | 否 | 最小日期时间 | v8.90.0 |
| endDate | String | 否 | 最大日期时间 | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| date | String | 选择的日期 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 用户取消操作 | |

### 示例代码

```html
<view class="page">
  <view class="page-description">选择日期</view>
  <view class="page-section">
    <view class="page-section-title">datePicker</view>
    <view class="page-section-demo">
      <button class="page-body-button" type="primary" onTap="datePicker">选择日期-1</button>
      <button class="page-body-button" type="primary" onTap="datePickerHMS">选择日期-2</button>
      <button class="page-body-button" type="primary" onTap="datePickerYMDHMS">选择日期-3</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        my.alert({
          title: `datePicker response: ${JSON.stringify(res)}`,
        })
      },
    })
  },
  datePickerHMS() {
    my.datePicker({
      format: 'HH:mm:ss',
      currentDate: '12:12:12',
      startDate: '11:11:11',
      endDate: '13:13:13',
      success: (res) => {
        my.alert({
          title: `datePicker response: ${JSON.stringify(res)}`,
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
  datePickerYMDHMS() {
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm:ss',
      currentDate: '2012-01-09 11:11:11',
      startDate: '2012-01-01 11:11:11',
      endDate: '2012-01-10 11:11:11',
      success: (res) => {
        my.alert({
          title: `datePicker response: ${JSON.stringify(res)}`,
        })
      },
    })
  },
})
```
