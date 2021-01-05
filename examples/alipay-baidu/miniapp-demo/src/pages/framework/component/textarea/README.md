# textarea

多行输入框。

扫码体验：

![textarea.png](https://cache.amap.com/ecology/tool/miniapp/1563519021773.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String |  | 组件名字，用于表单提交获取数据 | v8.90.0 |
| value | String |  | 初始内容 | v8.90.0 |
| placeholder | String |  | 占位符 | v8.90.0 |
| placeholder-style | String |  | 指定 placeholder 的样式 | v8.90.0 |
| placeholder-class | String |  | 指定 placeholder 的样式类 | v8.90.0 |
| class | String |  | 样式名 | v8.90.0 |
| style | String |  | 内联样式 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 | v8.90.0 |
| maxlength | Number | 140 | 最大长度，当设置为-1时不限制最大长度 | v8.90.0 |
| focus | Boolean | false | 获取焦点 | iosv9.10,andriod:v8.90 |
| auto-height | Boolean | false | 是否自动增高 | v8.90.0 |
| onInput | EventHandle |  | 键盘输入时触发，event.detail = {value: value}，可以直接 return 一个字符串以替换输入框的内容 | v8.90.0 |
| onFocus | EventHandle |  | 输入框聚焦时触发 event.detail = {value: value} | v8.90.0 |
| onBlur | EventHandle |  | 输入框失去焦点时触发，event.detail = {value: value} | v8.90.0 |
| onConfirm | EventHandle |  | 点击完成时触发，event.detail = {value: value} | v8.90.0 |
| show-count | Boolean | true | 是否渲染字数统计功能 | v8.90.0 |
| controlled | Boolean | false | 是否为受控组件。为true时，value内容会完全受setData控制 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/CsrhIPLDdUVmyzWcHDCr.png#align=left&display=inline&height=587&originHeight=1167&originWidth=750&status=done&width=377)

### 示例

```html
<view class="page">
  <view class="page-description">多行输入框</view>
  <view class="page-section">
    <view class="page-section-title">受控聚焦</view>
    <view class="page-section-demo">
      <textarea focus="{{focus}}" onFocus="onFocus" onBlur="onBlur" placeholder="Please input something" />
    </view>
    <view class="page-section-btns">
      <button type="default" size="mini" onTap="bindButtonTap">聚焦</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">自适应高度</view>
    <view class="page-section-demo">
      <textarea onBlur="bindTextAreaBlur" auto-height placeholder="Please input something" placeholder-style="color: red;"/>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">结合表单</view>
    <form onSubmit="bindFormSubmit">
      <view class="page-section-demo">
        <textarea name="textarea"
          maxlength="10"
          value="请输入"
          placeholder="Please input something" 
          onInput="input"
          onConfirm="confirm"
          show-count="true"
        />
      </view>
      <view class="page-section-btns">
        <button form-type="submit" size="mini" type="default">提交</button>
      </view>  
    </form>
  </view>
</view>
```

```javascript
Page({
  data: {
    height: 20,
    focus: false,
  },
  bindButtonTap() {
    this.onFocus()
  },
  onFocus() {
    this.setData({
      focus: true,
    })
  },
  onBlur() {
    this.setData({
      focus: false,
    })
  },
  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit(e) {
    my.alert({
      content: e.detail.value.textarea,
    })
  },
  input(e) {
    console.log(e.detail.value)
  },
  confirm() {
    console.log('完成')
  },
})
```
