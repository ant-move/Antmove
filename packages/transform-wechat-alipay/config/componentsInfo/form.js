const { createSupportProp } = require('./utils.js');
const Config = require('../../config.js');
const customComponentPrefix = Config.library.customComponentPrefix;
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
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html',
            alipay: 'https://docs.alipay.com/mini/component/checkbox'
        },
        desc: '多项选择器，内部由多个checkbox组成。',
        props: {
            'bindchange': {
                type: 1,
                status: 0,
                desc: 'checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}',
                key: 'onChange',
            }
        }
    },
    'form': {
        name: '表单',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
            alipay: 'https://docs.alipay.com/mini/component/form'
        },
        desc: '将组件内的用户输入的switch input checkbox slider radio picker 提交。当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。',
        props: {
            'report-submit': createSupportProp('是否返回 formId 用于发送模板消息'),
            'bindsubmit': {
                type: 1,
                status: 0,
                desc: "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}",
                key: 'onSubmit',
            },
            'bindreset': {
                type: 1,
                status: 0,
                desc: '表单重置时会触发 reset 事件',
                key: 'onReset',
            },
            'report-submit-timeout': {
                type: 0,
                status: 2,
                desc: '等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId',
            }
        }
    },
    'input': {
        name: '输入框',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
            alipay: 'https://docs.alipay.com/mini/component/input'
        },
        desc: '该组件是原生组件，使用时请注意相关限制',
        props: {
            'value': createSupportProp('输入框的初始内容'),
            'type': createSupportProp('input 的类型'),
            'password': createSupportProp('是否是密码类型'),
            'placeholder': createSupportProp('输入框为空时占位符'),
            'placeholder-style': createSupportProp('指定 placeholder 的样式'),
            'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
            'disabled': createSupportProp('是否禁用'),
            'maxlength': createSupportProp('最大输入长度，设置为 -1 的时候不限制最大长度'),
            'cursor-spacing': {
                type: 0,
                status: 2,
                desc: '指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离',
            },
            'auto-focus': {
                type: 3,
                status: 0,
                desc: '(即将废弃，请直接使用 focus )自动聚焦，拉起键盘',
                key: 'focus',
            },
            'focus': createSupportProp('获取焦点'),
            'confirm-type': createSupportProp("设置键盘右下角按钮的文字，仅在type='text'时生效"),
            'confirm-hold': createSupportProp('点击键盘右下角按钮时是否保持键盘不收起'),
            'cursor': createSupportProp('指定focus时的光标位置'),
            'selection-start': createSupportProp('光标起始位置，自动聚集时有效，需与selection-end搭配使用'),
            'selection-end': createSupportProp('光标结束位置，自动聚集时有效，需与selection-start搭配使用'),
            'adjust-position': {
                type: 0,
                status: 2,
                desc: '键盘弹起时，是否自动上推页面',
            },
            'bindinput': {
                type: 1,
                status: 0,
                desc: '键盘输入时触发',
                key: 'onInput',
            },
            'bindfocus': {
                type: 1,
                status: 0,
                desc: '输入框聚焦时触发',
                key: 'onFocus',
            },
            'bindblur': {
                type: 1,
                status: 0,
                desc: '输入框失去焦点时触发',
                key: 'onBlur',
            },
            'bindconfirm': {
                type: 1,
                status: 0,
                desc: '点击完成按钮时触发',
                key: 'onConfirm',
            },
            'bindkeyboardheightchange': {
                type: 0,
                status: 2,
                desc: '键盘高度发生变化的时候触发此事件',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
        }
    },
    'picker': {
        name: '从底部弹起的滚动选择器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
            alipay: 'https://docs.alipay.com/mini/component/picker'
        },
        desc: '从底部弹起的滚动选择器。',
        props: {
            'mode': createSupportProp('选择器类型'),
            'bindchange': {
                type: 1,
                status: 0,
                desc: '发生改变时触发',
                key: 'onChange',
            },
            'bindcancel': {
                type: 0,
                status: 2,
                desc: '取消选择时触发',
            }
        }
    },
    'picker-view': {
        name: '嵌入页面的滚动选择器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
            alipay: 'https://docs.alipay.com/mini/component/picker-view'
        },
        desc: '其中只可放置 picker-view-column组件，其它节点不会显示。',
        props: {
            'value': createSupportProp('数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。'),
            'indicator-style': createSupportProp('设置选择器中间选中框的样式'),
            'indicator-class': createSupportProp('设置选择器中间选中框的类名'),
            'mask-style': createSupportProp('设置蒙层的样式'),
            'mask-class': createSupportProp('设置蒙层的类名'),
            'bindchange': {
                type: 1,
                status: 0,
                desc: '滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）',
                key: 'onChange',
            },
            'bindpickstart': {
                type: 0,
                status: 2,
                desc: '当滚动选择开始时候触发事件',
            },
            'bindpickend': {
                type: 0,
                status: 2,
                desc: '当滚动选择结束时候触发事件',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
        }
    },
    'radio': {
        name: '单选项目',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
            alipay: 'https://docs.alipay.com/mini/component/radio'
        },
        desc: '单选项目。',
        props: {
            'value': createSupportProp('radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value'),
            'checked': createSupportProp('当前是否选中'),
            'disabled': createSupportProp('是否禁用'),
            'color': createSupportProp('radio的颜色，同css的color'),
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
        }
    },
    'radio-group': {
        name: '单项选择器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html',
            alipay: 'https://docs.alipay.com/mini/component/radio-group'
        },
        desc: '单项选择器，内部由多个 radio 组成。',
        props: {
            'bindchange': {
                type: 1,
                status: 0,
                desc: '选中项发生变化时触发，event.detail = {value: 选中项radio的value}',
                key: 'onChange',
            }
        }
    },
    'slider': {
        name: '滑动选择器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
            alipay: 'https://docs.alipay.com/mini/component/slider'
        },
        desc: '滑动选择器。',
        props: {
            'min': createSupportProp('最小值'),
            'max': createSupportProp('最大值'),
            'step': createSupportProp('步长，值必须大于 0，并可被(max - min)整除'),
            'disabled': createSupportProp('是否禁用'),
            'value': createSupportProp('当前取值'),
            'color': {
                type: 3,
                status: 0,
                desc: '背景条的颜色',
                key: 'background-color',
            },
            'selected-color': {
                type: 3,
                status: 0,
                desc: '已选择的颜色',
                key: 'active-color',
            },
            'show-value': createSupportProp('是否显示当前 value'),
            'bindchange': {
                type: 1,
                status: 0,
                desc: '完成一次拖动后触发的事件',
                key: 'onChange',
            },
            'backgroundColor': {
                type: 1,
                status: 0,
                desc: '背景条的颜色',
                key: 'background-color',
            },
            'activeColor': {
                type: 1,
                status: 0,
                desc: '已选择的颜色',
                key: 'active-color',
            },
            'block-size': {
                type: 1,
                status: 0,
                desc: '滑块的大小，取值范围为 12 - 28',
                key: 'handle-size',
            },
            'block-color': {
                type: 1,
                status: 0,
                desc: '滑块的颜色',
                key: 'handle-color',
            },
            'bindchanging': {
                type: 1,
                status: 0,
                desc: '拖动过程中触发的事件',
                key: 'onChanging',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
        }
    },
    'switch': {
        name: '开关选择器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
            alipay: 'https://docs.alipay.com/mini/component/switch'
        },
        desc: '开关选择器。',
        props: {
            'checked': createSupportProp('是否选中'),
            'disabled': createSupportProp('是否禁用'),
            'bindchange': {
                type: 1,
                status: 0,
                desc: 'checked 改变时触发 change 事件，event.detail={ value}',
                key: 'onChange',
            },
            'type': {
                type: 0,
                status: 2,
                desc: '样式，有效值：switch, checkbox',
            },
            'color': createSupportProp('switch 的颜色，同 css 的 color'),
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
        }
    },
    'textarea': {
        name: '多行输入框',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
            alipay: 'https://docs.alipay.com/mini/component/textarea'
        },
        desc: '该组件是原生组件，使用时请注意相关限制。',
        props: {
            'value': createSupportProp('输入框的内容'),
            'placeholder': createSupportProp('占位符'),
            'placeholder-style': createSupportProp('指定 placeholder 的样式'),
            'placeholder-class': createSupportProp('指定 placeholder 的样式类'),
            'disabled': createSupportProp('是否禁用'),
            'maxlength': createSupportProp('最大长度，当设置为-1时不限制最大长度'),
            'auto-focus': {
                type: 0,
                status: 2,
                desc: '自动聚焦，拉起键盘',
            },
            'focus': createSupportProp('获取焦点'),
            'auto-height': createSupportProp('是否自动增高，设置auto-height时，style.height不生效'),
            'fixed': {
                type: 0,
                status: 2,
                desc: '如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true',
            },
            'cursor-spacing': {
                type: 0,
                status: 2,
                desc: '指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离',
            },
            'cursor': {
                type: 0,
                status: 2,
                desc: '指定focus时的光标位置',
            },
            'show-confirm-bar': {
                type: 0,
                status: 2,
                desc: '是否显示键盘上方带有”完成“按钮那一栏',
            },
            'selection-start': {
                type: 0,
                status: 2,
                desc: '光标起始位置，自动聚集时有效，需与selection-end搭配使用',
            },
            'selection-end': {
                type: 0,
                status: 2,
                desc: '光标结束位置，自动聚集时有效，需与selection-start搭配使用',
            },
            'adjust-position': {
                type: 0,
                status: 2,
                desc: '键盘弹起时，是否自动上推页面',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            },
            'bindlinechange': {
                type: 0,
                status: 2,
                desc: '输入框行数变化时调用',
            },
            'bindfocus': {
                type: 1,
                status: 0,
                desc: '输入框聚焦时触发',
                key: 'onFocus',
            },
            'bindblur': {
                type: 1,
                status: 0,
                desc: '输入框失去焦点时触发',
                key: 'onBlur',
            },
            'bindconfirm': {
                type: 1,
                status: 0,
                desc: '点击完成时， 触发 confirm 事件，event.detail = {value: value}',
                key: 'onConfirm',
            },
            'bindinput': {
                type: 1,
                status: 0,
                desc: '当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。bindinput 处理函数的返回值并不会反映到 textarea 上',
                key: 'onInput',
            },
            'bindkeyboardheightchange': {
                type: 0,
                status: 2,
                desc: '键盘高度发生变化的时候触发此事件',
            }
        }
    },
    'button': {
        type: 5,
        name: '按钮',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
            alipay: 'https://docs.alipay.com/mini/component/button'
        },
        desc: '按钮',
        tagName: 'btn',
        path: customComponentPrefix + '/__component/btn/btn',
        props: {
            'size': createSupportProp('按钮的大小'),
            'type': createSupportProp('按钮的样式类型'),
            'plain': createSupportProp('按钮是否镂空，背景色透明'),
            'disabled': createSupportProp('是否禁用'),
            'loading': createSupportProp('名称前是否带 loading 图标'),
            'form-type': createSupportProp('用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件'),
            'open-type': {
                type: 3,
                status: 1,
                desc: '微信开放能力',
                props: {
                    'contact': {
                        type: 0,
                        status: 2,
                        desc: '打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，具体说明',
                    },
                    'share': createSupportProp('触发用户转发，使用前建议先阅读使用指引'),
                    'getPhoneNumber': {
                        type: 0,
                        status: 2,
                        desc: '获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，具体说明',
                    },
                    'getUserInfo': {
                        type: 0,
                        status: 2,
                        desc: '获取用户信息，可以从bindgetuserinfo回调中获取到用户信息',
                    },
                    'launchApp': {
                        type: 0,
                        status: 2,
                        desc: '打开APP，可以通过app-parameter属性设定向APP传的参数具体说明',
                    },
                    'openSetting': {
                        type: 0,
                        status: 2,
                        desc: '打开授权设置页',
                    },
                    'feedback': {
                        type: 0,
                        status: 2,
                        desc: '打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容',
                    }
                }
            },
            'hover-class': createSupportProp('指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果'),
            'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态'),
            'hover-start-time': createSupportProp('按住后多久出现点击态，单位毫秒'),
            'hover-stay-time': createSupportProp('手指松开后点击态保留时间，单位毫秒'),
            'lang': {
                type: 0,
                status: 2,
                desc: '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。',
            },
            'session-from': {
                type: 0,
                status: 2,
                desc: '会话来源，open-type="contact"时有效',
            },
            'send-message-title': {
                type: 0,
                status: 2,
                desc: '会话内消息卡片标题，open-type="contact"时有效',
            },
            'send-message-path': {
                type: 0,
                status: 2,
                desc: '会话内消息卡片点击跳转小程序路径，open-type="contact"时有效',
            },
            'send-message-img': {
                type: 0,
                status: 2,
                desc: '会话内消息卡片图片，open-type="contact"时有效',
            },
            'app-parameter': createSupportProp('打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效'),
            'show-message-card': {
                type: 0,
                status: 2,
                desc: '是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效',
            },
            'bindgetuserinfo': {
                type: 1,
                status: 0,
                desc: '用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效',
                key: 'onGetuserInfo',
            },
            'bindcontact': {
                type: 0,
                status: 2,
                desc: '客服消息回调，open-type="contact"时有效',
            },
            'bindgetphonenumber': {
                type: 1,
                status: 0,
                desc: '获取用户手机号回调，open-type=getPhoneNumber时有效',
                key: 'onGetPhoneNumber',
            },
            'binderror': {
                type: 0,
                status: 2,
                desc: '当使用开放能力时，发生错误的回调，open-type=launchApp时有效',
            },
            'bindopensetting': {
                type: 1,
                status: 0,
                desc: '在打开授权设置页后回调，open-type=openSetting时有效',
                key: 'onOpenSetting',
            },
            'bindlaunchapp': {
                type: 0,
                status: 2,
                desc: '打开 APP 成功的回调，open-type=launchApp时有效',
            },
            'catchtap': {
                type: 1,
                status: 0,
                desc: 'diff',
                key: 'onCatchTap',
            } 
        }
    },
    'editor': {
        name: '富文本编辑器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
            alipay: ''
        },
        type: 0,
        status: 2,
        desc: '富文本编辑器，可以对图片、文字进行编辑',
    }
};