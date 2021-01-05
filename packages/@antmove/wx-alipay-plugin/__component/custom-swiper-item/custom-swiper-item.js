const processDataSet = require('../utils/processDataSet')


Component({
  data: {},
  props: {
        
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

  },
})
