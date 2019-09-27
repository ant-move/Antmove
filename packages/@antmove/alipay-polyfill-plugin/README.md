# alipay-compiler

Antmove 支付宝小程序编译插件，主要解决原生支付宝小程序直接引用 Antmove 转换而来组件。如基于 Antmove 转换得到的 iview-aliapp/vant-aliapp 两大组件库，通过 npm 方式引入该组件库后，需使用该命令进行编译才能正常使用（relations 和 selectComponent 功能依赖 Antmove 编译时数据）。

## 使用 npm 或 yarn 安装

> 我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

* 全局安装

```bash
$ npm install antmove -g
```

* 本地安装

```bash
$ npm install antmove --save
```

## 使用

```bash
antmove alipay-compiler
```

