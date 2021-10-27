const { createSupportProp } = require('./utils.js')

/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 * 5 - wrapComponent - 使用自定义组件代替
 * 6 - diff tagName
 * 7 - equal - 完全支持
 * 
 * status - 支持程度
 * 0 - 完整支持
 * 1 - 部分支持
 * 2 - 不支持
 * 
 * desc - 组件或属性作用描述
 */
module.exports = {
  'checkbox-group': {
    name: '多项选择器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uMTMy4yMxIjLzEjM',
    },
    desc: '多项选择器，内部由多个checkbox组成。',
    props: {
      bindchange: createSupportProp('checkbox-group中选中项发生改变时触发 change 事件'),
    },
  },
  form: {
    name: '表单',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
      target: 'https://docs.alipay.com/mini/component/form',
    },
    desc: '将组件内的用户输入的switch input checkbox slider radio picker 提交。当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。',
    props: {
      'report-submit': createSupportProp('是否返回 formId 用于发送模板消息'),
      bindsubmit: createSupportProp('携带 form 中的数据触发 submit 事件'),
      bindreset: createSupportProp('表单重置时会触发 reset 事件'),
    },
  },
  input: {
    name: '输入框',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uITOx4iM5EjLykTM',
    },
    desc: '该组件是原生组件，使用时请注意相关限制',
    props: {
      value: createSupportProp('输入框的初始内容'),
      type: createSupportProp('input 的类型'),
      password: createSupportProp('是否是密码类型'),
      placeholder: createSupportProp('输入框为空时占位符'),
      'placeholder-style': createSupportProp('指定 placeholder 的样式'),
      'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
      disabled: createSupportProp('是否禁用'),
      maxlength: createSupportProp('最大输入长度，设置为 -1 的时候不限制最大长度'),
      'cursor-spacing': createSupportProp('指定软键盘弹出时，与光标的距离是多少，单位是px'),
      cursor: createSupportProp('指定focus时的光标位置'),
      'selection-start': createSupportProp('光标起始位置，自动聚集时有效，需与selection-end搭配使用'),
      'selection-end': createSupportProp('光标结束位置，自动聚集时有效，需与selection-start搭配使用'),
      bindinput: createSupportProp('键盘输入时触发'),
      bindfocus: createSupportProp('输入框聚焦时触发'),
      bindblur: createSupportProp('输入框失去焦点时触发'),
      bindconfirm: createSupportProp('点击完成按钮时触发'),
      bindkeyboardheightchange: createSupportProp('键盘高度发生变化的时候触发此事件'),
    },
  },
  picker: {
    name: '从底部弹起的滚动选择器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uUTOx4SN5EjL1kTM',
    },
    desc: '从底部弹起的滚动选择器。',
    props: {
      mode: createSupportProp('选择器类型'),
      disabled: createSupportProp('是否禁用'),
      bindchange: createSupportProp('发生改变时触发'),
      bindcancel: createSupportProp('取消选择时触发'),
    },
  },
  'picker-view': {
    name: '嵌入页面的滚动选择器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
      target: 'https://developer.toutiao.com/dev/miniapp/ukDMy4SOwIjL5AjM',
    },
    desc: '其中只可放置 picker-view-column组件，其它节点不会显示。',
    props: {
      value: createSupportProp('数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。'),
      'indicator-style': createSupportProp('设置选择器中间选中框的样式'),
      'mask-style': createSupportProp('设置蒙层的样式'),
      'mask-class': createSupportProp('设置蒙层的类名'),
      bindchange: createSupportProp('滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）'),
    },
  },
  // 
  radio: {
    name: '单选项目',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
      target: 'https://docs.alipay.com/mini/component/radio',
    },
    desc: '单选项目。',
    props: {
      value: createSupportProp('radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value'),
      checked: createSupportProp('当前是否选中'),
      disabled: createSupportProp('是否禁用'),
      color: createSupportProp('radio的颜色，同css的color'),
    },
  },
  'radio-group': {
    name: '单项选择器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html',
      target: 'https://docs.alipay.com/mini/component/radio-group',
    },
    desc: '单项选择器，内部由多个 radio 组成。',
    props: {
    },
  },
  slider: {
    name: '滑动选择器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
      target: 'https://docs.alipay.com/mini/component/slider',
    },
    desc: '滑动选择器。',
    props: {
      min: createSupportProp('最小值'),
      max: createSupportProp('最大值'),
      step: createSupportProp('步长，值必须大于 0，并可被(max - min)整除'),
      disabled: createSupportProp('是否禁用'),
      value: createSupportProp('当前取值'),
    },
  },
  switch: {
    name: '开关选择器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
      target: 'https://docs.alipay.com/mini/component/switch',
    },
    desc: '开关选择器。',
    props: {
      checked: createSupportProp('是否选中'),
      disabled: createSupportProp('是否禁用'),
      color: createSupportProp('switch 的颜色，同 css 的 color'),
    },
  },
  textarea: {
    name: '多行输入框',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
      target: 'https://docs.alipay.com/mini/component/textarea',
    },
    desc: '该组件是原生组件，使用时请注意相关限制。',
    props: {
      value: createSupportProp('输入框的内容'),
      placeholder: createSupportProp('占位符'),
      'placeholder-style': createSupportProp('指定 placeholder 的样式'),
      'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
      disabled: createSupportProp('是否禁用'),
      maxlength: createSupportProp('最大长度，当设置为-1时不限制最大长度'),
      focus: createSupportProp('获取焦点'),
      'auto-height': createSupportProp('是否自动增高，设置auto-height时，style.height不生效'),
    },
  },
  button: {
    type: 0,
    name: '按钮',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
      target: 'https://docs.alipay.com/mini/component/button',
    },
    desc: '按钮',
    props: {
      size: createSupportProp('按钮的大小'),
      type: createSupportProp('按钮的样式类型'),
      plain: createSupportProp('按钮是否镂空，背景色透明'),
      disabled: createSupportProp('是否禁用'),
      loading: createSupportProp('名称前是否带 loading 图标'),
      'form-type': createSupportProp('用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件'),
      'hover-class': createSupportProp('指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果'),
      'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态'),
      'hover-start-time': createSupportProp('按住后多久出现点击态，单位毫秒'),
      'hover-stay-time': createSupportProp('手指松开后点击态保留时间，单位毫秒'),
      'app-parameter': createSupportProp('打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效'),
    },
  },
  editor: {
    name: '富文本编辑器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '富文本编辑器，可以对图片、文字进行编辑',
  },
}
