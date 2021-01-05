Component({
  props: {
    list: [],
  },
  methods: {
    onItemTap(e) {
      const { onItemTap } = this.props
      const { title } = e.target.dataset
      if (onItemTap) {
        onItemTap({ title })
      }
    },
  },
})
