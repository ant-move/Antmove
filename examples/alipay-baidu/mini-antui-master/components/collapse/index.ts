const noop = () => {};

const prefixKey = prefix => key => `${prefix}-${key}`;
const collapsePrefix = prefixKey('am-collapse');

Component({
  data: {
    id: '',
    activeArr: [],
  },

  props: {
    activeKey: [],
    accordion: false,
    onChange: noop,
    openAnimation: {},
    collapseKey: '',
    className: '',
  },

  didMount() {
    this.initData();
  },

  methods: {
    initData() {
      const { accordion, activeKey, collapseKey } = this.props;
      let activeArr = [];
      this.$page[collapsePrefix(`handleItemTap-${collapseKey}`)] = this.handleItemTap.bind(this);
      if (accordion) {
        if (typeof activeKey === 'string') {
          activeArr = [activeKey];
        } else {
          activeArr = [this.$page[collapsePrefix(`ids-${collapseKey}`)] && this.$page[collapsePrefix(`ids-${collapseKey}`)][0]];
        }
      } else if (typeof activeKey === 'string') {
        activeArr = [activeKey];
      } else if (activeKey instanceof Array) {
        activeArr = activeKey;
      }
      this.updateItems(activeArr);
    },

    handleItemTap(key) {
      const { activeArr } = this.data;
      if (this.props.accordion) {
        if (activeArr.indexOf(key) === -1) {
          this.updateItems([key]);
        } else {
          this.updateItems([]);
        }
      } else {
        const index = activeArr.indexOf(key);
        if (index !== -1) {
          activeArr.splice(index, 1);
        } else {
          activeArr.push(key);
        }
        this.updateItems(activeArr);
      }
    },

    updateItems(activeArr) {
      const { collapseKey } = this.props;
      this.setData({ activeArr });
      this.props.onChange(activeArr);
      this.$page[collapsePrefix(`updates-${collapseKey}`)].forEach((update) => {
        if (typeof update === 'function') {
          update({
            activeKey: this.data.activeArr,
          });
        }
      });
    },
  },
});
