# icon

图标。

扫码体验：

![icon.png](https://cache.amap.com/ecology/tool/miniapp/1563509834347.png)

|  属性名  |  类型  |  默认值  |  描述  |  最低版本  |
| :--- | :--- | :--- | :--- | :--- |
| type | String |  | icon 类型，有效值： info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading(1.7.2) | v8.90.0 |
| size | Number | 23 | icon 大小，单位px | v8.90.0 |
| color | Color |  | icon 颜色，同 css 的 color | v8.90.0 |

### Screenshot
![](https://zos.alipayobjects.com/rmsportal/UMKJjRbXCPoIiaeOQDNE.png#align=left&display=inline&height=466&originHeight=1085&originWidth=750&status=done&width=322)

### 示例

```html
<view class="page">
  <view class="page-description">图标</view>
  <view class="page-section">
    <view class="page-section-title">Type</view>
    <view class="page-section-demo icon-list">
      <block a:for="{{iconType}}">
        <view class="item">
          <icon type="{{item}}" aria-label="{{item}}" size="45"/>
          <text>{{item}}</text>
        </view>
      </block>
    </view>
  </view>

  <view class="page-section">
    <view class="page-section-title">Size</view>
    <view class="page-section-demo icon-list">
      <block a:for="{{iconSize}}">
        <view class="item">
          <icon type="success" size="{{item}}"/>
          <text>{{item}}</text>
        </view>
      </block>
    </view>
  </view>

  <view class="page-section">
    <view class="page-section-title">Color</view>
    <view class="page-section-demo icon-list">
      <block a:for="{{iconColor}}">
        <view class="item">
          <icon type="success" size="45" color="{{item}}"/>
          <text style="color:{{item}}">{{item}}</text>
        </view>
      </block>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    iconSize: [20, 30, 40, 50, 60],
    iconColor: [
      'red', 'yellow', 'blue', 'green',
    ],
    iconType: [
      'success',
      'info',
      'warn',
      'waiting',
      'clear',
      'success_no_circle',
      'download',
      'cancel',
      'search',
    ],
  },
})
```

```css
.icon-list {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.item {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: center;
  -webkit-align-items: center;
}
```
