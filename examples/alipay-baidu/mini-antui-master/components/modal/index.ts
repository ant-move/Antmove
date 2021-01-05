Component({
  props: {
    className: '',
    topImageSize: 'md',
    showClose: true,
    closeType: '0',
    disableScroll: true,
  },
  methods: {
    onModalClick() {
      const { onModalClick } = this.props;
      if (onModalClick) {
        onModalClick();
      }
    },
    onModalClose() {
      const { onModalClose } = this.props;
      if (onModalClose) {
        onModalClose();
      }
    },
  },
});
