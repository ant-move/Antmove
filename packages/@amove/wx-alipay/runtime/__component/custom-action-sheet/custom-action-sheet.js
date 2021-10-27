Component({
  props: {
    hidden: false,
    onChange: Function,
    textContent: '',
  },
  methods: {
    cancel() {
      const ev = {}
      this.props.onChange(ev)
    },
    stopbable() {
      return false
    },
  },
})
