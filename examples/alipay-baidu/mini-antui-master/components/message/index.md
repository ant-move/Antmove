## Message 结果页

结果页。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/RpfwagXuCiVLrUgVGSUK.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ----- | ----- | ----- | ---- | ---- |
| className| 自定义的class | String | | false |
| type | 有success、fail、info、warn、waiting、info五种状态类型，默认为success | String | success | false |
| title | 主标题 | String  |  | true |
| subTitle | 副标题 | String  |  | false |
| mainButton | 主按钮的文本和可用性相关 | Object<buttonText, disabled> |  | false |
| subButton | 副按钮的文本和可用性相关 | Object<buttonText, disabled>  |  | false |
| onTapMain | 主按钮的点击函数 | () => {}  |  | false |
| onTapSub | 副按钮的点击函数 | () => {}  |  | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "message": "mini-antui/es/message/index"
  }
}
```

```html
<view>
  <message
    title="{{title}}"
    subTitle="{{subTitle}}"
    type="success" 
    mainButton="{{messageButton.mainButton}}" 
    subButton="{{messageButton.subButton}}" 
    onTapMain="goBack">
  </message>
</view>
``` 

```javascript
Page({
  data: {
    title: "操作成功",
    subTitle: "内容详情可折行，建议不超过两行",
    messageButton: {
      mainButton: {
        buttonText: "主要操作"
      },
      subButton: {
        buttonText: "辅助操作"
      }
    }
  },
  goBack() {
    my.navigateBack();
  }
});
```