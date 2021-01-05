<p align="center">
  <img width="300" src="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">
</p>

# Mini AntUI

[![npm package](https://img.shields.io/npm/v/mini-antui.svg?style=flat-square)](https://www.npmjs.com/package/mini-antui)
[![GitHub stars](https://img.shields.io/github/stars/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/network/members)
[![NPM downloads](https://img.shields.io/npm/dm/mini-antui.svg?style=flat-square)](https://www.npmjs.com/package/mini-antui)
[![GitHub issues](https://img.shields.io/github/issues/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/issues)
[![GitHub license](https://img.shields.io/github/license/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/blob/master/LICENSE)

## 示例

<p align="left">
  <img width="250" src="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*xXX3TqsZimMwfA5KoKInYQBjAQAAAQ/original">
</p>

## 链接
- [mini-antui官网文档](https://docs.alipay.com/mini/component-ext/overview-ext-common)
- [支付宝小程序](https://mini.open.alipay.com/channel/miniIndex.htm)
- [开发工具](https://docs.alipay.com/mini/ide/overview)
- [开发规范](https://github.com/ant-mini-program/mini-antui/wiki/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83)

## 特性

- 基于`Advance Design`设计规范
- 使用[支付宝小程序](https://mini.open.alipay.com/channel/miniIndex.htm)开发

## 安装

```bash
$ npm install mini-antui --save
```

## 使用

在页面json中文件中进行注册，如card组件的注册如下所示：

```json
{
  "usingComponents": {
    "card": "mini-antui/es/card/index",
  }
}
```

在axml文件中进行调用：
```html
<card
  thumb="{{thumb}}"
  title="卡片标题2"
  subTitle="副标题非必填2"
  onClick="onCardClick"
  info="点击了第二个card"
/>
```

详细使用说明请参照官方文档[使用自定义组件](https://docs.alipay.com/mini/framework/use-custom-component)

## 贡献

如果你有好的意见或建议，欢迎给我们提[issue](https://github.com/ant-mini-program/mini-antui/issues)。
