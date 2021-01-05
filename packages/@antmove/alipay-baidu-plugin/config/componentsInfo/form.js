const { createSupportProp } = require('../../config/componentsInfo/utils')

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
  button: {
    name: '按钮',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#button/',
      original: 'https://docs.alipay.com/mini/component/button',
    },
    desc: '按钮',
    props: {
      size: createSupportProp('有效值 default, mini'),
      type: createSupportProp('按钮的样式类型，有效值 primary, default, warn'),
      plain: createSupportProp('是否镂空'),
      disabled: createSupportProp('是否禁用'),
      loading: createSupportProp('是否禁用'),
      'hover-class': createSupportProp('按钮按下去的样式类'),
      'hover-start-time': createSupportProp('按住后多少事件后出现点击状态，单位毫秒'),
      'hover-stay-time': createSupportProp('手指松开后点击状态保留时间，单位毫秒'),
      'hover-stop-propagation': createSupportProp('是否阻止当前元素的祖先元素出现点击态'),
      'form-type': createSupportProp('有效值：submit, reset，用于 <form /> 组件，点击分别会触发 submit/reset 事件'),
      'open-type': createSupportProp('开放能力', 4),
      scope: createSupportProp('当 open-type 为 getAuthorize 时有效', 0),
      onTap: createSupportProp('当 open-type 为 getAuthorize 时有效', 1),
      'app-parameter': createSupportProp('打开 APP 时，向 APP 传递的参数', 0),
      'public-id': createSupportProp("生活号 id, 必须是当前小程序同主体且已关联的生活号，open-type='lifestyle' 时有效", 0),
    },
  },
  form: {
    name: '表单',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#form/',
      original: 'https://docs.alipay.com/mini/component/form',
    },
    desc: '表单。用于将组件内的用户输入的 textarea、 switch、 input 、checkbox、slider、radio 、picker 等组件提交。',
    props: {
      'report-submit': createSupportProp('onSubmit 回调是否返回 formId，用于发送 模板消息，使用前可使用 '),
      onSubmit: createSupportProp('携带 form 中的数据触发 submit 事件'),
      onReset: createSupportProp('表单重置时会触发 reset 事件'),
    },
  },
  label: {
    name: '表单组件标签',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#label/',
      original: 'https://docs.alipay.com/mini/component/label',
    },
    desc: '用于改进表单组件的可用性',
    props: {
      for: createSupportProp('绑定控件的 id'),
    },
  },
  input: {
    name: '输入框',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#input/',
      original: 'https://docs.alipay.com/mini/component/input',
    },
    desc: '输入框。',
    props: {
      value: createSupportProp('初始内容'),
      name: createSupportProp('组件名字，用于表单提交获取数据'),
      type: {
                
        type: 4,
        status: 1,
        desc: 'type缺少idcard、numberpad、digitpad、idcardpad取值',
                
      },
      password: createSupportProp('是否是密码类型'),
      placeholder: createSupportProp('占位符'),
      'placeholder-style': createSupportProp('指定 placeholder 的样式'),
      'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
      disabled: createSupportProp('是否禁用'),
      maxlength: createSupportProp('最大长度'),
      focus: createSupportProp('获取焦点'),
      'confirm-type': createSupportProp('设置键盘右下角按钮的文字'),
      'confirm-hold': createSupportProp('点击键盘右下角按钮时是否保持键盘不收起状态'),
      cursor: createSupportProp('指定 focus 时的光标位置'),
      'selection-start': createSupportProp('获取光标时，选中文本对应的焦点光标起始位置，需要和 selection-end 配合使用'),
      'selection-end': createSupportProp('取光标时，选中文本对应的焦点光标结束位置，需要和 selection-start 配合使用'),
      randomNumber: createSupportProp('当 type 为 number, digit, idcard 数字键盘是否随机排列', 0),
      controlled: createSupportProp('是否为受控组件。为 true 时，value 内容会完全受 setData 控制', 0),
      onInput: createSupportProp('键盘输入时触发 input 事件', 1, 'bindinput'),
      onConfirm: createSupportProp('点击键盘完成时触发', 1, 'bindconfirm'),
      onFocus: createSupportProp('聚焦时触发', 1, 'bindfocus'),
      onBlur: createSupportProp('失去焦点时触发', 1, 'bindblur'),
    },
  },
  Textarea: {
    name: '多行输入框',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#textarea/',
      original: 'https://docs.alipay.com/mini/component/textarea',
    },
    desc: '多行输入框',
    props: {
      name: createSupportProp('组件名字，用于表单提交获取数据'),
      value: createSupportProp('初始内容'),
      placeholder: createSupportProp('占位符'),
      'placeholder-style': createSupportProp('指定 placeholder 的样式'),
      'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
      disabled: createSupportProp('是否禁用'),
      maxlength: createSupportProp('最大长度，当设置为-1时不限制最大长度'),
      focus: createSupportProp('获取焦点'),
      'auto-height': createSupportProp('是否自动增高'),
      'show-count': createSupportProp('是否渲染字数统计功能', 0),
      controlled: createSupportProp('是否为受控组件', 0),
      onInput: createSupportProp('键盘输入时触发 input 事件', 1, 'bindinput'),
      onConfirm: createSupportProp('点击键盘完成时触发', 1, 'bindconfirm'),
      onFocus: createSupportProp('聚焦时触发', 1, 'bindfocus'),
      onBlur: createSupportProp('失去焦点时触发', 1, 'bindblur'),
    },
  },
  radio: {
    name: '单选项目',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#radio/',
      original: 'https://docs.alipay.com/mini/component/radio',
    },
    desc: '单选项目',
    props: {
      value: createSupportProp('初始内容'),
      checked: createSupportProp('当前是否选中'),
      disabled: createSupportProp('是否禁用'),
      color: createSupportProp('radio 的颜色，同 CSS 色值'),
    },
  },
  'radio-group': {
    name: '单项选择器组',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#radio-group/',
      original: 'https://docs.alipay.com/mini/component/radio-group',
    },
    desc: '单选项目',
    props: {
      onChange: createSupportProp('选中项发生变化时触发'),
      name: createSupportProp('组件名字，用于表单提交获取数据'),
    },
  },
  checkbox: {
    name: '多选项目',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#checkbox/',
      original: 'https://docs.alipay.com/mini/component/checkbox',
    },
    desc: '多选项目',
    props: {
      value: createSupportProp('组件值，选中时 change 事件会携带的 value'),
      checked: createSupportProp('当前是否选中，可用来设置默认选中'),
      disabled: createSupportProp('是否禁用'),
      onChange: createSupportProp('组件发生改变时触发', 1, 'bindchange'),
      color: createSupportProp('checkbox 的颜色，同 CSS 色值'),
    },
  },
  'checkbox-group': {
    name: '多选项目',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#checkbox-group/',
      original: 'https://docs.alipay.com/mini/component/checkbox-group',
    },
    desc: '单选项目',
    props: {
      name: createSupportProp('组件名字，用于表单提交获取数据'),
      onChange: createSupportProp('中选中项发生改变时触发', 1, 'bindchange'),
    },
  },
  switch: {
    name: '单选项目',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#switch/',
      original: 'https://docs.alipay.com/mini/component/switch',
    },
    desc: '单选项目',
    props: {
      name: createSupportProp('组件名字，用于表单提交获取数据'),
      checked: createSupportProp('是否选中'),
      disabled: createSupportProp('是否禁用'),
      color: createSupportProp('组件颜色，同 CSS 色值'),
      onChange: createSupportProp('中选中项发生改变时触发', 1, 'bindchange'),
      controlled: createSupportProp('是否为受控组件，为 true 时，checked 会完全受 setData 控制', 0),
    },
  },
  slider: {
    name: '滑动选择器',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#slider/',
      original: 'https://docs.alipay.com/mini/component/slider',
    },
    desc: '滑动选择器',
    props: {
      name: createSupportProp('组件名字，用于表单提交获取数据'),
      min: createSupportProp('最小值'),
      max: createSupportProp('最大值'),
      step: createSupportProp('步长，值必须大于 0，并可被(max - min)整除'),
      disabled: createSupportProp('是否禁用'),
      value: createSupportProp('当前取值'),
      'show-value': createSupportProp('是否显示当前 value'),
      'active-color': createSupportProp('已选择的颜色，同 CSS 色值'),
      'background-color': createSupportProp('背景条颜色，同 CSS 色值'),
      'track-size': createSupportProp('轨道线条高度'),
      'handle-size': createSupportProp('滑块大小'),
      'handle-color': createSupportProp('滑块填充色，同 CSS 色值'),
      onChange: createSupportProp('完成一次拖动后触发', 1, 'bindchange'),
      onChanging: createSupportProp('拖动过程中触发的事件', 1, 'bindchanging'),
          
    },
  },
  'picker-view': {
    name: '滚动选择器',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#picker-view/',
      original: 'https://docs.alipay.com/mini/component/picker-view',
    },
    desc: '嵌入页面的滚动选择器。 其中只可放置 <picker-view-column /> 组件，其它节点不会显示。',
    props: {
      value: createSupportProp('数字表示 picker-view-column 中对应的 index （从 0 开始）'),
      'indicator-style': createSupportProp('选中框样式'),
      'indicator-class': createSupportProp('选中框的类名'),
      'mask-style': createSupportProp('蒙层的样式'),
      'mask-class': createSupportProp('蒙层的样式'),
      onChange: createSupportProp('滚动选择 value 改变时触发', 1, 'bindchange'),
    },
  },
  'picker-view-column': {
    name: '滚动选择器子项',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#picker-view-column/',
      original: 'https://docs.alipay.com/mini/component/picker-view-column',
    },
    desc: '滚动选择器子项。仅可放置于 picker-view 中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致 ',
      
  },
  picker: {
    name: '底部弹起的滚动选择器',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/formlist/#picker-view-column/',
      original: 'https://docs.alipay.com/mini/component/picker-view-column',
    },
    desc: '从底部弹起的滚动选择器',
    props: {
      range: createSupportProp('String[] 时表示可选择的字符串列表；Object[] 时需指定 range-key 表示可选择的字段'),
      'range-key': createSupportProp('当 range 是一个 Object[] 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容'),
      value: createSupportProp('表示选择了 range 中的第几个（下标从 0 开始）'),
      onChange: createSupportProp('value 改变时触发', 1, 'bindchange'),
      disabled: createSupportProp('是否禁用'),
    },
  },
}
