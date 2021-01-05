Component({
  props: {
    show: true,
    className: '',
    type: 'dialog',
  },
  methods: {
    onCloseTap() {
      const { onCloseTap } = this.props;

      if (onCloseTap) {
        onCloseTap();
      }
    },
  },
});
