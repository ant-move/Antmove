# slider

滑动选择器。

扫码体验：

![slider.png](https://cache.amap.com/ecology/tool/miniapp/1563519759475.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String |  | 组件名字，用于表单提交获取数据 | v8.90.0 |
| min | Number | 0 | 最小值 | v8.90.0 |
| max | Number | 100 | 最大值 | v8.90.0 |
| step | Number | 1 | 步长，值必须大于 0，并可被(max - min)整除 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 | v8.90.0 |
| value | Number | 0 | 当前取值 | v8.90.0 |
| show-value | Boolean | false | 是否显示当前 value | v8.90.0 |
| active-color | String | #108ee9 | 已选择的颜色 | v8.90.0 |
| background-color | String | #ddd | 背景条的颜色 | v8.90.0 |
| track-size | Number | 4 | 轨道线条高度 | v8.90.0 |
| handle-size | Number | 22 | 滑块大小 | v8.90.0 |
| handle-color | String | #fff | 滑块填充色 | v8.90.0 |
| onChange | EventHandle |  | 完成一次拖动后触发，event.detail = {value: value} | v8.90.0 |
| onChanging | EventHandle |  | 拖动过程中触发的事件，event.detail = {value: value} | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/tbIYvqLCXYLRBBvDQngq.png#align=left&display=inline&height=278&originHeight=553&originWidth=750&status=done&width=377)

### 示例

```html
<view class="page">
  <view class="page-description">滑块</view>
  <view class="page-section">
    <view class="page-section-title">设置step</view>
    <view class="page-section-demo">
      <slider name="slider" value="5" onChange="slider2change" onChanging="changing" step="5"/>
    </view>
    <view class="page-section-title">设置最小/最大值范围</view>
    <view class="page-section-demo">
      <slider value="33" onChange="slider4change" min="25" max="50" show-value/>
    </view>
    <view class="page-section-title">自定义样式</view>
    <view class="page-section-demo">
      <slider value="33" onChange="slider4change" min="25" max="50" show-value
      background-color="#FFAA00" active-color="#00aaee" track-size="2" handle-size="6" handle-color="blue" />
    </view>
  </view>
</view>
```

```javascript
const pageData = {}
for (let i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i)
}
const pageDatas = Object.assign({}, pageData, {
  changing() {
    console.log('changing')
  },
})
Page(pageDatas)
```
