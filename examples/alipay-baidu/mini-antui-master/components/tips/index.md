# Tips 小提示

小提示。分`tips-dialog`和`tips-plain`两种类型。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/DjQXcSygEImQjMOnlJqV.jpeg" width="154" height="190" />

## tips-dialog

| 属性 | 说明 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className | 自定义class | String| | false |
| show | 控制组件是否展示 | Boolean | true | false |
| type | `dialog`表示对话框的样式类型，`rectangle`表示矩形的样式类型。 | String | dialog | false |
| onCloseTap | 当`type`值为`rectangle`时，组件点击关闭icon的回调 | () => void | | false |
| iconUrl | 展示icon的url地址 | String | | false |

### slots

| slotName | 说明 |
| ---- | ---- |
| content | 用于渲染提示的正文内容 |
| operation | 用于渲染右侧操作区域 |

## tips-plain

| 属性 | 说明 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className| 自定义class | String| | false |
| time | 自动关闭时间(单位毫秒) | Number | 5000(ms) | false |
| onClose | 回调并关闭提示框 | () => void | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "tips-dialog": "mini-antui/es/tips/tips-dialog/index",
    "tips-plain": "mini-antui/es/tips/tips-plain/index"
  }
}
```

### tips-dialog

```html
<view>
  <tips-dialog
    show="{{showDialog}}"
    className="dialog"
    type="dialog"
  >
    <view class="content" slot="content">
      <view>hello,</view>
      <view>欢迎使用小程序扩展组件库mini-antui</view>
    </view>
    <view slot="operation" class="opt-button" onTap="onDialogTap">知道了</view> 
  </tips-dialog>
  <tips-dialog
    iconUrl="https://gw.alipayobjects.com/zos/rmsportal/AzRAgQXlnNbEwQRvEwiu.png"
    type="rectangle"
    className="rectangle"
    onCloseTap="onCloseTap"
    show="{{showRectangle}}">
    <view class="content" slot="content">
      把“城市服务”添加到首页
    </view>
    <view slot="operation" class="add-home" onTap="onRectangleTap">立即添加</view>
  </tips-dialog>
</view>
```

```javascript
Page({
  data: {
    showRectangle: true,
    showDialog: true,
  },
  onCloseTap() {
    this.setData({
      showRectangle: false,
    });
  },
  onRectangleTap() {
    my.alert({
      content: 'do something',
    });
  },
  onDialogTap() {
    this.setData({
      showDialog: false,
    });
  },
});
```

```css
.rectangle {
  position: fixed;
  bottom: 100px;
}

.dialog {
  position: fixed;
  bottom: 10px;
}

.content {
  font-size: 14px;
  color: #fff;
}

.opt-button {
  width: 51px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  border: #68BAF7 solid 1rpx;
}

.add-home {
  width: 72px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #56ADEB;
  color: #fff;
  font-size: 14px;
}
```

### tips-plain

```html
<tips-plain onClose="onClose" time="{{time}}">{{content}}</tips-plain>
```

```javascript
Page({
  data: {
    content: '我知道了',
    time: 2000,
  },
  onClose() {
    my.alert({
      title: '12321'
    });
  }
});
```