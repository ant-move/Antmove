const utils = require('../../api/utils')
const processDataSet = require('../utils/processDataSet')


Component({
  data: {},
  props: {
    hoverClass: 'navigator-hover',
    hoverStartTime: 50,
    hoverStayTime: 600,
    url: '',
    className: '',
    openType: '',
    path: '',
  },
  didMount() {
    this.props.appId && utils.warn(
      // `支付宝navigator组件不支持 appId 属性!`
      '请修改对应支付宝小程序id',
    )
  },
  methods: {
    navHandler(e) {
      // 支付宝navigator不支持ontap事件
      const tapEvent = processDataSet(e, this.props)
      this.props.onTap && this.props.onTap(tapEvent)
      if (this.props.appId && this.props.appId.toString()) {
        my.navigateToMiniProgram({
          appId: this.props.appId.toString(),
          path: this.props.path,
          extraData: this.props.extraData || {},
          success: (res) => {
            this.props.onSuccess && this.props.onSuccess(res)
          },
          fail: (res) => {
            this.props.onFail && this.props.onFail(res)
          },
          complete: (res) => {
            this.props.onComplete && this.props.onComplete(res)
          },
        })
      }
    },
  },
})
