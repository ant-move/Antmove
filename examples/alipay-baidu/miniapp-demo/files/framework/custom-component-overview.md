# 自定义组件介绍

自定义组件功能可将需要复用的功能模块抽象成自定义组件，从而在不同页面中复用，更可以将自定义组件发布到 npm 上，从而在不同小程序中进行复用，npm 的使用参见 [npm](https://docs.alipay.com/mini/ide/npm-manage)。

## 使用须知

高德小程序相比支付宝小程序，对`onInit`, `deriveDataFromProps`生命周期函数，以及`ref`获取自定义组件实例这些特性还**未支持**，开发时请注意。

## 创建并使用自定义组件

与  `Page`  类似，自定义组件也由  `axml`、`js`、`json`、`acss` 4 个部分组成。

创建并使用自定义组件有以下 4 个步骤：

1. 新建自定义组件文件夹。
2. 在 `.json` 文件中声明自定义组件。
3. 使用  `Component`  函数，注册自定义组件。
4. 使用自定义组件。

以下讲述如何创建最基本的自定义组件。

### 新建自定义组件文件夹

打开一个现有项目中（或者在 IDE 中，新建一个官方提供的 `blank` 项目），在 IDE 左侧文件树先新建一个 `components` 文件夹，用于存放所有组件，文件夹名字可以任意修改。在 `components` 文件夹的右击菜单中，选择**新建小程序组件**，输入组件名（例如 `index`，以下示例均以组件名 `index` 为例），IDE 会自动生成自定义组件所需的几个文件，如下所示：

![custom-component-overview1.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/182300/1562927564760-1864751a-4100-49ab-8f2e-c169bdcffc8b.png#align=left&display=inline&height=1080&name=custom-component-overview1.png&originHeight=1080&originWidth=1920&size=118520&status=done&width=1920)<br />
<br />![custom-component-overview2.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/182300/1562927427785-b29ffc2e-986f-4746-89c3-d3246ad2d005.png#align=left&display=inline&height=1080&name=custom-component-overview2.png&originHeight=1080&originWidth=1920&size=111466&status=done&width=1920)<br />
<br />![custom-component-overview3.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/182300/1562927446635-0fc102ad-9fc7-4946-9215-c7b07aae6a75.png#align=left&display=inline&height=1080&name=custom-component-overview3.png&originHeight=1080&originWidth=1920&size=105821&status=done&width=1920)

### 声明自定义组件

组件配置文件 `index.json` 用于声明当前目录是个自定义组件。

```javascript
// /components/index/index.json
{
  "component": true
}
```

### 注册自定义组件

组件注册  `index.js` 用于注册一个组件对象。

```javascript
// /components/index/index.js
Component({
  mixins: [], // minxin 方便复用代码
  data: { x: 1 }, // 组件内部数据
  props: { y: 1 }, // 可给外部传入的属性添加默认值
  didMount() {}, // 生命周期函数
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 自定义方法
    handleTap() {
      this.setData({ x: this.data.x + 1 }) // 可使用 setData 改变内部属性
    },
  },
})
```

组件模板 `index.axml` 和组件样式 `index.acss`（可选）：定义组件模板和样式。其中，样式文件可选。

```html
<!-- /components/index/index.axml -->
<view>
  HI, My Component
</view>
```

### 使用自定义组件

声明好一个组件后，即可在其他页面上使用。

先在页面配置中说明要使用哪个自定义组件，主要指定组件标签名字和组件所在路径。

```javascript
// /pages/index/index.json
{
  "usingComponents": {
    "my-component":"/components/index/index"
  }
}
```

然后在页面中引用组件即可。

```html
<!--  /pages/index/index.axml -->
<view>
  this is a blank page
</view>
<my-component />
```
