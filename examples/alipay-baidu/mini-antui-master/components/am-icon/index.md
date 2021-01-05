# AMIcon

图标。

扫码体验：

<img src="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*mQn6SLUq1KkAAAAAAAAAAABjARQnAQ" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| type | icon类型 | String | | true |
| size | icon 大小，单位px | String | | false |
| color | icon 颜色，同css的color | String | | false |


| 图标风格 | type有效值 |
| ---- | ---- |
| 基础类型 | `arrow-left`、 `arrow-up`、 `arrow-right`、 `arrow-down`、`cross`、`plus` |
| 描边风格 | `close-o`、`dislike-o`、`heart-o`、`help-o`、`like-o`、`location-o`、`info-o`、`success-o`、`wait-o`、`warning-o`、`star-o`、`download`、`friends`、`circle`、`delete`、`charge`、`card`、`notice`、`qrcode`、`reload`、`scan`、`money`、`search`、`setting`、`share`、`zoom-in`、`zoom-out` |
| 实心风格 | `close`、`dislike`、`heart`、`help`、`like`、`location`、`info`、`success`、`wait`、`warning`、`star` |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "am-icon": "mini-antui/es/am-icon/index",
  }
}
```

```html
<view>
  <am-icon type="like" size="{{24}}" color="#333" />
</view>
```