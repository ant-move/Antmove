Component({
  properties: {
    hidden: {
      type: Boolean,
      value: true,
      observer() {
        this.watchHidden()
      },
    },
    duration: Number,
    textContent: String,
  },
  methods: {
    watchHidden() {
      const num = Number(this.properties.duration)
      if (!this.properties.hidden) {
        const that = this
        setTimeout(() => {
          const e = {
            type: 'change',
          }
          that.triggerEvent('loadchange', e)
        }, num)
      }
    },
  },
})
