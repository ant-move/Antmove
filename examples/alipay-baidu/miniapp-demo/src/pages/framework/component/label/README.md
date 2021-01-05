# label

`Label` 可以用来改进表单组件的可用性，使用 `for` 属性找到对应组件的 `id`，或者将组件放在该标签下，当点击时，就会聚焦对应的组件。<br />`for` 优先级高于内部组件，内部有多个组件的时候默认触发第一个组件。<br />目前可以绑定的控件有：`<checkbox/>` , `<radio/>` ,`<input/>`, `<textarea/>`。

扫码体验：

![label.png](https://cache.amap.com/ecology/tool/miniapp/1563518499235.png)

| 属性名 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| for | String | 绑定组件的 id | v8.90.0 |
| class | String | 外部样式 | v8.90.0 |
| style | String | 内联样式 | v8.90.0 |

### 示例
```html
<view class="page">
  <view class="page-description">标签</view>
  <view class="page-section">
    <view class="page-section-title">Checkbox</view>
    <view class="page-section-demo">
      <checkbox-group>
        <view>
          <label>
            <checkbox value="AngularJS" />
            <text> AngularJS</text>
          </label>
        </view>
        <view>
          <label>
            <checkbox value="React" />
            <text> React</text>
          </label>
        </view>
      </checkbox-group>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Radio</view>
    <view class="page-section-demo">
      <radio-group>
        <view>
          <radio id="AngularJS" value="AngularJS" />
          <label for="AngularJS" class="label" style="color: red;">AngularJS</label>
        </view>
        <view>
          <radio id="React" value="React" />
          <label for="React">React</label>
        </view>
      </radio-group>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">多个 Checkbox 只选中一个</view>
    <view class="page-section-demo">
      <label>
        <checkbox>选中我</checkbox>
        <checkbox>选不中</checkbox>
        <checkbox>选不中</checkbox>
        <checkbox>选不中</checkbox>
        <view>
          <text>Click Me</text>
        </view>
      </label>
    </view>
  </view>
</view>
```
