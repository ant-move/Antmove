const Config = require('../../config.js')

const customComponentPrefix = Config.library.customComponentPrefix

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
  modal: {
    type: 5,
    name: '模态弹窗',
    url: {
      original: 'http://www.ionic.wang/weixin/component/modal.html',
      target: '',
    },
    desc: '模态弹窗。',
    tagName: 'custom-modal',
    path: `${customComponentPrefix}/__component/custom-modal/custom-modal`,
    props: {
      title: {
        type: 0,
        status: 2,
        desc: '标题',
      },
      'no-cancel': {
        type: 0,
        status: 2,
        desc: '是否隐藏 cancel 按钮',
      },
      'confirm-text': {
        type: 0,
        status: 2,
        desc: 'confirm 按钮文字',
      },
      'cancel-text': {
        type: 0,
        status: 2,
        desc: 'cancel 按钮文字',
      },
    },
  },
  toast: {
    type: 5,
    name: '消息提示框',
    url: {
      original: 'http://www.ionic.wang/weixin/component/toast.html',
      target: '',
    },
    desc: '消息提示框。',
    tagName: 'custom-toast',
    path: `${customComponentPrefix}/__component/custom-toast/custom-toast`,
    props: {
      duration: {
        type: 0,
        status: 2,
        desc: 'hidden 设置 false 后，触发 bindchange 的延时，单位毫秒',
      },
    },
  },
  loading: {
    type: 5,
    name: '加载提示',
    url: {
      original: 'http://www.ionic.wang/weixin/component/loading.html',
      target: '',
    },
    desc: '加载提示。',
    tagName: 'custom-loading',
    path: `${customComponentPrefix}/__component/custom-loading/custom-loading`,
  },
  'action-sheet': {
    type: 5,
    name: '从屏幕底部出现的菜单表',
    url: {
      original: 'http://www.ionic.wang/weixin/component/action-sheet.html',
      target: '',
    },
    desc: '从屏幕底部出现的菜单表。',
    tagName: 'custom-action-sheet',
    path: `${customComponentPrefix}/__component/custom-action-sheet/custom-action-sheet`,
       
  },
  'action-sheet-item': {
    type: 5,
    name: '底部菜单表的子选项',
    url: {
      original: 'http://www.ionic.wang/weixin/component/action-sheet.html',
      target: '',
    },
    desc: '底部菜单表的子选项。',
    tagName: 'action-sheet-item',
    path: `${customComponentPrefix}/__component/action-sheet-item/action-sheet-item`,
  },
  'action-sheet-cancel': {
    type: 5,
    name: '底部菜单表的取消按钮',
    url: {
      original: 'http://www.ionic.wang/weixin/component/action-sheet.html',
      target: '',
    },
    desc: '底部菜单表的取消按钮，和action-sheet-item的区别是，点击它会触发action-sheet的change事件，并且外观上会同它上面的内容间隔开来。',
    tagName: 'action-sheet-cancel',
    path: `${customComponentPrefix}/__component/action-sheet-cancel/action-sheet-cancel`,
  },
}
