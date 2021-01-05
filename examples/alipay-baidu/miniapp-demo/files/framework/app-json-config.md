# app.json  全局配置

`app.json` 用于对小程序进行全局配置，设置页面文件的路径、窗口表现、网络超时时间、多 tab 等。

以下是一个基本配置示例：

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "defaultTitle": "Demo"
  }
}
```

完整配置项如下：

| 属性 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| pages | Array | 是 | 设置页面路径 |
| window | Object | 否 | 设置默认页面的窗口表现 |
| tabBar | Object | 否 | 设置底部 tabbar 的表现 |

## pages

app.json 中的 `pages` 为数组属性，数组中每一项都是字符串，用于指定小程序的页面。在小程序中新增或删除页面，都需要对 `pages` 数组进行修改。

`pages` 数组的每一项代表对应页面的路径信息，其中，第一项代表小程序的首页。

页面路径不需要写任何后缀，框架会自动去加载同名的 `.json`、`.js`、`.axml`、`.acss` 文件。举例来说，如果开发目录为：

```
├── pages
│   ├──index
│   │    ├── index.json
│   │    ├── index.js
│   │    ├── index.axml
│   │    └── index.acss
│   ├──logs
│   │    ├── logs.json
│   │    ├── logs.js
│   │    └── logs.axml
├── app.json
├── app.js
└── app.acss
```

`app.json` 就要写成下面的样子：

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```
## window

window 用于设置小程序的状态栏、导航条、标题、窗口背景色等。

| 属性 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| defaultTitle | String | 否 | 页面默认标题 |
| pullRefresh | String | 否 | 是否允许下拉刷新。默认NO, 备注：下拉刷新生效的前提是allowsBounceVertical 值为 YES |
| allowsBounceVertical | String | 否 | 是否允许向下拉拽。默认 `YES`, 支持 `YES` / `NO` |
| transparentTitle | String | 否 | 导航栏透明设置。默认 `none`，支持 `always` 一直透明 / `auto` 滑动自适应 / `none` 不透明 |
| showTitleLoading | String | 否 | 是否进入时显示导航栏的 loading。默认 `NO`，支持 `YES` / `NO` |
| titleImage | String | 否 | 导航栏图片地址 |
| titleBarColor | HexColor | 否 | 导航栏背景色 |
| backgroundColor | HexColor | 否 | 页面的背景色 |
| backgroundImageColor | HexColor | 否 | 下拉露出显示的背景图底色 |
| backgroundImageUrl | String | 否 | 下拉露出显示的背景图链接 |
| gestureBack | String | 否 | iOS 用，是否支持手势返回。默认 `NO`，支持 `YES` / `NO` |
| enableScrollBar | Boolean | 否 | Android 用，是否显示 WebView 滚动条。默认 `YES`，支持 `YES` / `NO` |


下面是一个例子：

```json
{
  "window":{
    "defaultTitle": "高德接口功能演示"
  }
}
```

## tabBar

如果你的小程序是一个多 tab 应用（客户端窗口的底部栏可以切换页面），那么可以通过 `tabBar` 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

注意：

- 通过页面跳转（`my.navigateTo`）或者页面重定向（`my.redirectTo`）所到达的页面，即使它是定义在 tabBar 配置中的页面，也不会显示底部的 tab 栏。
- `tabBar` 的第一个页面必须是首页。

tabBar 配置项有以下：

| 属性 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| textColor | HexColor | 否 | 文字颜色 |
| selectedColor | HexColor | 否 | 选中文字颜色 |
| backgroundColor | HexColor | 否 | 背景色 |
| items | Array | 是 | 每个 tab 配置 |


每个 item 配置：

| 属性 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| pagePath | String | 是 | 设置页面路径 |
| name | String | 是 | 名称 |
| icon | String | 否 | 平常图标路径 |
| activeIcon | String | 否 | 高亮图标路径 |


icon 图标推荐大小为 60×60 px 大小，系统会对传入的非推荐尺寸的图片进行非等比拉伸或缩放。

tabBar 示例如下：

```json
{
  "tabBar": {
    "textColor": "#dddddd",
    "selectedColor": "#49a9ee",
    "backgroundColor": "#ffffff",
    "items": [
      {
        "pagePath": "pages/index/index",
        "name": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "name": "日志"
      }
    ]
  }
}
```
