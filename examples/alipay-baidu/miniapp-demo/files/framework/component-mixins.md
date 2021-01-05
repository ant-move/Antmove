# mixins

开发者有时可能会实现多个自定义组件，而这些自定义组件可能会有些公共逻辑要处理，小程序提供 mixins 用于解决这种情况。

以下为示例：

```javascript
// /minxins/lifecylce.js
export default {
  didMount() {},
  didUpdate(prevProps, prevData) {},
  didUnmount() {},
}
```

```javascript
// /components/index/index.js
import lifecylce from '/minxins/lifecylce'

const initialState = {
  data: {
    isLogin: false,
  },
}

const defaultProps = {
  props: {
    age: 30,
  },
}

const methods = {
  methods: {
    onTapHandler() {},
  },
}

Component({
  mixins: [lifecylce, initialState, defaultProps, methods],
  data: {
    name: 'amap',
  },
})
```

```html
<!-- /components/index/index.axml -->
<view>{{name}}: {{age}}</view>
```
