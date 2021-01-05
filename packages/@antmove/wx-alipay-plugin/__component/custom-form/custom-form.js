const processDataSet = require('../utils/processDataSet')

Component({
  props: {
    className: '',
    reportSubmit: false,
  },
  methods: {
    submitHandler(e) {
      const tapEvent = processDataSet(e, this.props)
      this.props.onSubmit && this.props.onSubmit(tapEvent)
    },
    resetHandler(e) {
      const tapEvent = processDataSet(e, this.props)
      this.props.onReset && this.props.onReset(tapEvent)
    },
  },
})
