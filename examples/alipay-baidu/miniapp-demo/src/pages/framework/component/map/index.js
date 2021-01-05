Page({
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    includePading: {},
    groundOverlays: [],
    setting: {},
    markers: [],
    polygon: [],
    includePoints: [],
    polyline: [],
    circles: [],
    controls: [],
  },
  controltap(e) {
    console.log('controltap', e)
  },
  tap(e) {
    console.log('tap', e)
  },
  markertap(e) {
    console.log('markertap', e)
  },
  calloutTap(e) {
    console.log('calloutTap', e)
  },
  regionchange(e) {
    console.log('regionchange', e)
  },
  addMarkers() {
    this.setData({
      markers: [{
        iconPath: '/image/mark_bs.png',
        id: 1,
        latitude: 30.279252,
        longitude: 120.124368,
        // width: 30,
        // height: 30,
        // title: '定位1',
        // rotate: 15,
        // alpha: 0.5,
        // callout: {
        //   content: '标记位置',
        // },
        // label: {
        //   content: 'Hello Label',
        //   color: '#000000',
        //   fontSize: 12,
        //   borderRadius: 3,
        //   bgColor: '#ffffff',
        //   padding: 5,
        // },
        // style: {
        //   type: 1,
        //   text1: '敌军呢',
        //   icon1: '/image/icon/map.png',
        //   icon2: '/image/icon/map.png',
        // },
        // anchorX: 0.5,
        // anchorY: 1,
        // markerLevel: 10,
        // customCallout: {
        //   type: 0,
        //   time: "3",
        //   descList: [{
        //     desc: "点击立即打车",
        //     descColor: "#ffffff",
        //   }],
        //   "isShow": 1,
        // },
        // fixedPoint: {
        //   originX: 100,
        //   originY: 100,
        // },
      },
      {
        iconPath: '/image/mark_bs.png',
        id: 1,
        latitude: 30.283830,
        longitude: 120.131441,
      }],
    })
  },
  addPolyline() {
    this.setData({
      polyline: [{
        points: [{
          longitude: 120.131441,
          latitude: 30.279383,
        }, {
          longitude: 120.128821,
          latitude: 30.278200,
        }, {
          longitude: 120.131618,
          latitude: 30.277600,
        }, {
          longitude: 120.132520,
          latitude: 30.279393,
        }, {
          longitude: 120.137517,
          latitude: 30.279383,
        }],
        color: '#ff0000dd',
        width: 5,
        dottedLine: false,
        iconWidth: 5,
        zIndex: 1,
        iconPath: '/image/map_alr.png',
        // colorList: ["#00ff00", "#0000ff"],
      }],
    })
  },
  addCircles() {
    this.setData({
      circles: [{
        latitude: 30.279383,
        longitude: 120.131441,
        color: '#000000aa',
        fillColor: '#000000aa',
        radius: 100,
        strokeWidth: 20,
      }],
    })
  },
  addPolygon() {
    this.setData({
      polygon: [{
        points: [{// 右上
          latitude: 30.279383,
          longitude: 120.131441,
        },
        {
          latitude: 30.283830,
          longitude: 120.131441,
        },
        {
          latitude: 30.283830,
          longitude: 120.139241,
        },
        {
          latitude: 30.279383,
          longitude: 120.139241,
        }],
        fillColor: '#BB0000DD',
        color: '#eeeeeeAA',
        width: 5,
      }],
    })
  },
  addControls() {
    this.setData({
      controls: [{
        id: 5,
        iconPath: '/image/map_alr.png',
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50,
        },
        clickable: true,
      }],
    })
  },
  includePoints() {
    this.setData({
      includePoints: [{
        latitude: 30.279252,
        longitude: 120.124368,
      },
      {
        longitude: 120.133441,
        latitude: 30.279383,
      }],
    })
  },
  includePading() {
    this.setData({
      includePading: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
    })
  },
  setting() {
    this.setData({
      setting: {
        // 手势
        gestureEnable: 1,
        // 比例尺
        showScale: 1,
        // 指南针
        showCompass: 1,
      },
    })
  },
  groundOverlays() {
    this.setData({
      groundOverlays: [
        {
          // 右上，左下
          'include-points': [{
            longitude: 120.131441,
            latitude: 30.279383,
          },
          {
            longitude: 120.133041,
            latitude: 30.281383,
          }],
          image: '/image/mark_bs.png',
          alpha: 0.5,
          zIndex: 1,
        },
      ],
    })
  },
  clearAll() {
    this.setData({
      scale: 14,
      longitude: 120.131441,
      latitude: 30.279383,
      includePading: {},
      groundOverlays: [],
      setting: {},
      markers: [],
      polygon: [],
      includePoints: [],
      polyline: [],
      circles: [],
      controls: [],
    })
  },
})
