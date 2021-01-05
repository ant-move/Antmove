# form

表单，用于将组件内的用户输入的 `<textarea>`、 `<switch/>`、 `<input/>` 、`<checkbox-group/>`、`<slider/>`、`<radio-group/>`、`<picker/>` 等组件提交。<br />当点击 `form` 表单中 `formType` 为 `submit` 的 `button` 组件时，会将表单组件中的 `value` 值进行提交，需要在表单组件中加上 `name` 来作为 `key`。<br />扫码体验：<br />![form.png](https://cache.amap.com/ecology/tool/miniapp/1563519863487.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| report-submit | boolean |  | onSubmit 回调是否返回 formId 用于发送 [模板消息](https://docs.alipay.com/mini/introduce/message)，使用前可使用 **canIUse('form.report-submit')** 判断是否支持 | v9.15.0 |
| onSubmit | EventHandle |  | 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'}, buttonTarget: {'dataset': 'buttonDataset'} } | v8.90.0 |
| onReset | EventHandle |  | 表单重置时会触发 reset 事件 | v8.90.0 |
| class | String |  | 外部样式名 | v8.90.0 |
| style | String |  | 内联样式 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/HfKjtUFGsmHraGvFnsCo.png#align=left&display=inline&height=575&originHeight=1144&originWidth=750&status=done&width=377)

### 示例

```html
<view class="page">
  <view class="page-description">表单</view>
  <form onSubmit="onSubmit" onReset="onReset" report-submit="true" class="form" style="marginTop: 10px;">
    <view class="page-section">
      <view class="page-section-title">Slider</view>
      <view class="page-section-demo">
        <slider value="80" name="slider" show-value />
      </view>
    </view>
    <view class="page-section">
      <view class="form-row">
        <view class="form-row-label">Switch</view>
        <view class="form-row-content" style="text-align: right">
          <switch name="switch" />
        </view>
      </view>
      <view class="form-line" />
      <view class="form-row">
        <view class="form-row-label">Input</view>
        <view class="form-row-content">
          <input name="input" class="input" placeholder="input something" />
        </view>
      </view>
    </view>
    <view class="page-section">
      <view class="page-section-title">Radio</view>
      <view class="page-section-demo">
        <radio-group name="radio-group">
          <label><radio value="radio1" />radio1</label>
          <label><radio value="radio2" />radio2</label>
        </radio-group>
      </view>
    </view>
    <view class="page-section">
      <view class="page-section-title">Checkbox</view>
      <view class="page-section-demo">
        <checkbox-group name="checkbox">
          <label><checkbox value="checkbox1" />checkbox1</label>
          <label><checkbox value="checkbox2" />checkbox2</label>
        </checkbox-group>
      </view>
      <view class="page-section-btns">
        <view><button size="mini" type="default" formType="reset">reset</button></view>
        <view><button size="mini" type="default" formType="submit">submit</button></view>
      </view>
    </view>
  </form>
</view>
```

```javascript
Page({
  onSubmit(e) {
    my.alert({
      content: `submit：${JSON.stringify(e.detail)}`,
    })
  },
  onReset() {
    my.alert({
      content: '重置',
    })
  },
})
```
