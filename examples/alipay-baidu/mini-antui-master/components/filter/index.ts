import lifecycle from './mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    maxHeight: 0,
  },
  props: {
    className: '',
    onChange: () => {},
    max: 10000,
  },
  didMount() {
    const { commonProps } = this.data;
    const { max } = this.props;
    commonProps.max = max;
  },
  methods: {
    resetFn() {
      const { items, results } = this.data;
      items.forEach((element) => {
        element.setData({
          confirmStyle: '',
        });
      });
      results.splice(0, results.length);
    },
    confirmFn() {
      const { onChange } = this.props;
      const { results } = this.data;
      onChange(results);
    },
  },
});
