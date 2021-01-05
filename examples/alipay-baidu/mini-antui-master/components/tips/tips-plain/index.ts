Component({
  data: {
    show: true
  },
  props: {
    className: '',
    time: 5000,
    onClose: () => {}
  },
  didMount() {
    let { show } = this.data;
    let { time } = this.props;
    setTimeout(() => {
      this.setData({
        show: false
      });
    }, time);
  },
  methods: {
    onClose() {
      this.setData({
        show: false
      });
      this.props.onClose();
    }
  }
});