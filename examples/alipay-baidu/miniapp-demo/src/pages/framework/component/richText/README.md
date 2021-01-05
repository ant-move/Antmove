# rich-text

富文本组件。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563440969825.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| nodes | Array | [] | 只支持 `节点列表` | v9.10.0 |

支持如下默认事件:

- tap
- touchstart
- touchmove
- touchcancel
- touchend
- longtap

**注意**<br />nodes 属性只支持使用 Array 类型。如果需要支持 HTML String，则需要自己将 HTML String转化为 nodes 数组，可使用 [mini-html-parser](https://github.com/ant-mini-program/mini-html-parser) 转换。

### nodes

现支持两种节点，通过type来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的HTML节点

#### 元素节点
| 属性名 | 类型 | 说明 | 必填 | 备注 |
| --- | --- | --- | --- | --- |
| type | String | 节点类型 | 否 | 默认值为 node |
| name | String | 标签名 | 是 | 支持部分受信任的HTML节点 |
| attrs | Object | 属性 | 否 | 支持部分受信任的属性，遵循Pascal命名法 |
| children | Array | 子节点列表 | 否 | 结构和nodes相同 |

#### 文本节点
| 属性名 | 类型 | 说明 | 必填 | 备注 |
| --- | --- | --- | --- | --- |
| type | String | 节点类型 | 是 |  |
| text | String | 文本 | 是 |  |

### 支持的HTML节点及属性

支持class和style属性，不支持id属性。

| 节点 | 属性 |
| --- | --- |
| a |  |
| abbr |  |
| b |  |
| blockquote |  |
| br |  |
| code |  |
| col | span, width |
| colgroup | span, width |
| dd |  |
| del |  |
| div |  |
| dl |  |
| dt |  |
| em |  |
| fieldset |  |
| h1 |  |
| h2 |  |
| h3 |  |
| h4 |  |
| h5 |  |
| h6 |  |
| hr |  |
| i |  |
| img | alt, src, height, width |
| ins |  |
| label |  |
| legend |  |
| li |  |
| ol | start, type |
| p |  |
| q |  |
| span |  |
| strong |  |
| sub |  |
| sup |  |
| table | width |
| tbody |  |
| td | colspan, height, rowspan, width |
| tfoot |  |
| th | colspan, height, rowspan, width |
| thead |  |
| tr |  |
| ul |  |

### 示例代码

```html
<view class="page">
  <view class="page-description">富文本</view>
  <view class="page-section">
    <view class="page-section-title">richText</view>
    <view class="page-section-demo">
      <rich-text nodes="{{nodes}}" onTap="tap"></rich-text>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    nodes: [{
      type: 'node',
      name: 'div',
      attrs: {
        class: 'test_div_class',
        style: 'color: green;',
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World! This is a text node.',
      }],
    }],
  },
  tap() {
    console.log('tap')
  },
})
```

**注**: 仅支持如下字符实体。其他字符实体会导致组件无法渲染

| 显示结果 | 描述 | 实体名称 |
| --- | --- | --- |
|  | 空格 | &nbsp; |
| < | 小于号 | &lt; |
| > | 大于号 | &gt; |
| & | 和号 | &amp; |
| " | 引号 | &quot; |
| ' | 撇号 | &apos; |
