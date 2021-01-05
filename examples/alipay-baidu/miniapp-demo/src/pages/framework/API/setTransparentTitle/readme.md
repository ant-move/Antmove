# 设置导航栏背景透明
### 扫码预览
![setTransparentTitle.png](https://cache.amap.com/ecology/tool/miniapp/1563434643534.png)
## my.setTransparentTitle

设置导航栏背景透明模式。


备注：使用该api来动态切换导航栏是否透明，会导致Native界面重排后出现闪动。因此除了一些业务事先无法确定当前页是否需要透明导航栏的场景外，尽量使用启动参数transparentTitle来启用透明导航栏功能。

| 名称 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| transparentTitle | String | 是 | transparentTitle对应的值：<br />auto(背景透明度自动变化模式)/<br />always(背景永久透明模式)/<br />none(背景不透明模式)  | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |


### 入参说明
关于参数使用说明：<br />always/auto 如果transparentTitle为字符串always，则当前页面上下滚动时，titlebar一直全透明；<br />当transparentTitle值为auto，当页面往下滚动时，透明度不断增加，直到scrollTop等于80pt时变成完全不透明，<br />此时页面再往上滚动则反之，透明度不断减小直到回到顶部时变成完全不透明。如果下个页面不需要透明效果，则需要在新页面的启动参数param参数重新指定transparentTitle为"none"。

使用注意：

1. titlebar透明时，页面内容从屏幕最顶部开始布局，页面需要预留titlebar的高度防止title遮挡页面内容<br />
1. 使用时可使用my.canIUse('setTransparentTitle')做下兼容<br />

### 代码示例

```html
<view class="page">
  <view class="page-description">设置导航栏背景透明</view>
  <view class="page-section">
    <view class="page-section-title">setTransparentTitle</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="setTransparentTitle">
        setTransparentTitle
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  setTransparentTitle() {
    my.setTransparentTitle({
      transparentTitle: 'auto',
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
      },
    })
  },
})
```
