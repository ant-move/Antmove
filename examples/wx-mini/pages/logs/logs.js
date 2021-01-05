// logs.js
Page({
  data: {
    // logs: []
    markers: [{
      iconPath: './image/icon_location.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      zIndex: 1,
      callout: {
        content: 'xxiaoai',
        color: '#f00'
      },
      anchor: {x: .5,y: .5}
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      borderColor: '#f00',
      dottedLine: true
    }],
    polygons: [
      {
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21211
          }, {
            longitude: 113.324530,
            latitude: 23.21449
          }, {
            longitude: 113.324539,
            latitude: 23.21233
          }],
        strokeWidth: 2,
        strokeColor: 'FF0000DD',
        fillColor: '000000DD',
      },
    ],
    controls: [{
      id: 1,
      iconPath: './image/map_fold.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onLoad: function (option) {
    console.log(option);
  },
  onShow: function () {
    // let map = wx.createMapContext('maps')
    // console.log(map.getRegion())
  },
    regionchange () {
      console.log('触发了regionchange');
    },
    markertap () {
      console.log('触发了markertap');
    },
    controltap () {
      console.log('触发了controltap');
    },
    onupdated () {
      console.log('触发了onupdated');
    },
    onpoitap () {
      console.log('触发了onpoitap');
    },
    oncallouttap () {
      console.log('触发了oncallouttap');
    },
    ontap () {
      console.log('触发了ontap');
    }
});
