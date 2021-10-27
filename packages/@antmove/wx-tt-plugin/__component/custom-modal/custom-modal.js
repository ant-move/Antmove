Component({
  properties: {
    topImage: String,
    className: String,
    topImageSize: String,
    showClose: true,
    closeType: String,
    disableScroll: true,
    title: String,
    noCancel: false,
    confirmText: {
      type: String,
      value: '确定',
    },
    cancelText: {
      type: String,
      value: '取消',
    },
    hidden: Boolean,
  },
  methods: {
    modalClick() {
      this.triggerEvent('modalclick')
    },
    mdalClose() {
      this.triggerEvent('modalclose')
    },
  },
})
