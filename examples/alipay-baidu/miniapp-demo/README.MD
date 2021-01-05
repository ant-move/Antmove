# 高德官方 demo

## 模板使用方法
`tnpm i --by=yarn`

参考：http://gitlab.alibaba-inc.com/amap_frontend/miniapp-template/

## 构建

1. `npm run dev:outer`: 开发对外文档
2. `npm run dev:inner`: 开发对内文档
3. `npm run build:outer` 构建对外文档
4. `npm run build:inner` 构建对内文档
5. `npm run dev`: 默认开发对内文档
6. `npm run build`: 默认构建对内文档
   生成的 API 文档会放在`docs`目录下。
   > 注意：
   因语雀上不支持跳转相对路径，所以build时，会生成一个`yueque-docs`用于放置上传到语雀的文档。文档内的跳转路径只支持两个层级路径跳转。
7. `npm run uploadFiles`: 默认会上传webView的h5文件夹到服务器。
    如果需要上传其他资源，可以使用参数。具体情况如下：
    参数情况：
    -p: 自定义要上传的文件的相对路径（文件或文件夹都可以，相对路径时相对于当前命令执行的文件地址）。
    -r: 自定义要上传到的远端目录.路径前缀是`https://cache.amap.com/ecology/tool/miniapp/${pkg.name}/`
    例如：
    在项目根路径上执行
     `npm run uploadFiles -- -p ./src/pages/webView/h5  -r test`
    执行后得到：
    ```shell
      上传成功
      地址：https://cache.amap.com/ecology/tool/miniapp/miniapp-demo/test/webview.js
      上传成功
      地址：https://cache.amap.com/ecology/tool/miniapp/miniapp-demo/test/webview.css
      上传成功
      地址：https://cache.amap.com/ecology/tool/miniapp/miniapp-demo/test/webview.html
    ```


## 关于文档上传到语雀

首次上传时，
在站点页新建知识库->隐藏导入->gitbook .zip -> 下一步
设置名称（组件或 API 等）将对应的内容压缩为 zip 上传->新建

## 关于文档和 demo 的写法

根据测试的类型，将测试页面放在`src/pages/framework`对应目录下。
每个测试文档包含以下 5 个类型文件： 1. index.axml 2. index.scss 3. index.js 4. index.json 5. README.MD
如果测试的内容有只对内使用的接口，需新建一个目录，目录名字加个`__inner`结尾。
所有要测试的接口和组件基本配置放在`src/js`目录下的`API.js`和 `COMPONENT.js`。测试每个功能时，需更新对应的文档，补全所有字段。

## 关于 demo 中的二维码生成

执行

```shell
npm run qrcode -- -a <appId> -p <page>
```

即可生成你要的*高德小程序*页面的地址。你也可以把这些值写在`qrcode.config.json`文件中，
直接执行

```shell
npm run qrcode
```

也能生成对应的二维码图片地址。
其他参数的意义请参考：[qrcode-tool](http://gitlab.alibaba-inc.com/jingxue.zjx/qrcode-tool)

## todo

1. ~~搜索页面开发~~
2. ~~打包命令行参数。分别打包对内和对外的 API 文档和 demo~~对外导出 README
3. app 版本尚未支持的 API 如何显示？
4.~~配置文件~~
5. appId的确认

