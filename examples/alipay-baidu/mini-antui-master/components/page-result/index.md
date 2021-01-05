# PageResult 异常页面

异常页面。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ZCkOkoTgcKkhEhqHbnBL.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| type | 异常页面类型，可选，网络异常`network`,服务繁忙`busy`,服务异常`error`,空状态`empty`,用户注销`logoff` | String | network | false |
| local | 是否是局部异常内容 | Boolean | false | false |
| title | 错误提示标题 | String |  | false |
| brief | 错误提示简要 | String |  | false |

## 示例

```json
{
  "defaultTitle": "异常反馈",
  "usingComponents": {
    "page-result": "mini-antui/es/page-result/index"
  }
}
```

```html
<page-result
  type="network"
  title="网络不给力"
  brief="世界上最遥远的距离莫过于此"
/>
<page-result
  type="network"
  title="网络不给力"
  brief="世界上最遥远的距离莫过于此"
>
  <view class="am-page-result-btns">
    <view onTap="backHome">回到首页</view>
    <view>示例按钮</view>
  </view>
</page-result>
```
