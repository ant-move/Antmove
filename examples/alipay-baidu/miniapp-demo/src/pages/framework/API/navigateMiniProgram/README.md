# 小程序跳转

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563452669186.png)

## my.navigateToMiniProgram（Object）
跳转到其他小程序。详细接入参考[指引](https://docs.alipay.com/mini/introduce/open-miniprogram)

### Object 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| appId | String | 是 | 要跳转的目标小程序appId | v8.90 |
| path | String | 否 | 打开的页面路径，如果为空则打开首页 | v8.90 |
| extraData | Object | 否 | 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据 | v8.90 |
| envVersion | String | 否 | 要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。默认值 release | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

## 代码示例

```javascript
my.navigateToMiniProgram({
  appId: 'xxxx',
  extraData:{
    "data1":"test"
  },
  success: (res) => {
    console.log(JSON.stringify(res))
  },
  fail: (res) => {
    console.log(JSON.stringify(res))
  }
});
```

## my.navigateBackMiniProgram（Object）
跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功

### Object 入参说明
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| extraData | Object | 否 | 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

## 代码示例

```javascript
my.navigateBackMiniProgram({
	extraData:{
    "data1":"test"
  },
	success: (res) => {
    console.log(JSON.stringify(res))
  },
  fail: (res) => {
    console.log(JSON.stringify(res))
  }
});
```
