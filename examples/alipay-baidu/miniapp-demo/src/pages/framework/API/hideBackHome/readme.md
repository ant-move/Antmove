# my.hideBackHome
### 扫码预览
![hideBackHome.png](https://cache.amap.com/ecology/tool/miniapp/1563437843367.png)

<br/>隐藏标题栏上的返回首页图标和右上角通用菜单中的返回首页功能。

**说明：**

- 用户启动小程序时，若进入的页面不是小程序首页，则会在左上角出现返回首页图标。

## 示例代码

```html
<view>
</view>
<view class="page">
  <view class="page-description">隐藏返回首页图标</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">hideBackHome</view>
      启动小程序时，若进入的页面不是小程序首页，则会在左上角出现返回首页图标。
      当前点击页面按钮无效果。
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="hideBackHome">
        hideBackHome
      </button>      
    </view>
  </view>
</view>
```

```javascript
Page({
  hideBackHome() {
    console.log(my.canIUse('hideBackHome'))
    my.hideBackHome()
  },
})
```



