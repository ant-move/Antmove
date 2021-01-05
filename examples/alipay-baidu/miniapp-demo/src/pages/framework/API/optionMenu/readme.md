# my.setOptionMenu v10.00.0以上版本支持
### 扫码预览
![optionMenu.png](https://cache.amap.com/ecology/tool/miniapp/1563437649753.png)
<br/>配置 optionMenu 导航栏额外图标，点击后触发 `onOptionMenuClick` 。

## 入参

入参为 String 类型，属性如下：

| 属性 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| icon | String | 是 | 自定义optionMenu所用图标的url（以 https/http 开头）或 base64 字符串，大小建议 30*30<br />(暂不支持base64图片)。 |

## 示例代码

```html
<view class="page">
  <view class="page-description">设置optionMenu</view>
  <view class="page-section">
    <view class="page-section-title">optionMenu</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="setOptionMenu">设置</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  setOptionMenu() {
    my.setOptionMenu({
      icon: 'https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png',
    })
  },
})
```
