# Flex Flex布局

CSS flex布局的封装。

扫码体验：

<img src="https://gw.alipayobjects.com/mdn/miniProgra/afts/img/A*7eyvR59-2LIAAAAAAAAAAABjARQnAQ" width="154" height="190" />

## flex

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| direction | 项目定位方向，值可以为 row,row-reverse,column,column-reverse | String | row | false |
| wrap | 子元素的换行方式，可选nowrap,wrap,wrap-reverse | String | nowrap | false |
| justify | 子元素在主轴上的对齐方式，可选start,end,center,between,around | String | start | false |
| align | 子元素在交叉轴上的对齐方式，可选start,center,end,baseline,stretch | String | center | false |
| alignContent | 有多根轴线时的对齐方式，可选start,end,center,between,around,stretch | String | stretch | false |

## flex-item

flex-item 组件默认加上了样式flex:1,保证所有 item 平均分宽度, flex 容器的 children 不一定是 flex-item

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "flex": "mini-antui/es/flex/index",
    "flex-item": "mini-antui/es/flex/flex-item/index"
  }
}
```

```html
<view class="flex-container">
  <view class="sub-title">Basic</view>
  <flex>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
  </flex>
  <view style="height: 20px;" />
  <flex>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
  </flex>
  <view style="height: 20px;" />
  <flex>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
    <flex-item><view class="placeholder">Block</view></flex-item>
  </flex>
  <view className="sub-title">Wrap</view>
  <flex wrap="wrap">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <view className="sub-title">Align</view>
  <flex justify="center">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex justify="end">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex justify="between">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex align="start">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline small">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex align="end">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline small">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
  <flex align="baseline">
    <view class="placeholder inline">Block</view>
    <view class="placeholder inline small">Block</view>
    <view class="placeholder inline">Block</view>
  </flex>
</view>
```

```css
.flex-container {
  padding: 10px;
}

.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}

.placeholder {
  background-color: #ebebef;
  color: #bbb;
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 100%;
}

.placeholder.inline {
  width: 80px;
  margin: 9px 9px 9px 0;
}

.placeholder.small {
  height: 20px;
  line-height: 20px
}
```

```javascript
Page({});
```
