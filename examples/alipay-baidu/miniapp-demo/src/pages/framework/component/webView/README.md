# web-view

`<web-view />` 组件是一个可以用来承载H5网页的组件，会自动铺满整个小程序页面。

扫码体验：

![webview.png](https://cache.amap.com/ecology/tool/miniapp/1563520989578.png)

| 属性名 | 类型 | 默认值 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| src | String |  | web-view 要渲染的H5网页URL。H5网页URL需要登录[小程序管理后台](https://openhome.alipay.com/platform/miniIndex.htm#/)-小程序详细-设置中，进行H5域名白名单配置 | v9.05.0 |
| onMessage | EventHandler |  | 网页向小程序 postMessage 消息。e.detail = { data } | v9.05.0 |

#### 注意：

每个页面只能有一个`<web-view />`，请不要渲染多个`<web-view />`，会自动铺满整个页面，并覆盖其它组件。

#### 示例代码：
```html
<!-- axml -->
<web-view src="https://cache.amap.com/ecology/tool/miniapp/miniapp-demo/h5//webview.html" onMessage="onmessage"></web-view>
```
```js
// js
Page({
  data: {},
  onShareAppMessage(options) {
    my.alert({
      content: JSON.stringify(options.webViewUrl),
    })
    return {
      title: '分享 web-View 组件',
      desc: 'View 组件很通用',
      path: 'page/framework/component/webView',
      'web-view': options.webViewUrl,
    }
  },
  onmessage(e) {
    my.alert({
      content: `拿到数据${JSON.stringify(e.detail)}`, // alert 框的标题
    })
  },
})

```

`<web-view />`H5页面可以使用手动引入 [https://appx/web-view.min.js](https://appx/web-view.min.js) （此链接仅支持在高德客户端内访问）, 提供了相关的接口返回小程序页面。支持的接口有：

| 接口类别 | 接口名 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| 导航栏 | [my.navigateTo](../api/navigator#my.navigateTo) | 保留当前页面，跳转到应用内的某个指定页面 | v9.05.0 |
|  | [my.navigateBack](../api/navigator#my.navigateBack) | 关闭当前页面，返回上一级或多级页面 | v9.05.0 |
|  | [my.switchTab](../api/navigator#my.switchTab) | 跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面 | v9.05.0 |
|  | [my.reLaunch](../api/navigator#my.reLaunch) | 关闭当前所有页面，跳转到应用内的某个指定页面 | v9.05.0 |
|  | [my.redirectTo](../api/navigator#my.redirectTo) | 关闭当前页面，跳转到应用内的某个指定页面 | v9.05.0 |
| 图片 | [my.chooseImage](../api/image/#my.chooseImage) | 拍照或从手机相册中选择图片 | v9.05.0 |
|  | [my.previewImage](../api/image/#my.previewImage) | 预览图片 | v9.05.0 |
| 位置  | [my.getLocation](../api/getLocation) | 获取用户当前的地理位置信息 | v9.05.0 |
|  | [my.openLocation](../api/openLocation) | 使用高德内置地图查看位置 | v9.05.0 |
| 交互反馈 |  [my.alert](../api/alert) | alert 警告框 | v9.05.0 |
|  | [my.showLoading](../api/loading#my.showLoading) | 显示加载提示 | v9.05.0 |
|  | [my.hideLoading](../api/loading#my.hideLoading) | 隐藏加载提示 | v9.05.0 |
| 缓存 | [my.setStorage](../api/storage#my.setStorage) | 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。 | v9.05.0 |
|  | [my.getStorage](../api/storage#my.getStorage) | 获取缓存数据。 | v9.05.0 |
|  | [my.removeStorage](../api/storage#my.removeStorage) | 删除缓存数据。 | v9.05.0 |
|  | [my.clearStorage](../api/storage#my.clearStorage) | 清除本地数据缓存。 | v9.05.0 |
|  | [my.getStorageInfo](../api/storage#my.getStorageInfo) | 异步获取当前storage的相关信息。 | v9.05.0 |
| 网络状态 | [my.getNetworkType](../api/getNetworkType) | 获取当前网络状态 | v9.05.0 |
| 分享 | my.startShare | 分享当前页面,当执行my.startShare() 时会唤起当前小程序页面的分享功能。 | v9.05.0 |
| 唤起支付 | [my.tradePay](../api/tradePay) | 唤起支付 | v9.05.0 |
| 向小程序发送消息 | my.postMessage | 向小程序发送消息，自定义一组或多组key、value数据，格式为JSON，如：my.postMessage({name:"测试web-view"}); | v9.05.0 |
| 监听小程序发过来的消息 | my.onMessage | 监听小程序发过来的消息， [webview组件控制](../api/createWebview)。 | v9.05.0 |
| 获取当前环境 | my.getEnv | 获取当前环境 | v9.05.0 |

#### 示例代码：
`<web-view />`H5页面：

```html
<!-- html -->
<script type="text/javascript" src="https://appx/web-view.min.js"></script>
// 如该H5页面需要同时在非高德客户端内使用，为避免该请求404，可参考以下写法
// 请尽量在html头部执行以下脚本
<script>
  if (navigator.userAgent.indexOf('AlipayClient') > -1) {
    document.writeln('<script src="https://appx/web-view.min.js"' + '>' + '<' + '/' + 'script>');
  }
  // javascript
  my.navigateTo({
    url: '/pages/framework/component/button/index',
    success: function(res) {
      // window.alert('操作结果' + JSON.stringify(res));
    }
  })
  // 网页向小程序 postMessage 消息
  my.postMessage({
    name: "测试web-view"
  });
  // 接收来自小程序的消息。
  my.onMessage = function(e) {
    console.log(e)
    window.alert(JSON.stringify(e))
  }
  // 判断是否运行在小程序环境里
  my.getEnv(function(result) {
    console.log("调用了getEnv" + JSON.stringify(result));
    window.alert(JSON.stringify(result));
  });


</script>
```

`my.postMessage`信息发送后，小程序页面接收信息时，会执行`onMessage`配置的方法：
```javascript
// 小程序页面对应的 page.js 声明 onMessage 方法，
// 由于 page.axml 里的 web-view 组件设置了 onMessage="onMessage",
// 当页面里执行完 my.postMessage 后，onMessage 方法会被执行
Page({
  onLoad(e){
    this.webViewContext = my.createWebViewContext('web-view-1');    
  },
  onMessage(e){
    my.alert({
      content:JSON.stringify(e.detail),
    });  
    this.webViewContext.postMessage({'sendToWebView': '这是来自小程序的消息'});
  },
});
```

`my.getEnv`示例代码：

```javascript
// 判断是否运行在小程序环境里
my.getEnv(function(res){
    console.log(res.miniprogram); //true
});
```

<!-- 用户分享时可获取当前`<web-view />`的URL，即在`onShareAppMessage`回调中返回`webViewUrl`参数。
```javascript
Page({
  onShareAppMessage(options) {
    console.log(options.webViewUrl)
  }
});
``` -->
### 常见问题

- 页面访问受限
  - 原因一：H5域名不在web-view的H5域名白名单内，请重新到高德小程序配置后台→设置→H5域名配置里设置（如下图）。
  - 原因二：使用了scheme方式进行页面跳转，请不要使用该方式；
  - 原因三：跳转链接是高德客户端某个端内H5页面，请不要使用该方式。
  - 原因四：配置域名后，未重新设置体验版或者推送真机预览导致

![](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/143604/1547743371019-6d33f9ea-b1e2-4c0c-8848-7d970b7da6b1.png#align=left&display=inline&height=503&originHeight=1210&originWidth=1796&size=0&status=done&width=746)

- H5怎么传递信息给小程序？
  - 请使用my.postMessage接口来传递数据，代码示例如：
```javascript
my.postMessage({key1:"value1",key2:"value2"});
```

- 小程序如何传递信息给H5？
  - `<web-view />`目前已支持了双向通信能力，更多细节请参考[webview组件控制](../api/createWebview)一节。
- webview里如何会返回小程序？
  - `<web-view />`H5页面可以使用手动引入 [https://appx/web-view.min.js](https://appx/web-view.min.js) （此链接仅支持在高德客户端内访问），再调用[my.navigateTo](../api/navigator#my.navigateTo)接口即可。
- 使用了小程序的chooseImage接口，如何在H5里进行图片上传？
  - 可将获取到的图片路径通过`my.postMessage()`将相关数据传递给小程序后进行上传
