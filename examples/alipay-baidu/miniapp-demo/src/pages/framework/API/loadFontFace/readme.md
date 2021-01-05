# my.loadFontFace
### 扫码预览
![loadFontFace.png](https://cache.amap.com/ecology/tool/miniapp/1563438074904.png)
<br/>动态加载网络字体，文件地址需为下载类型。iOS 仅支持 https 格式文件地址。

## 入参

入参为 Object 类型，属性如下：

| 属性 | 类型 | 必须 | 描述 |
| --- | --- | --- | --- |
| family | String | 是 | 字体名称 |
| source | String | 是 | 字体资源地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。 |
| desc | Object | 否 | 字体描述符 |
| success | Function | 否 | 调用成功的回调函数 |
| fail | Function | 否 | 调用失败的回调函数 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） |

### desc 结构
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| style | String | 'normal' | 否 | 字体样式，可选值为 normal / italic / oblique |
| weight | String | 'normal' | 否 | 字体粗细，可选值为 normal / bold / 100 / 200../ 900 |
| variant | String | 'normal' | 否 | 设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit |

## 示例代码

```html
<view class="page">
  <view class="page-description">动态加载网络字体</view>
  <view class="page-section">
    <view class="page-section-title">loadFontFace</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="loadFontFace">
        loadFontFace
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  loadFontFace() {
    my.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success() {
        my.alert({
          title: 'loadfontface 成功!!!',
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


