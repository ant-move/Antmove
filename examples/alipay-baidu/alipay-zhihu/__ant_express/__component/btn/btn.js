Component({
  data () {},
  props: {
    'size': 'default',
    'type': 'default',
    'plain': false,
    'disabled': false,
    'loading': false,
    'form-type': '',
    'open-type': '',
    'app-parameter': '',
    'hover-class': 'button-hover',
    'hover-stop-propagation': false,
    'hover-start-time': false
  },
  didMount () {
    for (let key in this.props) {

      typeof (this.props[key]) === "string" && (this.props[key] = this.props[key].replace(/(^\s*)|(\s*$)/g, ""));
    }
    let { size, type, plain, disabled, loading, formType, openType, hoverClass, hoverStopPropagation, hoverStartTime, appParameter } = this.props;
    this.getSystem(() => {
      openType = this.testOpenType(openType);
    });
    this.setData({
      size, type, plain, disabled, loading, formType, openType, hoverClass, hoverStopPropagation, hoverStartTime, appParameter
    });

  },
  methods: {
    getSystem (cb) {
      const that = this;
      my.getSystemInfo({
        success (res) {
          let app = "";
          if (res.app && res.app === "amap") {
            app = "amap";
          } else {
            app = "alipay";
          }
          that.setData({
            app
          });
          cb();
        },
      });
    },
    testOpenType (opentype) {
      let typeArr = ["share", "launchApp"];
      if (this.data.app === "amap") {
        typeArr = ["share"];
      }
      if (opentype && typeArr.indexOf(opentype) !== -1) {
        return opentype;
      } else if (opentype) {
        console.warn(`小程序open-type值不支持${opentype}`);
      }
      return "";

    }
  }


});