# progress

进度条。

扫码体验：

![progress.png](https://cache.amap.com/ecology/tool/miniapp/1563517814349.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| percent | Float |  | 百分比(0~100) | v8.90.0 |
| show-info | Boolean | false | 在右侧显示百分比值 | v8.90.0 |
| stroke-width | Number | 6 | 线的粗细，单位 px | v8.90.0 |
| active-color | Color | #09BB07 | 已选择的进度条颜色 | v8.90.0 |
| background-color | Color |  | 未选择的进度条颜色 | v8.90.0 |
| active | Boolean | false | 从左往右是否进行加载动画 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/nnFqfLuUOTKTrDUnZBzL.png#align=left&display=inline&height=496&originHeight=499&originWidth=750&status=done&width=746)

### 示例代码

```html
<view class="page">
  <view class="page-description">进度条</view>
  <view class="page-section">
    <view class="page-section-demo">
      <progress percent="20" show-info/>
      <progress percent="40" active/>
      <progress percent="60" stroke-width="10"/>
      <progress percent="80" color="#10AEFF"/>
      <progress percent="80" active-color="#6abf47" background-color="#f4333c" />
    </view>
  </view>
</view>
```
