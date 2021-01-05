# 分享
### 扫码预览
![customShare.png](https://cache.amap.com/ecology/tool/miniapp/1563437441683.png)
## onShareAppMessage
在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。

- 每个 Page 页面的右上角菜单中默认会显示“分享”按钮，重写了 onShareAppMessage 函数，只是自定义分享内容。
- 用户点击分享按钮的时候会调用。
- 此事件需要 return 一个 Object，用于自定义分享内容。

#### Object 参数说明
| 参数 | 类型 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| from | String | 触发来源：<br />`button`：页面页分享按钮触发；<br />`menu`：右上角分享按钮触发。 | v9.05 |
| target | Object | 如果 `from` 值为 `button`，则 `target` 为触发这次分享的 `button`，否则为 `undefined` | v9.05 |
| webViewUrl | String | 页面中包含`web-view`组件时，返回当前`web-view`的`URL` | v9.05 |

`onShareAppMessage`执行完后必须返回一个分享对象，用于自定义分享内容，内容如下：

#### 返回值
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 是 | 自定义分享标题 | v9.05 |
| desc | String | 否 | 自定义分享描述> 由于分享到微博只支持最大长度 140 个字，因此建议长度不要超过该限制。| v9.05 |
| path | String | 是 | 自定义分享页面的路径，path中的自定义参数可在小程序生命周期的onLoad方法中获取（参数传递遵循http get的传参规则） | v9.05 |
| content | String | 否 | 自定义吱口令文案，最多28个字符 | v9.05 |
| imageUrl | String | 否 | 自定义分享图片<br />- 网络图片路径 - apFilePath路径 - 相对路径> 使用场景详见下方说明| v9.05 |
| bgImgUrl | String | 否 | 自定义分享二维码的背景图，建议大小750*950<br />- 网络图片路径> 该字段为预览图片，使用场景详见下方说明| v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

#### 代码示例
```html
<view class="page">
  <view class="page-description">自定义分享</view>
  <view class="page-section">
    <view class="page-section-title">onShareAppMessage</view>
    <view class="page-section-demo">
      <button size="default" open-type="share" type="primary">分享</button>
    </view>
  </view>
</view>
```
```javascript
Page({
  data: {},
  onLoad() {},
  onShareAppMessage() {
    return {
      title: '小程序示例',
      desc: '小程序官方示例Demo，展示已支持的接口能力及组件。',
      path: 'pages/index/index',
      content: 'content......',
      imageUrl: 'https://www.baidu.com/img/bd_logo1.png',
      bgImgUrl: 'https://www.baidu.com/img/bd_logo1.png',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
    }
  },
})
```

### 页面内发起分享
> 通过给 `button` 组件设置属性 `open-type="share"`，可以在用户点击按钮后触发Page.onShareAppMessage() 事件，并唤起分享面板，如果当前页面没有定义此事件，则点击后无效果。相关组件：[button](../component/button)

### 分享场景及字段说明

![](https://intranetproxy.alipay.com/skylark/lark/0/2018/png/1872/1546085929481-d3e95967-198d-40b0-956d-e1c8926362ed.png#align=left&display=inline&height=420&originHeight=914&originWidth=1624&status=done&width=747)<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2018/png/1872/1546085047771-e842eb5e-ddf1-4b4e-a4fe-c809b943b698.png#align=left&display=inline&height=419&originHeight=908&originWidth=1620&status=done&width=747)<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2018/png/1872/1546085063254-e758c75c-0c17-4428-8dd3-4ca7922df958.png#align=left&display=inline&height=417&originHeight=904&originWidth=1618&status=done&width=747)
