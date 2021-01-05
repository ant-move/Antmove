# picker-view

嵌入页面的滚动选择器。

扫码体验：

![picker-view.png](https://cache.amap.com/ecology/tool/miniapp/1563520328282.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | Number Array |  | 数字表示 picker-view-column 中对应的 index （从 0 开始） | v8.90.0 |
| indicator-style | String |  | 选中框样式 | v8.90.0 |
| indicator-class | String |  | 选中框的类名 | v8.90.0 |
| mask-style | String |  | 蒙层的样式 | v8.90.0 |
| mask-class | String |  | 蒙层的类名 | v8.90.0 |
| onChange | EventHandle |  | 滚动选择 value 改变时触发，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column index 索引 ,从 0 开始 | v8.90.0 |

注意：其中只可放置组件，其他节点不会显示。该组件请勿放入 hidden 或 display none 的节点内部，需要隐藏请用 a:if 切换

不要：
```html
<view hidden><picker-view/></view>
```
推荐：
```html
<view a:if="{{xx}}"><picker-view/></view>
```

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/FIxLkcNKLDyWqnNnyQfX.png#align=left&display=inline&height=591&originHeight=594&originWidth=750&status=done&width=746)

### 示例

```html
<view class="page">
  <view class="page-description">选择器视图</view>
  <view class="page-section">
    <view class="page-section-demo">
      <picker-view value="{{value}}" onChange="onChange" class="my-picker" indicator-style="backgroundColor: rgba(0,0,0,.5);" mask-style="backgroundColor: rgba(0,0,0,.1)">
        <picker-view-column>
          <view>2011</view>
          <view>2012</view>
          <view>2013</view>
          <view>2014</view>
          <view>2015</view>
          <view>2016</view>
          <view>2017</view>
          <view>2018</view>
        </picker-view-column>
        <picker-view-column>
          <view>春</view>
          <view>夏</view>
          <view>秋</view>
          <view>冬</view>
        </picker-view-column>
      </picker-view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onChange(e) {
    console.log(e.detail.value)
    this.setData({
      value: e.detail.value,
    })
  },
})
```

```css
.my-picker {
  background: #EFEFF4;
}
```
