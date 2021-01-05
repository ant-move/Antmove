# Collapse 折叠

折叠面板。

## collapse

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| activeKey | 当前激活 tab 面板的 key | Array / String | 默认无，accordion模式下默认第一个元素 | false |
| onChange | 切换面板的回调	| (activeKeys: Array): void	 |  | false |
| accordion | 手风琴模式 | Boolean | false | false |
| collapseKey | 唯一标示collapse和对应的collapse-item | String | false | false |
## collapse-item

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| itemKey | 对应 activeKey | String | 组件唯一标识 | false |
| header | 面板头内容	| String | 无 | false |
| collapseKey | 唯一标示collapse和对应的collapse-item | String | false | false |

当Page中存在多个collapse组件时，collapse和对应的collapse-item的collapseKey属性为必选值并且必须相等，当Page中只有一个collapse组件时，collapseKey不需要提供。

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "collapse": "mini-antui/es/collapse/index",
    "collapse-item": "mini-antui/es/collapse/collapse-item/index"
  }
}
```

```html
<view>
  <view class="demo-title">基础用法</view>
  <collapse
    className="demo-collapse"
    collapseKey="collapse1"
    activeKey="{{['item-11', 'item-13']}}"
    onChange="onChange"
  >
    <collapse-item header="标题1" itemKey="item-11" collapseKey="collapse1">
      <view class="item-content content1">
        <view>内容区域</view>
      </view>                
    </collapse-item>
    <collapse-item header="标题2" itemKey="item-12" collapseKey="collapse1">
      <view class="item-content content2">
        <view>内容区域</view>
      </view>
    </collapse-item>
    <collapse-item header="标题3" itemKey="item-13" collapseKey="collapse1">
      <view class="item-content content3">
        <view>内容区域</view>         
      </view>
    </collapse-item>
  </collapse>
  <view class="demo-title">手风琴模式</view>
  <collapse
    className="demo-collapse"
    collapseKey="collapse2"
    activeKey="{{['item-21', 'item-23']}}"
    onChange="onChange"
    accordion="{{true}}"
  >
    <collapse-item header="标题1" itemKey="item-21" collapseKey="collapse2">
      <view class="item-content content1">
        <view>内容区域</view>
      </view>                
    </collapse-item>
    <collapse-item header="标题2" itemKey="item-22" collapseKey="collapse2">
      <view class="item-content content2">
        <view>内容区域</view>
      </view>
    </collapse-item>
    <collapse-item header="标题3" itemKey="item-23" collapseKey="collapse2">
      <view class="item-content content3">
        <view>内容区域</view>         
      </view>
    </collapse-item>
  </collapse>  
</view>
```

```css
.item-content {
  padding: 14px 16px;
  font-size: 17px;
  color: #333;
  line-height: 24px;
}

.content1 {
  height: 200px;
}

.content2 {
  height: 50px;
}

.content3 {
  height: 100px;
}

.demo-title {
  padding: 14px 16px;
  color: #999;
}

.demo-collapse {
  border-bottom: 1px solid #eee;
}
```

```javascript
Page({});
```
