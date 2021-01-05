const utils = require('../../api/utils')

Component({
  properties: {
    _id: {
      type: String,
      value: 'mapId',
    },
    class: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    longitude: {
      type: Number,
      value: 0,
    },
    latitude: {
      type: Number,
      value: 0,
    },
    scale: {
      type: Number,
      value: 15,
    },
    markers: {
      type: Array,
      value: [],
      observer(newVal) {
        this.listeningMarkers(newVal)
      },
    },
    polyline: {
      type: Array,
      value: [],
      observer(newVal) {
        this.listeningPolyline(newVal)
      },
    },
    circles: {
      type: Array,
      value: [],
    },
    controls: {
      type: Array,
      value: [],
    },
    polygon: {
      type: Array,
      value: [],
      observer(newVal) {
        this.listeningPolygons(newVal)
      },
    },
    'show-location': {
      type: Boolean,
      value: false,
    },
    'include-points': {
      type: Array,
      value: [],
    },
    'include-padding': {
      type: Object,
      value: {},
    },
    'ground-overlays': {
      type: Object,
      value: {},
    },
    'tile-overlay': {
      type: Object,
      value: {},
    },
    setting: {
      type: Object,
      value: {},
      observer(newVal) {
        this.listeningSetting(newVal)
      },
    },
  },
  data: {
    alMakers: [],
    mapStyle: '',
    enableScroll: true,
    showCompass: false,
    showScale: false,
    enableTraffic: false,
  },
  methods: {
    listeningMarkers(markers) {
      const alMarkers = markers.map((el) => {
        if (el.anchorX && el.anchorY) {
          el.anchor = {
            x: el.anchorX,
            y: el.anchorY,
          }
          delete el.anchorX
          delete el.anchorY
        }
        if (el.customCallout) {
          if (el.customCallout.type) {
            const key = el.customCallout.type
            el.callout = {}
            switch (key) {
              case 0:
                el.callout.bgColor = '#ffffff'
                el.callout.color = '#000000'
                break
              case 1:
                el.callout.bgColor = '#000000'
                el.callout.color = '#ffffff'
                break
              case 2:
                el.callout.bgColor = '#ffffff'
                el.callout.color = '#000000'
                break
              default:
                break
            }
          }
          if (el.customCallout.time) {
            utils.warn(
              'markers customCallout暂不支持time', {
                apiName: 'map/markers customCallout/time',
                errorType: 0,
                type: 'component',
              },
            )
          }
          if (el.customCallout.descList) {
            if (el.customCallout.type === 0 || el.customCallout.type === 1) {
              el.callout.color = el.customCallout.descList.descColor
              el.callout.content = el.customCallout.descList.desc
            }
            if (el.customCallout.type === 2) {
              el.callout.color = el.customCallout.descList[0].descColor
              let content = ''
              el.customCallout.descList.forEach((item) => {
                content += item.desc
              })
              el.callout.content = content
            }
          }
          if (el.customCallout.isShow === 1) {
            el.callout.display = 'ALWAYS'
          }
          delete el.customCallout
        }
        if (el.iconAppendStr) {
          utils.warn(
            'markers 暂不支持iconAppendStr', {
              apiName: 'map/markers/iconAppendStr',
              errorType: 0,
              type: 'component',
            },
          )
          delete el.iconAppendStr
        }
        if (el.iconAppendStrColor) {
          utils.warn(
            'markers 暂不支持iconAppendStrColor', {
              apiName: 'map/markers/iconAppendStrColor',
              errorType: 0,
              type: 'component',
            },
          )
          delete el.iconAppendStrColor
        }
        if (el.fixedPoint) {
          utils.warn(
            'markers 暂不支持fixedPoint', {
              apiName: 'map/markers/fixedPoint',
              errorType: 0,
              type: 'component',
            },
          )
          el.fixedPoint
        }
        if (el.markerLevel) {
          utils.warn(
            'markers 暂不支持markerLevel', {
              apiName: 'map/markers/markerLevel',
              errorType: 0,
              type: 'component',
            },
          )
          delete el.markerLevel
        }
        if (el.style) {
          utils.warn(
            'markers 暂不支持style', {
              apiName: 'map/markers/style',
              errorType: 0,
              type: 'component',
            },
          )
          delete el.style
        }
        if (el.label) {
          if (!el.label.color) {
            el.label.color = '#000000'
          }
          if (!el.label.fontsize) {
            el.label.fontsize = 14
          }
          if (!el.label.borderRadius) {
            el.label.borderRadius = 20
          }
          if (!el.label.bgColor) {
            el.label.bgColor = '#FFFFFF'
          }
          if (!el.label.padding) {
            el.label.padding = 10
          }
        }
        return el
      })
      this.setData({
        alMakers: alMarkers,
      })
    },
    listeningSetting(setting) {
      if (setting) {
        if (setting.tiltGesturesEnabled !== undefined) {
          utils.warn('暂不支持tiltGesturesEnabled', {
            apiName: 'map/tiltGesturesEnabled',
            errorType: 0,
            type: 'component',
          })
        }
        if (setting.showMapText !== undefined) {
          utils.warn('暂不支持showMapText', {
            apiName: 'map/showMapText',
            errorType: 0,
            type: 'component',
          })
        }
        if (setting.logoPosition !== undefined) {
          utils.warn('暂不支持logoPosition', {
            apiName: 'map/logoPosition',
            errorType: 0,
            type: 'component',
          })
        }
        if (setting.gestureEnable === 1) {
          this.setData({
            enableScroll: true,
          })
        } else {
          this.setData({
            enableScroll: false,
          })
        }
        if (setting.showScale === 1) {
          this.setData({
            showScale: true,
          })
        } else {
          this.setData({
            showScale: false,
          })
        }
        if (setting.showCompass === 1) {
          this.setData({
            showCompass: true,
          })
        } else {
          this.setData({
            showCompass: false,
          })
        }
        if (setting.trafficEnabled === 0) {
          this.setData({
            enableTraffic: true,
          })
        } else {
          this.setData({
            enableTraffic: false,
          })
        }
      }
    },
    listeningPolyline(polyline) {
      polyline.map((el) => {
        if (el.iconWidth) {
          utils.warn('polyline暂不支持iconWidth', {
            apiName: 'map/polyline/iconWidth',
            errorType: 0,
            type: 'component',
          })
        }
        if (el.zIndex) {
          utils.warn('polyline暂不支持zIndex', {
            apiName: 'map/polyline/zIndex',
            errorType: 0,
            type: 'component',
          })
        }
        if (el.iconPath) {
          utils.warn('polyline暂不支持iconPath', {
            apiName: 'map/polyline/iconPath',
            errorType: 0,
            type: 'component',
          })
        }
        if (el.colorList) {
          utils.warn('polyline暂不支持colorList', {
            apiName: 'map/polyline/colorList',
            errorType: 0,
            type: 'component',
          })
        }
      })
    },
    listeningPolygons(polygon) {
      polygon.map((el) => {
        if (el.color) {
          el.strokeColor = el.color
        }
        if (el.width) {
          el.strokeWidth = el.width
        }
      })
    },
    onMarkerTapFn(e) {
      this.triggerEvent('markertap', e)
    },
    onCalloutTapFn(e) {
      this.triggerEvent('callouttap', e)
    },
    onControlTapFn(e) {
      this.triggerEvent('controltap', e)
    },

    onRegionChangeFn(e) {
      this.triggerEvent('regionchange', e)
    },
    onTapFn(e) {
      this.triggerEvent('tap', e)
    },
  },
})
