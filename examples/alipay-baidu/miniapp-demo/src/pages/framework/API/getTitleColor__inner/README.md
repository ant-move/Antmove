# 获取导航栏背景色

## my.getTitleColor
### 扫码预览
![getTitleColor.png](https://cache.amap.com/ecology/tool/miniapp/1563438923450.png)
获取导航栏背景色，无入参<br />最低版本v9.15.0

## 入参

Object 类型，属性如下：

| 属性 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

### success 返回值
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| color | number | 返回当前导航栏背景色ARGB的十进制数，如0xff108ee9的十进制数对应4279275241，即A R G B 各8位转成的十进制 |

### 代码示例

```html
<view class="page">
  <view class="page-description">获取导航栏背景颜色</view>
  <view class="page-section">
    <view class="page-section-title">getTitleColor</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="getTitleColor">
        getTitleColor
      </button>      
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  getTitleColor() {
    my.getTitleColor({
      success: (res) => {
        my.alert({ content: `title Color:${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `获取失败:${JSON.stringify(error)}` })
      },
    })
  },
})
```