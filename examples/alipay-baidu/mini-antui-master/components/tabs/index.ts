const { windowWidth } = my.getSystemInfoSync();

Component({
  props: {
    className: '',
    activeCls: '',
    tabBarUnderlineColor: '#108ee9', // 选中选项卡下划线颜色
    tabBarActiveTextColor: '#108ee9', // 选中选项卡字体颜色
    tabBarInactiveTextColor: '#333333', // 未选中选项卡字体颜色
    tabBarBackgroundColor: '#ffffff', // 选项卡背景颜色
    showPlus: false,
    swipeable: true,
    activeTab: 0, // 当前激活tab
    animation: true,
    tabBarCls: '', // tabbar的自定义样式class
    duration: 500,
  },
  data: {
    windowWidth,
    tabWidth: 0.25,
    autoplay: false,
    animation: false,
    version: my.SDKVersion,
  },
  didMount() {
    const { tabs, animation } = this.props;
    this.setData({
      tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      animation,
      autoplay: true,
    });
  },
  didUpdate(prevProps) {
    const { tabs } = this.props;
    if (prevProps.tabs.length !== tabs.length) {
      this.setData({
        tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      });
    }
  },
  methods: {
    handleSwiperChange(e) {
      const { current } = e.detail;

      if (this.props.onChange) {
        this.props.onChange({ index: current });
      }
    },
    handleTabClick(e) {
      const { index } = e.target.dataset;

      if (this.props.onTabClick) {
        this.props.onTabClick({ index });
      }
    },
    handlePlusClick() {
      if (this.props.onPlusClick) {
        this.props.onPlusClick();
      }
    },
  },
});
