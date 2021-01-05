## Pagination 分页

分页

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| mode | 按钮的形态可选类型：`text`、`icon`| String | text |
| total | 总页数 | Number | 0 |
| current | 当前页数 | Number | 0 |
| simple | 是否隐藏数值 | Boolean |false|
| disabled | 禁用状态 | Boolean | false |
| prevText | 前翻分页按钮文案 | String | 上一页 |
| nextText | 后翻分页按钮文案 | String | 下一页 |
| btnClass | 分页按钮样式，限于文字类型按钮 | String |  |
| onChange | 翻页回调函数 | (index: Number) => void | 无 |

`prevText`和`nextText`当且仅当mode为`text`时生效。

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "pagination": "mini-antui/es/pagination/index"
  }
}
```

```html
<view>
  <view class="demo-title">基础用法</view>
  <pagination total="{{20}}" current="{{1}}"/>
  <view class="demo-title">箭头按钮</view>
  <pagination mode="icon" total="{{20}}" current="{{10}}"/>
  <view class="demo-title">简单模式</view>
  <pagination simple total="{{20}}" current="{{1}}"/>
  <view class="demo-title">按钮禁用</view>
  <pagination total="{{20}}" current="{{1}}" disabled/>
  <view class="demo-title">自定义按钮文案</view>
  <pagination arrow prevText="上一篇" nextText="下一篇" total="{{20}}" current="{{1}}"/>
</view>
```

```javascript
Page({})
```
