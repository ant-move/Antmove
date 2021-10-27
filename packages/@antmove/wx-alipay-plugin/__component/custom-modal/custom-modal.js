Component({
  props: {
    topImage: '',
    className: '',
    topImageSize: 'md',
    showClose: true,
    closeType: '0',
    disableScroll: true,
    title: '',
    noCancel: false,
    confirmText: '确定',
    cancelText: '取消',
    hidden: true,
  },
  methods: {
    modalClick() {
      const onModalClick = this.props.onModalClick
      if (onModalClick) {
        onModalClick()
      }
    },
    mdalClose() {
      const onModalClose = this.props.onModalClose
      if (onModalClose) {
        onModalClose()
      }
    },
  },
})
