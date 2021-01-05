# 自定义通用菜单
### 扫码预览
![customGeneralMenu.png](https://cache.amap.com/ecology/tool/miniapp/1563437531358.png)
## my.hideShareMenu(Object)
隐藏当前页面通用菜单（右上角）中的`分享`功能。

### Object 参数说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

## my.hideAddToDesktopMenu
隐藏当前页面通用菜单中的`添加到桌面`功能（v9.05）

### 代码示例

## my.hideAllAddToDesktopMenu
隐藏所有页面的通用菜单中的`添加到桌面`功能（v9.05）

## my.hideFavoriteMenu
隐藏所有页面的通用菜单中的`收藏`按钮（v9.05）

## my.hideAllFavoriteMenu
隐藏所有页面的通用菜单中的`收藏`功能（v9.05）

### 代码示例

```html
<view class="page">
  <view class="page-description">自定义通用菜单</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">hideShareMenu</view>
        隐藏当前页面通用菜单（右上角）中的功能。
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="hideShareMenu">
        hideShareMenu
      </button>      
    </view>
    <view class="page-section-title">hideAddToDesktopMenu</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="hideAddToDesktopMenu">
        hideAddToDesktopMenu
      </button>
    </view>
    <view class="page-section-title">hideAllAddToDesktopMenu</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="hideAllAddToDesktopMenu">
        hideAllAddToDesktopMenu
      </button>
    </view>
    <view class="page-section-title">hideFavoriteMenu</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="hideFavoriteMenu">
        hideFavoriteMenu
      </button>
    </view>
    <view class="page-section-title">hideAllFavoriteMenu</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="hideAllFavoriteMenu">
        hideAllFavoriteMenu
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  hideShareMenu() {
    my.hideShareMenu()
  },
  hideAddToDesktopMenu() {
    my.hideAddToDesktopMenu()
  },
  hideAllAddToDesktopMenu() {
    my.hideAllAddToDesktopMenu()
  },
  hideFavoriteMenu() {
    my.hideFavoriteMenu()
  },
  hideAllFavoriteMenu() {
    my.hideAllFavoriteMenu()
  },
})
```
