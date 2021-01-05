const noop = () => {};

Component({
  props: {
    mode: 'text',
    simple: false,
    disabled: false,
    current: 0,
    total: 0,
    prevText: '上一页',
    nextText: '下一页',
    onChange: noop,
    className: '',
    btnClass: '',
  },

  didMount() {
    const { current } = this.props;
    this.setData({
      currentPage: current,
    });
  },

  methods: {
    onTapPrev() {
      const { currentPage } = this.data;
      const { disabled } = this.props;
      if (currentPage - 1 > 0 && !disabled) {
        this.setData({
          currentPage: currentPage - 1,
        });
        this.props.onChange(this.data.currentPage);
      }
    },
    onTapNext() {
      const { disabled, total } = this.props;
      const { currentPage } = this.data;
      if (currentPage + 1 <= total && !disabled) {
        this.setData({
          currentPage: currentPage + 1,
        });
        this.props.onChange(this.data.currentPage);
      }
    },
  },
});
