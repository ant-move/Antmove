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
  text: {
    name: '文本',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/base/#text/',
      original: 'https://docs.alipay.com/mini/component/text',
    },
    desc: '文本',
    props: {
      selectable: createSupportProp('是否可选'),
      space: createSupportProp('以何种方式显示连续空格'),
      decode: createSupportProp('是否解码', 0),
      'number-of-lines': createSupportProp('多行省略，值须大于等于1，表现同 css 的 -webkit-line-clamp 属性一致', 0),
    },
  },
  icon: {
    name: '图标',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/base/#icon/',
      original: 'https://docs.alipay.com/mini/component/icon',
    },
    desc: '图标',
    props: {
      type: createSupportProp('缺少loading取值', 1),
      size: createSupportProp('以何种方式显示连续空格'),
      color: createSupportProp('是否解码'),
      'number-of-lines': createSupportProp('多行省略，值须大于等于1，表现同 css 的 -webkit-line-clamp 属性一致', 0),
    },
  },
  progress: {
    name: '进度条',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/base/#progress/',
      original: 'https://docs.alipay.com/mini/component/progress',
    },
    desc: '进度条',
    props: {
      percent: createSupportProp('百分比(0~100)'),
      'show-info': createSupportProp('在右侧显示百分比值'),
      'stroke-width': createSupportProp('线的粗细，单位 px'),
      'active-color': createSupportProp('已选择的进度条颜色', 1, 'activeColor'),
      'background-color': createSupportProp('未选择的进度条颜色', 1, 'backgroundColor'),
      active: createSupportProp('从左往右是否进行加载动画'),
    },
  },
  'rich-text': {
    name: '富文本',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/base/#rich-text/',
      original: 'https://docs.alipay.com/mini/component/rich-text',
    },
    desc: '富文本',
    props: {
      nodes: {
        type: 7,
        status: 0,
        desc: '节点列表',
        props: {
          type: createSupportProp('默认值为 node'),
          name: createSupportProp('支持部分受信任的 HTML 节点'),
          attrs: createSupportProp('支持部分受信任的属性，遵循 Pascal 命名法'),
          children: createSupportProp('结构和 nodes 相同'),
          className: createSupportProp('已选择的进度条颜色', 1, 'class'),
        },
      },
    },
  },
  'custom-rich-text': {
    name: '富文本',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/base/#rich-text/',
      original: 'https://docs.alipay.com/mini/component/rich-text',
    },
    desc: '富文本',
    type: 5,
    tagName: 'custom-rich-text',
    path: '/component/custom-rich-text/custom-rich-text',
    nodes: {
      type: 7,
      status: 0,
      desc: '节点列表',
      props: {
        type: createSupportProp('默认值为 node'),
        name: createSupportProp('支持部分受信任的 HTML 节点'),
        attrs: createSupportProp('支持部分受信任的属性，遵循 Pascal 命名法'),
        children: createSupportProp('结构和 nodes 相同'),
                
      },
    },
    space: createSupportProp('暂不支持显示连续空格', 0),
    className: createSupportProp('已选择的进度条颜色', 1, 'class'),
  },
  'import-sjs': {
    name: '引用自定义脚本文件',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/framework/view_filter/',
      original: 'https://docs.alipay.com/mini/framework/sjs',
    },
    desc: "引用自定义脚本文件 (百度端比较严格，函数形参不可以是'val'，moddle必须是对象形式)",
    props: {
      name: createSupportProp(' 标签的模块名', 1, 'module'),
      from: createSupportProp(' 标签的模块名', 1, 'src'),
    },

  },
  favorite: {
    name: '收藏组件',
    url: {
      target: '',
      original: '',
    },
    desc: '收藏组件，提醒用户使用收藏功能',
    status: 2,
    type: 0,
  },
}
