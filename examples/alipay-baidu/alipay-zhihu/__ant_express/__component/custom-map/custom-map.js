// console.warn = ()=>{};
// let isEnd = true;
// let isBegin = undefined;
// let eInfo = {};

Component({
  props: {
    id: 'mapId',
    'longitude': 0,
    'latitude': 0,
    'scale': 15,
    markers: [],
    'polyline': [],
    'polygons': [],
    'circles': [],
    'controls': [],
    'include-points': [],
    'show-location': false,
    'subkey': '',
    'enable-3D': false,
    'show-compass': false,
    'enable-overlooking': false,
    'enable-zoom': false,
    'enable-scroll': false,
    'enable-rotate': false,
    style: '',
    onMarkerTap: () => { },
    onCalloutTap: () => { },
    onControlTap: () => { },
    onRegionChange: () => { },
    onTap: () => { },
    onUpdated: () => { },
    onPoiTap: () => { }
  },
  data: {
    alMakers: [],
    mapStyle: ''
  },
  didUpdate () {
    this.setData({
      mapStyle: this.props.style
    });
    this.processProps();
  },
  didMount () {
    this.processProps();
  },
  methods: {
    processProps () {
      // maekers 差异
      let alMarkers = this.props.markers.map(el => {
        if (el.zIndex) {
          console.warn('markers暂不支持zIndex');
        }
        if (el['aria-label']) {
          console.warn('markers暂不支持aria-label');
        }
        if (el.callout) {
          if (el.callout.display === 'ALWAYS') {
            el.customCallout = {
              type: 2,
              descList: [{
                desc: el.callout.content,
                descColor: '#333333'
              }],
              isShow: 1
            };
          }

          if (el.callout.color) {
            console.warn('markers callout暂不支持color');
          }
          if (el.callout.fontSize) {
            console.warn('markers callout暂不支持fontSize');
          }
          if (el.callout.borderRadius) {
            console.warn('markers callout暂不支持borderRadius');
          }
          if (el.callout.borderWidth) {
            console.warn('markers callout暂不支持borderWidth');
          }
          if (el.callout.borderColor) {
            console.warn('markers callout暂不支持borderColor');
          }
          if (el.callout.bgColor) {
            console.warn('markers callout暂不支持bgColor');
          }
          if (el.callout.padding) {
            console.warn('markers callout暂不支持padding');
          }
          if (el.callout.display) {
            console.warn('markers callout暂不支持display');
          }
          if (el.callout.textAlign) {
            console.warn('markers callout暂不支持textAlign');
          }
        }
        if (el.anchor) {
          Object.assign(el, {
            anchorX: el.anchor.x,
            anchorY: el.anchor.y
          });
        }
        return el;
      });
      this.setData({
        alMakers: alMarkers
      });
      // polyline 差异
      this.props.polyline.map(el => {
        if (el.arrowLine) {
          console.warn('polyline暂不支持arrowLine');
        }
        if (el['arrowIconPath']) {
          console.warn('polyline暂不支持arrowIconPath');
        }
        if (el['borderColor']) {
          console.warn('polyline暂不支持borderColor');
        }
        if (el['borderWidth']) {
          console.warn('polyline暂不支持borderWidth');
        }
      });
      // polygons 差异
      this.props.polygons.map(el => {
        if (el.zIndex) {
          console.warn('polygons暂不支持zIndex');
        }
        if (el['strokeColor']) {
          el['color'] = el.strokeColor;
        }
        if (el['strokeWidth']) {
          el['width'] = el.strokeWidth;
        }
      });
      if (this.props.subkey) {
        console.warn('暂不支持subkey');
      }
      if (this.props['enable-3D']) {
        console.warn('暂不支持enable-3D');
      }
      if (this.props['show-compass']) {
        console.warn('暂不支持show-compass');
      }
      if (this.props['enable-overlooking']) {
        console.warn('暂不支持enable-overlooking');
      }
      if (this.props['enable-zoom']) {
        console.warn('暂不支持enable-zoom');
      }
      if (this.props['enable-scroll']) {
        console.warn('暂不支持enable-scroll');
      }
      if (this.props['enable-rotate']) {
        console.warn('暂不支持enable-rotate');
      }
      if (this.props['onUpdated']) {
        console.warn('暂不支持onupdated');
      }
      if (this.props['onPoiTap']) {
        console.warn('暂不支持onpoitap');
      }
    },
    onMarkerTapFn (e) {
      this.props.onMarkerTap && this.props.onMarkerTap(e);
    },
    onCalloutTapFn (e) {
      this.props.onCalloutTap && this.props.onCalloutTap(e);
    },
    onControlTapFn (e) {
      this.props.onControlTap && this.props.onControlTap(e);
    },

    onRegionChangeFn (e) {
      e.timeStamp = Number(Date.now());
      // 避免频繁调用
      /*
      if (e.type === 'end' && isBegin === undefined) return false;
      console.log('start: ', e.type, isBegin, isEnd, e.latitude);
        if (e.type === 'end' && eInfo.latitude === e.latitude && eInfo.longitude === e.longitude && eInfo.scale === e.scale) {
          console.log('=====begin', eInfo.latitude, e.latitude);
          return false;
        }
     

      if (e.type === 'begin') {
        eInfo = Object.assign({}, e);
        if (isBegin) return false;
        console.log('type: ', e.type, 'isBegin: ', isBegin, 'isEnd: ', isEnd);
        isBegin = true;
        isEnd = false;
        // changeTimeStamp = parseInt(e.timeStamp);
      } else {
        if (isEnd) return false;
        console.log('type: ', e.type, 'isBegin: ', isBegin, 'isEnd: ', isEnd);
        isBegin = false;
        isEnd = true;
      }*/

      let defValue = {
        causedBy: "update",
        currentTarget: {
          dataset: {},
          id: "map",
          offsetLeft: 0,
          offsetTop: 0,
          detail: {
            type: "end"
          }
        },
        target: {
          dataset: {},
          id: "map",
          offsetTop: 0,
          offsetLeft: 0
        },
        timeStamp: Number(Date.now()),
        type: "end"
      };
      this.props.onRegionChange && this.props.onRegionChange(Object.assign(defValue, e));
    },
    onTapFn (e) {
      this.props.onTap && this.props.onTap(e);
    }
  }
});
