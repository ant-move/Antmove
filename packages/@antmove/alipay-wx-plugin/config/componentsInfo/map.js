const Config = require('../../config.js')
const { createSupportProp } = require('./utils.js')

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
  map: {
    name: '地图',
    url: {
      original: 'https://docs.alipay.com/mini/component/map',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
    },
    type: 5,
    tagName: 'custom-map',
    path: `${customComponentPrefix}/__component/custom-map/custom-map`,
    desc: 'use custom map component instead default map component.',
    props: {
      style: createSupportProp('内联样式'),
      class: createSupportProp('外联样式'),
      longitude: createSupportProp('中心经度'),
      latitude: createSupportProp('中心纬度'),
      scale: createSupportProp('缩放级别'),
      markers: {
        name: '覆盖物，在地图上的一个点绘制图标',
        status: 1,
        desc: '标记点用于在地图上显示标记的位置',
        props: {
          id: createSupportProp('标记点 id，点击事件回调会返回此 id'),
          latitude: createSupportProp('浮点数，范围 -90 ~ 90'),
          longitude: createSupportProp('浮点数，范围 -180 ~ 180'),
          title: createSupportProp('标注点名'),
          iconPath: createSupportProp("项目目录下的图片路径，可以用相对路径写法，以'/'开头则表示相对小程序根目录"),
          rotate: createSupportProp('顺时针旋转的角度，范围 0 ~ 360，默认为 0'),
          alpha: createSupportProp('默认 1，无透明，范围 0 ~ 1'),
          width: createSupportProp('默认为图片实际宽度'),
          height: createSupportProp('默认为图片实际高度'),
          callout: {
            name: '自定义标记点上方的气泡窗口',
            desc: '地图上最多同时展示一个，绑定onCalloutTap',
            type: 1,
            status: 0,
            props: {
              content: createSupportProp('文本'),
            },
          },
          anchorX: {
            type: 1,
            status: 0,
            desc: '经纬度在标注图标的锚点-横向值',
            key: 'anchor.x',
          },
          anchorY: {
            type: 1,
            status: 0,
            desc: '经纬度在标注图标的锚点-竖向值',
            key: 'anchor.y',
          },
          label: {
            name: 'marker 上的气泡',
            desc: '地图上可同时展示多个，绑定onMarkerTap',
            type: 1,
            status: 0,
            props: {
              content: createSupportProp('文本'),
              color: createSupportProp('文本颜色'),
              fontSize: createSupportProp('文字大小'),
              borderRadius: createSupportProp('边框圆角'),
              bgColor: createSupportProp('背景色'),
              padding: createSupportProp('文本边缘留白'),
            },
          },
          customCallout: {
            type: 0,
            status: 2,
            desc: 'callout背景自定义目前只支持高德地图style',
          },
          iconAppendStr: {
            type: 0,
            status: 2,
            desc: 'marker图片可以来源于View',
          },
          iconAppendStrColor: {
            type: 0,
            status: 2,
            desc: 'marker图片可以来源于View,底部描述文本颜色',
          },
          fixedPoint: {
            type: 0,
            status: 2,
            desc: '基于屏幕位置扎点',
          },
          markerLevel: {
            type: 0,
            status: 2,
            desc: 'marker在地图上的绘制层级',
          },
          style: {
            type: 0,
            status: 2,
            desc: '自定义marker样式',
          },
        },
      },
      polyline: {
        name: '覆盖物',
        desc: '多个连贯点的集合（路线）',
        status: 1,
        props: {
          points: createSupportProp('经纬度数组'),
          color: createSupportProp('线的颜色'),
          width: createSupportProp('线的宽度'),
          dottedLine: createSupportProp('是否虚线'),
          iconPath: {
            type: 0,
            status: 2,
            desc: '线的纹理地址',
          },
          iconWidth: {
            type: 0,
            status: 2,
            desc: '使用纹理时的宽度',
          },
          zIndex: {
            type: 0,
            status: 2,
            desc: '覆盖物的 Z 轴坐标',
          },
          colorList: {
            type: 0,
            status: 2,
            desc: '彩虹线',
          },
        },
      },
      circles: {
        name: '圆',
        desc: '用于在地图上显示圆',
        status: 0,
        props: {
          latitude: createSupportProp('纬度'),
          longitude: createSupportProp('经度'),
          color: createSupportProp('描边的颜色'),
          fillColor: createSupportProp('填充颜色'),
          radius: createSupportProp('半径'),
          strokeWidth: createSupportProp('描边的宽度'),
        },
      },
      controls: {
        name: '控件',
        desc: '用于在地图上显示控件，控件不随着地图移动',
        status: 0,
        props: {
          id: createSupportProp('在控件点击事件回调会返回此id'),
          position: createSupportProp('控件相对地图位置'),
          iconPath: createSupportProp('项目目录下的图片路径，可以用相对路径写法，以' / '开头则表示相对小程序根目录'),
          clickable: createSupportProp('默认不可点击'),
        },
      },
      polygons: {
        name: '多边形',
        desc: '用于构造多边形对象',
        status: 1,
        props: {
          points: createSupportProp('经纬度数组'),
          color: {
            type: 1,
            status: 0,
            desc: '线的颜色',
            key: 'strokeColor',
          },
          fillColor: createSupportProp('填充色'),
          width: {
            type: 1,
            status: 0,
            desc: '线的宽度',
            key: 'strokeWidth',
          },
        },
      },
      'show-location': createSupportProp('显示带有方向的当前定位点'),
      'include-points': createSupportProp('缩放视野以包含所有给定的坐标点'),
      'include-padding': {
        type: 0,
        status: 2,
        desc: '视野在地图padding范围内展示',
      },
      'ground-overlays': {
        type: 0,
        status: 2,
        desc: '覆盖物，自定义贴图',
      },
      'tile-overlay': {
        type: 0,
        status: 2,
        desc: '覆盖物，网格贴图',
      },
      setting: {
        type: 0,
        status: 2,
        desc: '设置',
      },
      onMarkerTap: {
        type: 1,
        status: 0,
        desc: '点击Marker时触发',
        key: 'bindmarkertap',
      },
      onCalloutTap: {
        type: 1,
        status: 0,
        desc: '点击Marker对应的callout时触发',
        key: 'bindcallouttap',
      },
      onControlTap: {
        type: 1,
        status: 0,
        desc: '点击control时触发',
        key: 'bindcontroltap',
      },
      onRegionChange: {
        type: 1,
        status: 0,
        desc: '视野发生变化时触发',
        key: 'bindregionchange',
        params: {
          type: createSupportProp(''),
          latitude: {
            type: 0,
            status: 2,
            desc: '维度',
          },
          longitude: {
            type: 0,
            status: 2,
            desc: '经度',
          },
          scale: {
            type: 0,
            status: 2,
            desc: '缩放',
          },
        },
      },
      onTap: {
        type: 1,
        status: 0,
        desc: '点击地图时触发',
        key: 'bindtap',
      },
    },
  },
}
