const processDataSet = require('../utils/processDataSet')


Component({
  data: {},
  props: {
    duration: 500,
    indicatorDots: false,
    indicatorColor: 'rgba(0, 0, 0, .3)',
    indicatorActiveColor: '#000',
    autoplay: false,
    current: 0,
    interval: 5000,
    circular: false,
    vertical: false,
    previousMargin: '0px',
    nextMargin: '0px',
  },
  methods: {
    tapHandler(e) {
      if (this.props.onTap) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onTap(tapEvent)
      }
    },
    catchTapHandler(e) {
      if (this.props.catchTap) {
        const tapEvent = processDataSet(e, this.props)
        this.props.catchTap(tapEvent)
      }
    },
    changeHandler(e) {
      if (this.props.onChange) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onChange(tapEvent)
      }
    },
    transitionHandler(e) {
      if (this.props.onTransition) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onTransition(tapEvent)
      }
    },
    animationEndHandler(e) {
      if (this.props.onAnimationEnd) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onAnimationEnd(tapEvent)
      }
    },
  },
})
