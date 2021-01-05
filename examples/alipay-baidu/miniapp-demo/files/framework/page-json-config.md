# 页面配置

在 `/pages` 目录中的 .json 文件用于配置当前页面的窗口表现。页面配置比 `app.json` 全局配置简单得多，只能设置 `window` 相关配置项，但无需写 `window` 这个键。页面配置项会优先于全局配置项。

`window`配置项同[全局配置项](app-json-config)，同时支持以下几点：

- 支持 `optionMenu` 配置导航图标，点击后触发 `onOptionMenuClick`。但注意：`optionMenu` 配置将被废弃，建议使用 `my.setOptionMenu` 设置导航栏图标。

完整配置项如下：

| 文件 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| optionMenu | Object | 否 | （高德版本v10.00.0支持），设置导航栏额外图标，目前支持设置属性 icon，值为图标 url（以 https/http 开头）或 base64 字符串，大小建议 30*30 px |


以下为一个基本示例：

```json
{
  "optionMenu": {
    "icon": "https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png"
  },
  "titlePenetrate": YES
}
```
