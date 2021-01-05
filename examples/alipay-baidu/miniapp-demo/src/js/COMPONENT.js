/*
* 常量定义
* 说明：
*   titleEn以标签被使用时的名字定义。readme.md也以titleEn的值命名
*   每个文件内最后的js文件是index.js
* */
// 默认是对外的接口
const COMPONENT = {
  tabs: [
    {
      title: '基础组件',
      titleEn: 'basic',
      categories: [
        {
          title: '容器组件',
          titleEn: 'container',
          list: [
            {
              title: '基础视图',
              thumb: '/image/icon/view.png',
              titleEn: 'view',
              path: '/pages/framework/component/view/index',
            },
            {
              title: '滚动视图',
              thumb: '/image/icon/scroll-view.png',
              titleEn: 'scrollView',
              path: '/pages/framework/component/scrollView/index',
            },
            {
              title: '滑动视图',
              thumb: '/image/icon/swiper.png',
              titleEn: 'swiper',
              path: '/pages/framework/component/swiper/index',
            },
            {
              title: '可移动视图',
              thumb: '/image/icon/movable-view.png',
              titleEn: 'movableView',
              path: '/pages/framework/component/movableView/index',
            },
            {
              title: '原生视图',
              thumb: '/image/icon/cover-view.png',
              titleEn: 'coverView',
              path: '/pages/framework/component/coverView/index',
            },
          ],
        },
        {
          title: '基础内容',
          titleEn: 'basicContent',
          list: [
            {
              title: '文字',
              thumb: '/image/icon/text.png',
              titleEn: 'text',
              path: '/pages/framework/component/text/index',
            },
            {
              title: '图标',
              thumb: '/image/icon/icon.png',
              titleEn: 'icon',
              path: '/pages/framework/component/icon/index',
            },
            {
              title: '进度条',
              thumb: '/image/icon/progress.png',
              titleEn: 'progress',
              path: '/pages/framework/component/progress/index',
            },
            {
              title: '富文本',
              thumb: '/image/icon/form.png',
              titleEn: 'richText',
              path: '/pages/framework/component/richText/index',
            },
          ],
        },
        {
          title: '表单',
          titleEn: 'form',
          list: [
            {
              title: '按钮',
              thumb: '/image/icon/button.png',
              titleEn: 'button',
              path: '/pages/framework/component/button/index',
            },
            {
              title: '表单',
              thumb: '/image/icon/form.png',
              titleEn: 'form',
              path: '/pages/framework/component/form/index',
            },
            {
              title: '标签',
              thumb: '/image/icon/label.png',
              titleEn: 'label',
              path: '/pages/framework/component/label/index',
            },
            {
              title: '输入框',
              thumb: '/image/icon/input.png',
              titleEn: 'input',
              path: '/pages/framework/component/input/index',
            },
            {
              title: '多行输入框',
              thumb: '/image/icon/textarea.png',
              titleEn: 'textarea',
              path: '/pages/framework/component/textarea/index',
            },
            {
              title: '单选框',
              thumb: '/image/icon/radio.png',
              titleEn: 'radio',
              path: '/pages/framework/component/radio/index',
            },
            {
              title: '复选框',
              thumb: '/image/icon/checkbox.png',
              titleEn: 'checkbox',
              path: '/pages/framework/component/checkbox/index',
            },
            {
              title: '开关',
              thumb: '/image/icon/switch.png',
              titleEn: 'switch',
              path: '/pages/framework/component/switch/index',
            },
            {
              title: '滑动条',
              thumb: '/image/icon/slider.png',
              titleEn: 'slider',
              path: '/pages/framework/component/slider/index',
            },
            {
              title: '选择器视图',
              thumb: '/image/icon/picker-view.png',
              titleEn: 'pickerView',
              path: '/pages/framework/component/pickerView/index',
            },
            {
              title: '选择器',
              thumb: '/image/icon/picker.png',
              titleEn: 'picker',
              path: '/pages/framework/component/picker/index',
            },
          ],
        },
        {
          title: '导航',
          titleEn: 'navigation',
          list: [
            {
              title: '导航',
              thumb: '/image/icon/navigator.png',
              titleEn: 'navigator',
              path: '/pages/framework/component/navigator/index',
            },
          ],
        },
        {
          title: '媒体',
          titleEn: 'media',
          list: [
            {
              title: '图片',
              thumb: '/image/icon/image.png',
              titleEn: 'image',
              path: '/pages/framework/component/image/index',
            },
            {
              title: '音频',
              thumb: '/image/icon/audio.png',
              titleEn: 'audio',
              path: '/pages/framework/component/audio/index',
            },
          ],
        },
        {
          title: '画布',
          titleEn: 'canvas',
          list: [
            {
              title: '画布',
              thumb: '/image/icon/canvas.png',
              titleEn: 'canvas',
              path: '/pages/framework/component/canvas/index',
            },
          ],
        },
        {
          title: '地图',
          titleEn: 'map',
          list: [
            {
              title: '地图',
              thumb: '/image/icon/map.png',
              titleEn: 'map',
              path: '/pages/framework/component/map/index',
            },
          ],
        },
        {
          title: '开放组件',
          titleEn: 'openAPI',
          list: [
            {
              title: '内嵌webview',
              thumb: '/image/icon/webview.png',
              titleEn: 'webView',
              path: '/pages/framework/component/webView/index',
            },
          ],
        },
      ],
    },
    // {
    //   title: '扩展组件',
    //   titleEn: 'extend',
    //   categories: [
    //     {
    //       title: 'test',
    //       list: [],
    //     },
    //   ],
    // },
  ],
}
// @if OUTPUT_ENV='inner'
// 对内的接口
COMPONENT.tabs = [
  {
    title: '基础组件',
    titleEn: 'basic',
    categories: [
      {
        title: '容器组件',
        titleEn: 'container',
        list: [
          {
            title: '基础视图',
            thumb: '/image/icon/view.png',
            titleEn: 'view',
            path: '/pages/framework/component/view/index',
          },
          {
            title: '滚动视图',
            thumb: '/image/icon/scroll-view.png',
            titleEn: 'scrollView',
            path: '/pages/framework/component/scrollView/index',
          },
          {
            title: '滑动视图',
            thumb: '/image/icon/swiper.png',
            titleEn: 'swiper',
            path: '/pages/framework/component/swiper/index',
          },
          {
            title: '可移动视图',
            thumb: '/image/icon/movable-view.png',
            titleEn: 'movableView',
            path: '/pages/framework/component/movableView/index',
          },
          {
            title: '原生视图',
            thumb: '/image/icon/cover-view.png',
            titleEn: 'coverView',
            path: '/pages/framework/component/coverView/index',
          },
        ],
      },
      {
        title: '基础内容',
        titleEn: 'basicContent',
        list: [
          {
            title: '文字',
            thumb: '/image/icon/text.png',
            titleEn: 'text',
            path: '/pages/framework/component/text/index',
          },
          {
            title: '图标',
            thumb: '/image/icon/icon.png',
            titleEn: 'icon',
            path: '/pages/framework/component/icon/index',
          },
          {
            title: '进度条',
            thumb: '/image/icon/progress.png',
            titleEn: 'progress',
            path: '/pages/framework/component/progress/index',
          },
          {
            title: '富文本',
            thumb: '/image/icon/form.png',
            titleEn: 'richText',
            path: '/pages/framework/component/richText/index',
          },
        ],
      },
      {
        title: '表单',
        titleEn: 'form',
        list: [
          {
            title: '按钮',
            thumb: '/image/icon/button.png',
            titleEn: 'button',
            path: '/pages/framework/component/button/index',
          },
          {
            title: '表单',
            thumb: '/image/icon/form.png',
            titleEn: 'form',
            path: '/pages/framework/component/form/index',
          },
          {
            title: '标签',
            thumb: '/image/icon/label.png',
            titleEn: 'label',
            path: '/pages/framework/component/label/index',
          },
          {
            title: '输入框',
            thumb: '/image/icon/input.png',
            titleEn: 'input',
            path: '/pages/framework/component/input/index',
          },
          {
            title: '多行输入框',
            thumb: '/image/icon/textarea.png',
            titleEn: 'textarea',
            path: '/pages/framework/component/textarea/index',
          },
          {
            title: '单选框',
            thumb: '/image/icon/radio.png',
            titleEn: 'radio',
            path: '/pages/framework/component/radio/index',
          },
          {
            title: '复选框',
            thumb: '/image/icon/checkbox.png',
            titleEn: 'checkbox',
            path: '/pages/framework/component/checkbox/index',
          },
          {
            title: '开关',
            thumb: '/image/icon/switch.png',
            titleEn: 'switch',
            path: '/pages/framework/component/switch/index',
          },
          {
            title: '滑动条',
            thumb: '/image/icon/slider.png',
            titleEn: 'slider',
            path: '/pages/framework/component/slider/index',
          },
          {
            title: '选择器视图',
            thumb: '/image/icon/picker-view.png',
            titleEn: 'pickerView',
            path: '/pages/framework/component/pickerView/index',
          },
          {
            title: '选择器',
            thumb: '/image/icon/picker.png',
            titleEn: 'picker',
            path: '/pages/framework/component/picker/index',
          },
        ],
      },
      {
        title: '导航',
        titleEn: 'navigation',
        list: [
          {
            title: '导航',
            thumb: '/image/icon/navigator.png',
            titleEn: 'navigator',
            path: '/pages/framework/component/navigator/index',
          },
        ],
      },
      {
        title: '媒体',
        titleEn: 'media',
        list: [
          {
            title: '图片',
            thumb: '/image/icon/image.png',
            titleEn: 'image',
            path: '/pages/framework/component/image/index',
          },
          {
            title: '音频',
            thumb: '/image/icon/audio.png',
            titleEn: 'audio',
            path: '/pages/framework/component/audio/index',
          },
        ],
      },
      {
        title: '画布',
        titleEn: 'canvas',
        list: [
          {
            title: '画布',
            thumb: '/image/icon/canvas.png',
            titleEn: 'canvas',
            path: '/pages/framework/component/canvas/index',
          },
        ],
      },
      {
        title: '地图',
        titleEn: 'map',
        list: [
          {
            title: '地图',
            thumb: '/image/icon/map.png',
            titleEn: 'map',
            path: '/pages/framework/component/map/index',
          },
        ],
      },
      {
        title: '开放组件',
        titleEn: 'openAPI',
        list: [
          {
            title: '内嵌webview',
            thumb: '/image/icon/webview.png',
            titleEn: 'webView',
            path: '/pages/framework/component/webView/index',
          },
        ],
      },
    ],
  },
  // {
  //   title: '扩展组件',
  //   titleEn: 'extend',
  //   categories: [
  //     {
  //       title: 'test',
  //       list: [],
  //     },
  //   ],
  // },
]
console.log('输出对内组件文档列表')
// @endif

// @if OUTPUT_ENV!='inner'
console.log('输出对外组件文档列表')
// @endif

export const COMPONENT_LIST = COMPONENT.tabs.reduce((res, item) => {
  const list = item.categories.reduce((arr, obj) => {
    arr.push(...obj.list)
    return arr
  }, [])
  res.push(...list)
  return res
}, [])

export default COMPONENT
