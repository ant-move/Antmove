## List 列表

列表。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/tAvsiCUfvPlAYSRQLHOs.jpeg" width="154" height="190" />

## list

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className | 自定义class | String| |

### slots

| slotName | 说明 |
| ---- | ---- |
| header | 可选，列表头部 |
| footer | 可选，用于渲染列表尾部 |

## list-item

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className | 自定义的class | String | |
| thumb | 缩略图，图片地址 | String |  |
| arrow | 是否带剪头 | Boolean | false |
| align | 子元素垂直对齐，可选`top`,`middle`,`bottom` | String | middle |
| index | 列表项的唯一索引 | String | |
| onClick | 点击list-item时调用此函数 | ({index, target}) => void | |
| last | 是否是列表的最后一项 | Boolean |false |
| disabled | 不可点击，且无hover效果 | Boolean | false |
| multipleLine | 多行 | Boolean | false |
| wrap | 是否换行，默认情况下，文字超长会被隐藏 | Boolean | false |

### slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染列表项右边说明 |
| prefix | 可选，用于渲染列表左侧说明 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index"
  }
}
```

```html
<view>
  <list>
    <view slot="header">
      列表头部
    </view>
    <block a:for="{{items}}">
      <list-item
        thumb="{{item.thumb}}"
        arrow="{{item.arrow}}"
        align="{{item.align}}"
        index="{{index}}"
        onClick="onItemClick"
        key="items-{{index}}"
        last="{{index === (items.length - 1)}}"
      >
      {{item.title}}
        <view class="am-list-brief">{{item.brief}}</view>
        <view slot="extra">
          {{item.extra}}
        </view>
      </list-item>
    </block>
    <view slot="footer">
      列表尾部
    </view>
  </list>
  <list>
    <view slot="header">
      列表头部
    </view>
    <block a:for="{{items2}}">
      <list-item
        thumb="{{item.thumb}}"
        arrow="{{item.arrow}}"
        onClick="onItemClick"
        index="items2-{{index}}"
        key="items2-{{index}}"
        last="{{index === (items2.length - 1)}}"
      >
       {{item.title}}
        <view class="am-list-brief">{{item.brief}}</view>
        <view a:if="{{item.extra}}" slot="extra">
          {{item.extra}}
        </view>
      </list-item>
    </block>
    <view slot="footer">
      列表尾部
    </view>
  </list>
</view>
````

```javascript
Page({
  data: {
    items: [
      {
        title: '单行列表',
        extra: '详细信息',
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: true,
      },
      {
        title: '多行列表',
        arrow: 'up',
      },
      {
        title: '多行列表',
        arrow: 'down',
      },
      {
        title: '多行列表',
        arrow: 'empty',
      },
      {
        title: '多行列表',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: `点击了第${ev.index}行`,
    });
  },
});
```