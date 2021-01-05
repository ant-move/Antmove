Component({
  data: {
    markers: [{
      iconPath: './image/icon_location.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      zIndex: 1,
      // anchor:{latitude,longitude}
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
      dottedLine: true
    }],
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
  methods: {
      regionchange (e) {
        console.log(e.type);
      },
      markertap (e) {
        console.log(e.markerId);
      },
      controltap (e) {
        console.log(e.controlId);
      },
      onupdated () {
        console.log('111');
      },
      onpoitap () {
        console.log('222');
      },
      oncallouttap () {
        console.log('333');
      },
      ontap () {
        console.log('444');
      }
  }
  });