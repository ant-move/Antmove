# picker

从底部弹起的滚动选择器。

扫码体验

![](https://cache.amap.com/ecology/tool/miniapp/1563520438287.png)

## 效果示例

![](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/62912/1559295322121-2137be0d-a3bf-47be-8240-3edb3daacef8.png#alt=The%20screenshot%20of%20picker)

## 属性
| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| range | String[] / Object[] | [] | String[] 时表示可选择的字符串列表；Object[] 时需指定 range-key 表示可选择的字段 |
| range-key | String |  | 当 range 是一个 Object[] 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 |
| value | Number |  | 表示选择了 range 中的第几个（下标从 0 开始）。 |
| onChange | EventHandle |  | value 改变时触发，`event.detail = {value: value}` |
| disabled | Boolean | false | 是否禁用 |


**说明：** 可以通过 [my.datePicker](../api/datePicker) 打开日期选择列表。

## 示例代码

```html
<view class="page">
  <view class="page-description">选择器</view>
  <view class="page-section">
    <picker onChange="bindPickerChange" value="{{index}}" range="{{array}}">
      <view class="row">
        <view class="row-title">地区选择器</view>
        <view class="row-extra">当前选择：{{array[index]}}</view>
        <image class="row-arrow" src="/image/arrowright.png" mode="aspectFill" />
      </view>
    </picker>
  </view>

  <view class="page-section">
    <picker onChange="bindObjPickerChange" value="{{arrIndex}}" range="{{objectArray}}" range-key="name">
      <view class="row">
        <view class="row-title">ObjectArray</view>
        <view class="row-extra">当前选择：{{objectArray[arrIndex].name}}</view>
        <image class="row-arrow" src="/image/arrowright.png" mode="aspectFill" />
      </view>
    </picker>
  </view>
</view>
```

```javascript
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国',
      },
      {
        id: 1,
        name: '中国',
      },
      {
        id: 2,
        name: '巴西',
      },
      {
        id: 3,
        name: '日本',
      },
    ],
    arrIndex: 0,
    index: 0,
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      arrIndex: e.detail.value,
    })
  },
})
```

```css
.date-radio {
  padding: 26rpx;
}

.date-radio label + label {
  margin-left: 20rpx;
}

.row {
  display: flex;
  align-items: center;
  padding: 0 30rpx;
}

.row-title {
  flex: 1;
  padding-top: 28rpx;
  padding-bottom: 28rpx;
  font-size: 34rpx;
  color: #000;
}

.row-extra {
  flex-basis: initial;
  font-size: 32rpx;
  color: #888;
}

.row-arrow {
  width: 32rpx;
  height: 32rpx;
  margin-left: 16rpx;
}
```
