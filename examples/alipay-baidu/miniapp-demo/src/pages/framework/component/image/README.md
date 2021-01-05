# image

图片。

扫码体验：

![image.png](https://cache.amap.com/ecology/tool/miniapp/1563520679310.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| src | String |  | 图片地址 | v8.90.0 |
| mode | String | scaleToFill | 图片模式 | v8.90.0 |
| class | String | 外部样式 |  | v8.90.0 |
| style | String | 内联样式 |  | v8.90.0 |
| lazy-load | Boolean | false | 支持图片懒加载，不支持通过css来控制image展示隐藏的场景。 | v8.90.0 |
| onError | HandleEvent |  | 当图片加载错误时触发，事件对象event.detail = {errMsg: 'something wrong'} | v8.90.0 |
| onLoad | HandleEvent |  | 图片载入完毕时触发，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'} | v8.90.0 |

注：`image` 组件默认宽度 300px、高度 225px<br />mode 有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式。

| 属性名 | 描述 |
| :--- | :--- |
| scaleToFill | 不保持纵横比缩放，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit | 保持纵横比缩放，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来 |
| aspectFill | 保持纵横比缩放，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取 |
| widthFix | 宽度不变，高度自动变化，保持原图宽高比不变 |

### 裁剪模式
| 属性名 | 描述 |
| :--- | :--- |
| top | 不缩放图片，只显示顶部区域 |
| bottom | 不缩放图片，只显示底部区域 |
| center | 不缩放图片，只显示中间区域 |
| left | 不缩放图片，只显示左边区域 |
| right | 不缩放图片，只显示右边区域 |
| top left | 不缩放图片，只显示左上边区域 |
| top right | 不缩放图片，只显示右上边区域 |
| bottom left | 不缩放图片，只显示左下边区域 |
| bottom right | 不缩放图片，只显示右下边区域 |

`注意：` 图片高度不能设置为 auto，如果需要图片高度为 auto，直接设置 mode 为 widthFix.

### 示例

```html
<view class="page">
  <view class="page-description">图片</view>
  <view class="page-section" a:for="{{array}}" a:for-item="item">
    <view class="page-section-title">{{item.text}}</view>
    <view class="page-section-demo" onTap="onTap">
      <image class="image"
        data-name="{{item.mode}}"
        onTap="onTap"
        lazyLoad="true"
        mode="{{item.mode}}" src="{{src}}" onError="imageError" onLoad="imageLoad" />
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来',
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来',
    }, {
      mode: 'widthFix',
      text: 'widthFix：宽度不变，高度自动变化，保持原图宽高比不变',
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域',
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域',
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域',
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域',
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域',
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域',
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域',
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域',
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域',
    }],
    src: '/image/ant.png',
  },
  imageError(e) {
    console.log('image 发生 error 事件，携带值为', e.detail.errMsg)
  },
  onTap(e) {
    console.log('image 发生 tap 事件', e)
  },
  imageLoad(e) {
    console.log('image 加载成功', e)
  },
})
```

### 原图

![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/1c9568aa1b4b84d5dfc32384f3ed4985.png#align=left&display=inline&height=284&originHeight=280&originWidth=199&status=done&width=202)

### scaleToFill
不保持纵横比缩放，使图片完全适应<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/3e220bbc13b9a3f9100c5d3309a5d733.png#align=left&display=inline&height=151&originHeight=197&originWidth=200&status=done&width=153)

### aspectFit
保持纵横比缩放，使图片的长边能完全显示出来<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/b27f06b0a6ac93f4805075fbd01b0edd.png#align=left&display=inline&height=151&originHeight=199&originWidth=200&status=done&width=152)

### aspectFill
保持纵横比缩放，只保证图片的短边能完全显示出来<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/d03b2850b7920cf9f517a386567433d0.png#align=left&display=inline&height=153&originHeight=201&originWidth=200&status=done&width=152)

### widthFix
宽度不变，高度自动变化，保持原图宽高比不变<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/df5bd00b222bb11120407562f24330b8.png#align=left&display=inline&height=210&originHeight=560&originWidth=402&status=done&width=151)

### top
不缩放图片，只显示顶部区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/f3ab8e8a02622d994c1853e5f28e7a87.png#align=left&display=inline&height=150&originHeight=204&originWidth=204&status=done&width=150)

### bottom
不缩放图片，只显示底部区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/e563ea1b3c2d96f4a72f6518b37fcef7.png#align=left&display=inline&height=144&originHeight=196&originWidth=204&status=done&width=150)

### center
不缩放图片，只显示中间区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/ef8bc55660e0ab5ac609d88e51640fb7.png#align=left&display=inline&height=151&originHeight=404&originWidth=402&status=done&width=150)

### left
不缩放图片，只显示左边区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/ca5c85822273260b4f487e98431f6d40.png#align=left&display=inline&height=153&originHeight=404&originWidth=402&status=done&width=152)

### right
不缩放图片，只显示右边区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/9206f11e5f4eb8874cd286f3a848d78c.png#align=left&display=inline&height=152&originHeight=404&originWidth=402&status=done&width=151)

### top left
不缩放图片，只显示左上边区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/8cec463aedd3902a68e273e4462363e9.png#align=left&display=inline&height=152&originHeight=402&originWidth=402&status=done&width=152)

### top right
不缩放图片，只显示右上边区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/ac18acb1dbc593f93b222080b629ae82.png#align=left&display=inline&height=152&originHeight=404&originWidth=400&status=done&width=150)

### bottom left
不缩放图片，只显示左下边区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/361e0e530f835fade9a37a71a6b69efc.png#align=left&display=inline&height=149&originHeight=394&originWidth=398&status=done&width=151)

### bottom right
不缩放图片，只显示右下边区域<br />![](https://gw.alipayobjects.com/zos/skylark-tools/public/files/0fe81edaec080e12cd43c628932a34c6.png#align=left&display=inline&height=150&originHeight=394&originWidth=400&status=done&width=152)
