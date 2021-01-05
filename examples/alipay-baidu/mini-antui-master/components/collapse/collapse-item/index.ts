const noop = () => {};
function collectArr(arr, ele) {
  let resArr = arr;
  if (arr instanceof Array) {
    resArr.push(ele);
  } else {
    resArr = [ele];
  }
  return resArr;
}
const prefixKey = prefix => key => `${prefix}-${key}`;
const collapsePrefix = prefixKey('am-collapse');

Component({
  data: {
    isActive: false,
    contentHeight: 0,
    contentId: '',
    id: '',
    activeKey: [],
  },

  props: {
    itemKey: '', // 默认随机数
    header: '',
    isOpen: false,
    showArrow: true,
    activeClass: '',
    className: '',
    titleClass: '',
    contentClass: '',
    defaultContentHeight: 0,
    disabled: false,
    collapseKey: '',
  },

  didMount() {
    this.initItems();
  },

  methods: {
    initItems() {
      const { itemKey, isOpen, defaultContentHeight, collapseKey } = this.props;
      this.setData({
        isActive: isOpen,
        contentHeight: defaultContentHeight,
        contentId: this.$id,
        id: itemKey || this.$id,
      });
      this.updateStyle({
        isActive: isOpen,
      });
      const bindedMethod = this.handleItemDataUpdate.bind(this);
      this.$page[collapsePrefix(`updates-${collapseKey}`)] = collectArr(this.$page[collapsePrefix(`updates-${collapseKey}`)], bindedMethod);
      this.$page[collapsePrefix(`ids-${collapseKey}`)] = collectArr(this.$page[collapsePrefix(`ids-${collapseKey}`)], this.data.id);
    },

    handleItemDataUpdate(data) {
      this.setData({ ...data });
      const { activeKey, id } = this.data;
      const isActive = activeKey.indexOf(id) !== -1;
      this.setData({ isActive });
      this.updateStyle({ isActive });
    },

    onCollapseTap(evt) {
      const { collapseKey } = this.props;
      if (!this.props.disabled) {
        const { dataset } = evt.currentTarget;
        this.$page[collapsePrefix(`handleItemTap-${collapseKey}`)](dataset.key);
      }
    },

    updateStyle({ isActive, callback = noop }) {
      if (!isActive) {
        this.setData({ isActive, contentHeight: 0 });
        callback();
      } else {
        this.calcContentHeight(
          `.am-collapse-item-content.${`am-collapse-item-content-${this.$id}`}`
        ).then((height) => {
          this.setData({ isActive, contentHeight: height });
          callback();
        });
      }
    },

    calcContentHeight(selector = '') {
      return new Promise((resolve, reject) => {
        my.createSelectorQuery()
          .select(selector)
          .boundingClientRect()
          .exec((res) => {
            if (res && res[0]) {
              resolve(res[0].height);
            } else {
              reject(res);
            }
          });
      });
    },
  },
});
