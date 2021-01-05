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
  map: {
    name: '地图',
    url: {
      target: 'https://smartprogram.baidu.com/docs/develop/component/map/#map/',
      original: 'https://docs.alipay.com/mini/component/map',
    },
      
    desc: '地图',
    type: 5,
    tagName: 'custom-map',
    path: '/component/custom-map/custom-map',
    props: {
      id: createSupportProp('组件唯一标识符', 1, 'mapId'),
      latitude: createSupportProp('中心纬度'),
      longitude: createSupportProp('中心经度'),
      scale: createSupportProp('缩放级别', 4),
      markers: {
        type: 4,
        status: 1,
        desc: '覆盖物，在地图上的一个点绘制图标',
        props: {
          id: createSupportProp('标记点id'),
          latitude: createSupportProp('纬度'),
          longitude: createSupportProp('经度'),
          title: createSupportProp('标注点名'),
          zIndex: createSupportProp('显示层级'),
          iconPath: createSupportProp('显示的图标'),
          rotate: createSupportProp('旋转角度'),
          alpha: createSupportProp('标注的透明度'),
          width: createSupportProp('标注图标宽度'),
          height: createSupportProp('标注图标高度'),
          callout: createSupportProp('自定义标记点上方的气泡窗口'),
          anchorX: createSupportProp('经纬度在标注图标的锚点-横向值', 0),
          anchorY: createSupportProp('经纬度在标注图标的锚点-竖向值', 0),
          customCallout: createSupportProp('callout背景自定义，目前只支持高德地图style', 0),
          iconAppendStr: createSupportProp('marker图片可以来源于View', 0),
          iconAppendStrColor: createSupportProp('marker图片可以来源于View,底部描述文本颜色', 0),
          fixedPoint: createSupportProp('基于屏幕位置扎点', 0),
          markerLevel: createSupportProp('marker在地图上的绘制层级', 0),
          label: createSupportProp('为标记点旁边增加标签'),
        },
      },
      polyline: {
        type: 4,
        status: 1,
        desc: '用于指定一系列坐标点，从数组第一项连线至最后一项',
        props: {
          points: createSupportProp('经纬度数组'),
          color: createSupportProp('线的颜色'),
          dottedLine: createSupportProp('是否虚线'),
          width: createSupportProp('线的宽度'),
          iconPath: createSupportProp('线的纹理地址', 1, 'arrowIconPath'),
          iconWidth: createSupportProp('使用纹理时的宽度', 1, 'borderWidth'),
          zIndex: createSupportProp('覆盖物的 Z 轴坐标', 0),
          colorList: createSupportProp('彩虹线', 0),
                   
        },
      },
      circles: createSupportProp('用于在地图上显示圆'),
      controls: createSupportProp('用于在地图上显示控件'),
      polygon: {
        type: 4,
        status: 1,
        desc: '指定一系列坐标点，根据 points 坐标数据生成闭合多边形',
        props: {
          points: createSupportProp('经纬度数组'),
          color: createSupportProp('线的颜色', 1, 'strokeColor'),
          fillColor: createSupportProp('填充色'),
          width: createSupportProp('线的宽度', 1, 'strokeWidth'),
                   
        },
      },
      'show-location': createSupportProp('是否显示带有方向的当前定位点'),
      'include-points': createSupportProp('视野将进行小范围延伸包含传入的坐标'),
      'include-padding': createSupportProp('视野在地图padding范围内展示', 0),
      'ground-overlays': createSupportProp('覆盖物，自定义贴图', 0),
      'tile-overlay': createSupportProp('覆盖物，网格贴图', 0),
      setting: createSupportProp('组件唯一标识符', 0),
      onMarkerTap: createSupportProp('组件唯一标识符', 1, 'bindmarkertap'),
      onCalloutTap: createSupportProp('组件唯一标识符', 1, 'bindcallouttap'),
      onControlTap: createSupportProp('组件唯一标识符', 1, 'bindcontroltap'),
      onRegionChange: createSupportProp('组件唯一标识符', 1, 'bindregionchange'),
      onTap: createSupportProp('组件唯一标识符', 1, 'bindtap'),
    },
  },
}
