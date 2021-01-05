const processDataSet = require('../utils/processDataSet')

Component({
  props: {
    for: '',
  },
  methods: {
    tapHandler(e) {
      const tapEvent = processDataSet(e, this.props)
      this.props.onTap && this.props.onTap(tapEvent)
    },
    catchtapHandler(e) {
      const tapEvent = processDataSet(e, this.props)
      this.props.catchTap && this.props.catchTap(tapEvent)
    },
  },
})
