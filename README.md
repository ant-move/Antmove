# 指南

Antmove - 小程序转换器，基于支付宝/微信小程序转换为多端小程序，让小程序跨平台开发变得简单。
> 一键实现小程序转换迁徙，不再为重复开发而烦恼。

![antmove structure](https://img.alicdn.com/tfs/TB13u6Cb4z1gK0jSZSgXXavwpXa-3852-936.png)

## 特性

* 简单易使用，一键转换
* 配套详细的编译时日志/运行时日志工具
* 编译生成代码可读性强，可二次编程
* 二次编译支持
* 组件转换支持

## 文档

* [多端代码编写指南](https://ant-move.github.io/guide/children/cross-platform.html)
* [微信转钉钉快速指南](https://ant-move.github.io/guide/contribute/wxToDd.html)
* [微信转支付宝快速指南](https://ant-move.github.io/guide/contribute/wxToAlipay.html)
* [支付宝转微信快速指南](https://ant-move.github.io/guide/contribute/alipayToWx.html)
* [支付宝转百度快速指南](https://ant-move.github.io/guide/contribute/alipayToBaidu.html)
* [支付宝小程序使用 Antmove 组件库指南](https://ant-move.github.io/guide/contribute/alipayUseAntmove.html)
* [钉钉小程序使用 Antmove 组件库指南](https://ant-move.github.io/guide/contribute/ddUseAntmove.html)
* [Antmove 实现原理介绍](https://ant-move.github.io/guide/contribute/howToContribute.html)

## 安装

### VsCode 扩展安装

在 vscode 扩展中搜索 `Antmove` 下载安装 Antmove vscode 转换插件实现一键转换。

### 命令行安装

> 我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

* 全局安装

```bash
$ npm install antmove -g
```
或
```bash
$ yarn global add antmove
```

* 本地安装

```bash
$ npm install antmove --save
```
或
```bash
$ yarn add antmove
```


> 如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 快速开始

### VsCode 扩展使用

* 安装扩展（Antmove - antmove-vscode-plugin）
* 在 VsCode 中打开要转换的项目
* 打开 VsCode 命令面板
    * Mac: `command + shift + p`
    * Windows: `ctrl + shift + p`
* 输入 `Antmove`
* 运行 `Antmove: Run antmove` 命令
* 运行如上命令后会给出一个弹窗，选择转换后生成代码存储目录
* 转换完成

* [antmove-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=antmove-app.antmove-vscode-plugin&ssr=false)

> 本插件依赖于 vscode 代码编辑器，安装了 vscode 的用户才能使用。


### 命令行使用

```bash
npm i -g antmove
```

> 通过 npm 或 yarn 全局安装才能使用如下命令行

* `antmove wx-alipay`（使用前请将终端切换到需转换编译的微信小程序项目路径）

```bash
antmove wx-alipay -i ./ -o ./dist/alipay-app
```

* `antmove` - 该命令更加灵活，可配置输出输出目录/编译模式等

```bash
antmove wx-alipay -i ./wechat-mini/project -o ./dist/alipay-mini/project --env development
```
> 如上的命令表示将 `./wechat-mini/project` 微信小程序项目转换为支付宝小程序项目，转换到 `./dist/alipay-mini/project` 目录
> 如果你不想输入参数，可以体验交互式的命令方式，执行 `antmove` 即可。

#### 配置参数

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选（development/production），编译模式，生产模式代码会压缩，无编译日志及运行时日志

> 更多配置项可参考[配置参数详情](../config/)。


### Node.js 使用方式

#### 示例
```js
const path = require('path');
const transformFramework = require('antmove');
const WechatPlugin = require('@antmove/wx-alipay');

let outputPath = path.join(__dirname, '../../dist');
let inputDirPath = path.join(__dirname, '../../examples/miniprogram-demo/miniprogram');

const App = transformFramework();

App.use(
    WechatPlugin, 
    {
        entry: inputDirPath,
        dist: outputPath + '/alipaymini-demo',
        env: 'development'
    })
    .start();
```

## 注意事项

### 使用Vant-aliapp组件库
* 当你项目中引入Vant-aliapp组件库，运行时报‘identifi(arguments) is disallowed in sjs’错误时, 可以取消IDE界面 详情 > 启用基础库2.0构建的勾选来解决
* 支付宝上使用vant的checkbox、collapse、dropdown-menu、goods-action、grid、radio、tab、tabbar、index-bar、sidebar等组件的解决方法，按以下步骤进行：
    1. npm下载Antmove命令行工具
    > npm install antmove -g
    2. 在你的项目根目录下，使用 alipay-compiler 对项目进行转换
    > antmove -t alipay-compiler
    3. 转换后的支付宝小程序即可支持以上组件
* 如引入某个组件发现渲染失败时，可以参照 [示例](https://github.com/ant-move/Vant-Aliapp/tree/master/alipay/vant-app)中的例子仿写，如还有疑问可以扫描下方钉钉二维码联系我们

## [谁在使用](https://github.com/ant-move/antmove/issues/1)

### 微信小程序

> 这里展示的微信小程序为原小程序应用，下面的其它平台小程序为基于这些微信小程序转换得到。

<img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782950065567308.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782952846212329.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782953106003106.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782953317193007.jpg'>

### 支付宝小程序

<img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782958847436418.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782959106179161.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782959378977715.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782959600209087.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782960063558225.jpg'>

### 高德小程序

<img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782960342118999.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782960508762175.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782961458874630.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782961717464794.jpg'>

> 如果你的公司和产品使用了 [Antmove](https://ant-move.github.io/website/docs/readme.html)，欢迎到[这里](https://github.com/ant-move/antmove/issues/1)留言。

## 贡献

欢迎参与 Antmove 项目的开发建设和讨论。
> 提交 pull request 之前请先提 [Issue 讨论](https://github.com/ant-move/antmove/issues).

## 协议
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## [联系](https://github.com/ant-move/Antmove/issues/23)

* <img width='250' src='https://cache.amap.com/ecology/tool/antmove/web/assets/contact-dd.jpg'/>
* Email：amap-appx@service.autonavi.com
