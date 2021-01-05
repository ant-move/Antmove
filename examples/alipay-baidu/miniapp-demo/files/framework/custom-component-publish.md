# 发布自定义组件

高德小程序原生支持引入第三方 npm 模块。因此，自定义组件也支持发布到 npm，方便开发者复用和分享。

## 文件结构

以下是发布自定义组件的推荐文件结构，仅供参考 。

```
├── src // 单个自定义组件文件夹
│   ├── index.js
│   ├── index.json
│   ├── index.axml
│   ├── index.acss
│   └── demo // 自定义组件的演示 Demo 文件夹
│       ├── index.js
│       ├── index.json
│       ├── index.axml
│       └── index.acss
├── app.js // 为自定义组件小程序 Demo 配置 app.js 文件
├── app.json
└── app.acss
```

## JSON 示例

```json
// package.json
{
  "name": "your-custom-compnent",
  "version": "1.0.0",
  "description": "your-custom-compnent",
  "repository": {
    "type": "git",
    "url": "your-custom-compnent-repository-url"
  },
  "files": ["es"],
  "keywords": ["custom-component", "mini-program"],
  "devDependencies": {
    "rc-tools": "6.x"
  },
  "scripts": {
    "build": "rc-tools run compile && node scripts/cp.js && node scripts/rm.js",
    "pub": "git push origin && npm run build && npm publish"
  }
}
```

## js 文件示例

```javascript
// scripts/cp.js
const fs = require('fs-extra')
const path = require('path')
// copy file
fs.copySync(path.join(__dirname, '../src'), path.join(__dirname, '../es'), {
  filter(src, des) {
    return !src.endsWith('.js')
  },
})
```

```javascript
// scripts/rm.js
const fs = require('fs-extra')
const path = require('path')

// remove unnecessary file
const dirs = fs.readdirSync(path.join(__dirname, '../es'))

dirs.forEach((item) => {
  if (
    item.includes('app.') ||
    item.includes('DS_Store') ||
    item.includes('demo')
  ) {
    fs.removeSync(path.join(__dirname, '../es/', item))
  } else {
    const moduleDirs = fs.readdirSync(path.join(__dirname, '../es/', item))
    moduleDirs.forEach((item2) => {
      if (item2.includes('demo')) {
        fs.removeSync(path.join(__dirname, '../es/', item, item2))
      }
    })
  }
})

fs.removeSync(path.join(__dirname, '../lib/'))
```
