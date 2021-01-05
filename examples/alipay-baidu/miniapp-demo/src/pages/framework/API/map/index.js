Page({
  data: {
    scale: 14,
    longitude: 116.397470,
    latitude: 39.908823,
    markers: [{
      iconPath: '/image/mark_bs.png',
      id: 1,
      latitude: 39.903823,
      longitude: 116.392470,
      width: 50,
      height: 50,
      callout: {
        content: '标记位置',
        color: '#ff0000',
        fontSize: 12,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#00ff00',
        bgColor: '#eeeeee',
        padding: 5,
        display: 'ALWAYS',
        textAlign: 'center',
      },
    }],
    setting: {
      zoomEnabled: 0,
      scrollEnabled: 0,
      rotateEnabled: 0,
    },
  },
  onLoad() {
    this.mapCtx = my.createMapContext('map')
  },
  regionchange(e) {
    console.log('regionchange', e)
  },
  tap(e) {
    console.log('tap', e)
  },
  move() {
    this.mapCtx.moveToLocation()
  },
  cursor() {
    this.mapCtx.gestureEnable({
      isGestureEnable: 0,
    })
  },
  showScale() {
    this.mapCtx.showsScale({
      isShowsScale: 1,
    })
  },
  showCompass() {
    this.mapCtx.showsCompass({
      isShowsCompass: 1,
    })
  },
  showRoute() {
    my.alert({
      content: 'bus',
    })
    this.mapCtx.showRoute({
      searchType: 'bus',
      startLat: 39.908823,
      startLng: 116.397470,
      endLat: 39.972499,
      endLng: 116.420929,
      throughPoints: [{ lat: 39.920747, lng: 116.432846 }, { lat: 39.930686, lng: 116.446751 }],
      iconPath: '/image/map_alr.png',
      iconWidth: 10,
      zIndex: 4,
      mode: 0,
      city: 'beijing',
      destinationCity: 'beijing',
    })
  },
  clearRoute() {
    this.mapCtx.clearRoute()
  },
  update() {
    this.mapCtx.updateComponents({
      scale: 14,
      longitude: 116.397470,
      latitude: 39.908823,
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
  getRegion() {
    if (this.mapCtx.getRegion) {
      this.mapCtx.getRegion({
        success: (res) => {
          console.log('success')
          console.log(res.southwest)
          console.log(res.northeast)
          my.alert({
            title: 'success',
            content: JSON.stringify(res),
          })
        },
        fail: (error) => {
          console.log('fail')
          my.alert({
            title: 'fail',
            content: JSON.stringify(error),
          })
        },
        complete: () => {
          console.log('complete')
        },
      })
    } else {
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  translateMarker() {
    this.mapCtx.translateMarker({
      markerId: 1,
      destination: {
        latitude: 39.909823,
        longitude: 116.392470,
      },
      autoRotate: true,
      duration: 1000,
      animationEnd: () => {
        console.log('移动结束')
      },
    })
  },
  getScale() {
    if (this.mapCtx.getScale) {
      this.mapCtx.getScale({
        success(res) {
          console.log('获取成功')
          console.log(res)
          my.alert({
            title: 'success',
            content: JSON.stringify(res),
          })
        },
        fail(error) {
          my.alert({
            title: 'fail',
            content: JSON.stringify(error),
          })
        },
        complete() {
          console.log('complete')
        },
      })
    }
  },
  closeZoom() {
    this.mapCtx.updateComponents({
      setting: {
        zoomEnabled: 0,
        scrollEnabled: 0,
        rotateEnabled: 0,
      },
    })
  },
  openZoom() {
    this.mapCtx.updateComponents({
      setting: {
        zoomEnabled: 1,
        scrollEnabled: 1,
        rotateEnabled: 1,
      },
    })
  },
  // 屏幕坐标转经纬度
  screenToMap() {
    if (this.mapCtx.screenToMap) {
      this.mapCtx.screenToMap({
        x: 10,
        y: 20,
        success: (res) => {
          console.log('success')
          console.log(res.longitude)
          console.log(res.latitude)
          my.alert({
            title: 'success',
            content: JSON.stringify(res),
          })
        },
        fail: (error) => {
          my.alert({
            title: 'fail',
            content: JSON.stringify(error),
          })
        },
        complete: () => { console.log('complete') },
      })
    } else {
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  // 经纬度转屏幕坐标
  mapToScreen() {
    if (this.mapCtx.mapToScreen) {
      this.mapCtx.mapToScreen({
        latitude: 39.903823,
        longitude: 116.392470,
        success: (res) => {
          console.log('success')
          console.log(res.x)
          console.log(res.y)
          my.alert({
            title: 'success',
            content: JSON.stringify(res),
          })
        },
        fail: (error) => {
          console.log('fail')
          my.alert({
            title: 'fail',
            content: JSON.stringify(error),
          })
        },
        complete: () => { console.log('complete') },
      })
    } else {
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  // 获取当前地图中心位置
  getCenterLocation() {
    this.mapCtx.getCenterLocation({
      success: res => {
        my.alert({
          content: `longitude:${res.longitude}\nlatitude:${res.latitude}\nscale:${res.scale}`,
        })
        console.log(res)
        console.log(res.longitude)
        console.log(res.latitude)
      },
    })
  },
  // 点击marker
  markertap(e) {
    console.log('点击marker', e)
  },
  // 点击callout
  callouttap(e) {
    console.log('点击callout', e)
  },
  // setData改变经纬度
  changeCenter1() {
    this.setData({
      longitude: 116.517594,
      latitude: 39.986394,
    })
  },
  // updateComponents改变经纬度
  changeCenter2() {
    this.mapCtx.updateComponents({
      longitude: 116.49462,
      latitude: 39.985028,
    })
  },
})
