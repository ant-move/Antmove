# text

文本。<br />组件内只支持嵌套。

扫码体验：

![text.png](https://cache.amap.com/ecology/tool/miniapp/1563509606515.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| selectable | Boolean | false | 是否可选 | v8.90.0 |
| class | String |  | 样式名 | v8.90.0 |
| style | String |  | 内联样式 | v8.90.0 |
| space | String |  | 以何种方式显示连续空格 |  |
| decode | Boolean | false | 是否解码。为 `true` 时表示对文本内容进行解码，可解析的 HTML 实体字符有：`&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;` | v8.90.0 |
| number-of-lines | number |  | 多行省略，值须大于等于1，表现同 css 的 `-webkit-line-clamp` 属性一致 | v8.90.0 |

### 示例

```html
<view class="page">
  <view class="page-description">文本</view>
  <view class="page-section">
    <view class="page-section-title">这是一段文本。\n可以换行</view>
    <view class="page-section-demo">
      <text
        selectable="true"
        space="emsp"
        decode="true"
      >
        {{text}}
      </text>
    </view>
  </view>
</view>
```

```javascript
Page({
  onLoad(options) {
    console.log(options)
  },
  data: {
    text: `高德提供全国地图浏览, 地点搜索, 公交驾车查询服务。&nbsp;可同时查看商家 团购、优惠信息。
    高德地图,您的出行、生活好帮手。\n\n:)`,
  },
})
```
