# AXML 介绍

AXML 是小程序框架设计的一套标签语言，用于描述小程序页面的结构。AXML 语法可分为五个部分：[数据绑定](data-binding)、[条件渲染](conditional-render)、[列表渲染](list-render)、[模板](axml-template)、[引用](import)。

AXML 代码示例：

```html
<!-- pages/index/index.axml -->
<view a:for="{{items}}"> {{item}} </view>
<view a:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view a:elif="{{view == 'APP'}}"> APP </view>
<view a:else> amap </view>
<view onTap="add"> {{count}} </view>
```

对应的 .js 文件示例：

```javascript
// pages/index/index.js
Page({
  data: {
    items: [1, 2, 3, 4, 5, 6, 7],
    view: 'amap',
    count: 1,
  },
  add(e) {
    this.setData({
      count: this.data.count + 1,
    })
  },
})
```

对应的 .acss 文件示例：

```css
/* pages/index/index.acss */
view {
  padding-left: 10px;
}
```

**效果示例：**

<img width="400" src="https://intranetproxy.alipay.com/skylark/lark/0/2019/png/182300/1562923970889-723dbdc2-880f-4599-8830-3f7c254adc96.png#align=center&display=inline&height=640&name=axml.png&originHeight=2340&originWidth=1080&size=38840&status=done&width=296"/>
