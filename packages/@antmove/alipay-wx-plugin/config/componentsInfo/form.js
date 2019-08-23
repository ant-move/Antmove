const { createSupportProp } = require('./utils.js');
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
    'button': {
        name: '按钮',
        url: {
            original: 'https://docs.alipay.com/mini/component/button',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html'
        },
        desc: '按钮',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'size': createSupportProp('按钮的大小,有效值 default, mini'),
            'type': createSupportProp('按钮的样式类型，有效值 primary, default, warn'),
            'plain': createSupportProp('按钮是否镂空'),
            'disabled': createSupportProp('是否禁用'),
            'loading': createSupportProp('名称前是否带 loading 图标'),
            'hover-class': createSupportProp('指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果'),
            'hover-start-time': createSupportProp('按住后多少事件后出现点击状态，单位毫秒'),
            'hover-stay-time': createSupportProp('手指松开后点击状态保留时间，单位毫秒'),
            'hover-stop-propagation': createSupportProp('是否阻止当前元素的祖先元素出现点击态'),
            'form-type': createSupportProp('有效值：submit, reset，用于 form 组件，点击分别会触发 submit/reset 事件'),
            'open-type': {
                type: 3,
                status: 1,
                desc: '开放能力',
                props: {
                    'share': createSupportProp('触发用户转发，使用前建议先阅读使用指引'),
                    'getAuthorize': {
                        type: 0,
                        status: 2,
                        desc: '支持小程序授权',
                    },
                    'contactShare': {
                        type: 0,
                        status: 2,
                        desc: '分享到通讯录好友',
                    },
                    'lifestyle': {
                        type: 0,
                        status: 2,
                        desc: '关注生活号',
                    }
                }
            },
            'scope': {
                type: 0,
                status: 2,
                desc: '当 open-type 为 getAuthorize 时有效',
                props: {
                    'phoneNumber': {
                        type: 0,
                        status: 2,
                        desc: '唤起授权界面，用户可以授权小程序获取用户手机号'
                    }
                }
            },
            'onTap': {
                type: 1,
                status: 0,
                desc: '点击',
                key: 'bindtap'
            },
            'app-parameter': createSupportProp('打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效'),
            'public-id': {
                type: 0,
                status: 2,
                desc: '生活号 id, 必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效'
            }
        }
    },
    'form': {
        name: '表单',
        url: {
            original: 'https://docs.alipay.com/mini/component/form',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html'   
        },
        desc: '用于将组件内的用户输入的 textarea、 switch、 input 、checkbox、slider、radio、picke 等组件提交',
        props: {
            'report-submit': createSupportProp('onSubmit 回调是否返回 formId，用于发送 模板消息'),
            'onSubmit': {
                type: 1,
                status: 0,
                desc: "携带 form 中的数据触发 submit 事件，event.detail = {value : {'slider': '80'}, buttonTarget: {'dataset': 'buttonDataset'} }",
                key: 'bindsubmit',
            },
            'onReset': {
                type: 1,
                status: 0,
                desc: '表单重置时会触发 reset 事件',
                key: 'bindreset',
            }
        }
    },
    'label': {
        name: '用于改进表单组件的可用性',
        url: {
            original: 'https://docs.alipay.com/mini/component/label',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/label.html'
        },
        desc: '使用 for 属性找到对应组件的 id，或者将组件放在该标签下。当点击时，就会聚焦对应的组件。for 优先级高于内部组件，内部有多个组件的时候默认触发第一个组件',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'for': createSupportProp('绑定组件的 id')
        }
    },
    'input': {
        name: '输入框',
        url: {
            original: 'https://docs.alipay.com/mini/component/input',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
        },
        desc: '输入框',
        props: {
            'value': createSupportProp('初始内容'),
            'name': createSupportProp("组件名字，用于表单提交获取数据"),
            'type': {
                name: 'input 的类型',
                type: 1,
                status: 1,
                desc: 'input 的类型',
                props: {
                    text: createSupportProp('文本输入键盘'),
                    number: createSupportProp('数字输入键盘'),
                    idcard: createSupportProp('身份证输入键盘'),
                    digit: createSupportProp('带小数点的数字键盘'),
                    numberpad: {
                        type: 0,
                        status: 2
                    },
                    digitpad: {
                        type: 0,
                        status: 2
                    },
                    idcardpad: {
                        type: 0,
                        status: 2
                    },
                }
            },
            'password': createSupportProp('是否是密码类型'),
            'placeholder': createSupportProp('占位符'),
            'placeholder-style': createSupportProp('指定 placeholder 的样式'),
            'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
            'disabled': createSupportProp('是否禁用'),
            'maxlength': createSupportProp('最大输入长度'),
            'focus': createSupportProp('获取焦点'),
            'confirm-type': createSupportProp("设置键盘右下角按钮的文字，仅在type='text'时生效"),
            'confirm-hold': createSupportProp('点击键盘右下角按钮时是否保持键盘不收起状态'),
            'cursor': createSupportProp('指定focus时的光标位置'),
            'selection-start': createSupportProp('光标起始位置，自动聚集时有效，需与selection-end搭配使用'),
            'selection-end': createSupportProp('光标结束位置，自动聚集时有效，需与selection-start搭配使用'),
            'randomNumber': {
                type: 0,
                status: 2,
                desc: '当 type 为 number, digit, idcard 数字键盘是否随机排列'
            },
            'controlled': {
                type: 0,
                status: 2,
                desc: '是否为受控组件。为 true 时，value 内容会完全受 setData 控制'
            },
            'onInput': {
                type: 1,
                status: 0,
                desc: '键盘输入时触发 input 事件，event.detail = {value: value}',
                key: 'bindinput',
            },
            'onConfirm': {
                type: 1,
                status: 0,
                desc: '点击键盘完成时触发，event.detail = {value: value}',
                key: 'bindconfirm',
            },
            'onFocus': {
                type: 1,
                status: 0,
                desc: '聚焦时触发，event.detail = {value: value}',
                key: 'bindfocus',
            },
            'onBlur': {
                type: 1,
                status: 0,
                desc: '失去焦点时触发，event.detail = {value: value}',
                key: 'bindblur',
            }
        }
    },
    'textarea': {
        name: '多行输入框',
        url: {
            original: 'https://docs.alipay.com/mini/component/textarea',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html'
        },
        desc: '多行输入框',
        props: {
            'name': createSupportProp("组件名字，用于表单提交获取数据"),
            'value': createSupportProp('输入框的内容'),
            'placeholder': createSupportProp('占位符'),
            'placeholder-style': createSupportProp('指定 placeholder 的样式'),
            'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
            'disabled': createSupportProp('是否禁用'),
            'maxlength': createSupportProp('最大长度，当设置为-1时不限制最大长度'),
            'focus': createSupportProp('获取焦点'),
            'auto-height': createSupportProp('是否自动增高'),
            'show-count': {
                type: 0,
                status: 2,
                desc: '是否渲染字数统计功能'
            },
            'controlled': {
                type: 0,
                status: 2,
                desc: '是否为受控组件。为 true 时，value 内容会完全受 setData 控制'
            },
            'onInput': {
                type: 1,
                status: 0,
                desc: '键盘输入时触发，event.detail = {value: value}，可以直接 return 一个字符串以替换输入框的内容',
                key: 'bindinput',
            },
            'onFocus': {
                type: 1,
                status: 0,
                desc: '输入框聚焦时触发 event.detail = {value: value}',
                key: 'bindfocus',
            },
            'onBlur': {
                type: 1,
                status: 0,
                desc: '输入框失去焦点时触发，event.detail = {value: value}',
                key: 'onBlur',
            },
            'onConfirm': {
                type: 1,
                status: 0,
                desc: '点击完成时触发，event.detail = {value: value}',
                key: 'bindconfirm',
            },
            
        }
    },
    'radio': {
        name: '单选项目',
        url: {
            original: 'https://docs.alipay.com/mini/component/radio',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html'
        },
        desc: '单选项目。',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'value': createSupportProp('组件值，选中时 change 事件会携带的 value'),
            'checked': createSupportProp('当前是否选中'),
            'disabled': createSupportProp('是否禁用'),
            'color': createSupportProp('radio 的颜色，同 CSS 色值')
        }
    },
    'radio-group': {
        name: '单项选择器组',
        url: {
            original: 'https://docs.alipay.com/mini/component/radio-group',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html'
        },
        desc: '单项选择器组，内部由多个 radio  组成',
        props: {
            'name': createSupportProp("组件名字，用于表单提交获取数据"),
            'onChange': {
                type: 1,
                status: 0,
                desc: '选中项发生变化时触发，event.detail = {value: 选中项radio的value}',
                key: 'bindchange',
            }
        }
    },
    'checkbox': {
        name: '多选项目',
        url: {
            original: 'https://docs.alipay.com/mini/component/checkbox',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html'
        },
        desc: '多选项目',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'value': createSupportProp('组件值，选中时 change 事件会携带的 value'),
            'checked': createSupportProp('当前是否选中，可用来设置默认选中'),
            'disabled': createSupportProp('是否禁用'),
            'onChange': {
                type: 1,
                status: 0,
                desc: '组件发生改变时触发，detail = {value: 该 checkbox 是否 checked }'
            },
            'color': createSupportProp('checkbox 的颜色，同 CSS 色值')
        }
    },
    'checkbox-group': {
        name: '多项选择器组',
        url: {
            original: 'https://docs.alipay.com/mini/component/checkbox-group',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html'
        },
        desc: '多项选择器，内部由多个checkbox组成',
        props: {
            'name': createSupportProp("组件名字，用于表单提交获取数据"),
            'onChange': {
                type: 1,
                status: 0,
                desc: 'checkbox-group中选中选中项发生改变时触发， detail = {value: 选中的 checkbox 项 value 的值}}',
                key: 'bindchange',
            }
        }
    },
    'switch': {
        name: '单选项目',
        url: {
            original: 'https://docs.alipay.com/mini/component/switch',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html'
        },
        desc: '单选项目',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'name': createSupportProp("组件名字，用于表单提交获取数据"),
            'checked': createSupportProp('是否选中'),
            'disabled': createSupportProp('是否禁用'),
            'color': createSupportProp('组件颜色，同 CSS 色值'),
            'onChange': {
                type: 1,
                status: 0,
                desc: '	checked 改变时触发，event.detail={ value:checked}',
                key: 'bindchange',
            },
            'controlled': {
                type: 0,
                status: 2,
                desc: '是否为受控组件，为 true 时，checked 会完全受 setData 控制',
            }
        }
    },
    'slider': {
        name: '滑动选择器',
        url: {
            original: 'https://docs.alipay.com/mini/component/slider',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html'
        },
        desc: '滑动选择器',
        props: {
            'name': createSupportProp("组件名字，用于表单提交获取数据"),
            'min': createSupportProp('最小值'),
            'max': createSupportProp('最大值'),
            'step': createSupportProp('步长，值必须大于 0，并可被(max - min)整除'),
            'disabled': createSupportProp('是否禁用'),
            'value': createSupportProp('当前取值'),
            'show-value': createSupportProp('是否显示当前 value'),
            'active-color': {
                type: 1,
                status: 0,
                desc: '已选择的颜色',
                key: 'activeColor',
            },
            'track-size': {
                type: 0,
                status: 2,
                desc: '轨道线条高度'
            },
            'background-color': {
                type: 1,
                status: 0,
                desc: '背景条的颜色',
                key: 'backgroundColor',
            },
            'handle-size': {
                type: 1,
                status: 0,
                desc: '滑块大小,默认22',
                key: 'block-size',
            },
            'handle-color': {
                type: 1,
                status: 0,
                desc: '滑块填充色，同 CSS 色值',
                key: 'block-color',
            },
            'onChange': {
                type: 1,
                status: 0,
                desc: '	完成一次拖动后触发，event.detail = {value: value}',
                key: 'bindchange',
            },
            'onChanging': {
                type: 1,
                status: 0,
                desc: '拖动过程中触发的事件，event.detail = {value: value}',
                key: 'bindchanging',
            }
        }
    },
    'picker-view': {
        name: '嵌入页面的滚动选择器',
        url: {
            original: 'https://docs.alipay.com/mini/component/picker-view',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html'
        },
        desc: '其中只可放置 picker-view-column组件，其它节点不会显示。',
        props: {
            'value': createSupportProp('数字表示 picker-view-column 中对应的 index （从 0 开始）'),
            'indicator-style': createSupportProp('选中框样式'),
            'indicator-class': createSupportProp('选中框的类名'),
            'mask-style': createSupportProp('蒙层的样式'),
            'mask-class': createSupportProp('蒙层的类名'),
            'onChange': {
                type: 1,
                status: 0,
                desc: '滚动选择 value 改变时触发，event.detail = {value: value} value为数组，表示 picker-view 内的 picker-view-column index 索引 ,从 0 开始',
                key: 'bindchange',
            }
        }
    },
    'picker-view-column': {
        name: '滚动选择器子项',
        url: {
            original: 'https://docs.alipay.com/mini/component/picker-view-column',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html'
        },
        desc: '仅可放置于 picker-view 中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致' 
    },
    'picker': {
        name: '从底部弹起的滚动选择器',
        url: {
            original: 'https://docs.alipay.com/mini/component/picker',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html'
        },
        desc: '从底部弹起的滚动选择器',
        props: {
            'range': createSupportProp('String[] 时表示可选择的字符串列表；Object[] 时需指定 range-key 表示可选择的字段'),
            'range-key': createSupportProp('当 range 是一个 Object[] 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容'),
            'value': createSupportProp('表示选择了 range 中的第几个（下标从 0 开始）'),
            'onChange': {
                type: 1,
                status: 0,
                desc: '发生改变时触发',
                key: 'bindchange',
            },
            'disabled': createSupportProp('是否禁用')
        }
    }
};