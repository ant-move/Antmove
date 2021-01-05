import lifecycle from '../mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    confirmStyle: '',
  },

  props: {
    className: '',
    item: '',
    id: '',
    value: '',
    selected: false,
    onChange: () => {},
  },

  didMount() {
    const { results, items } = this.data;
    const { selected, id, value } = this.props;
    if (selected) {
      results.push({ id, value });
      items.push({ id, value, setData: this.setData });
      this.setData({
        confirmStyle: true,
      });
    }
  },

  methods: {
    handleClick() {
      const { id, value, onChange } = this.props;
      let { confirmStyle } = this.data;
      const { results, items, commonProps } = this.data;
      if (commonProps.max === 1) {
        if (confirmStyle === '') {
          items.forEach((element) => {
            element.setData({
              confirmStyle: '',
            });
          });
          results.splice(0, results.length);
          confirmStyle = true;
          results.push({ id, value });
          items.push({ id, value, setData: this.setData });
          onChange(results);
        }
        this.setData({
          confirmStyle,
        });
        return;
      }
      if (confirmStyle === '' && results.length < commonProps.max) {
        confirmStyle = true;
        results.push({ id, value });
        items.push({ id, value, setData: this.setData });
      } else {
        confirmStyle = '';
        results.some((key, index) => {
          if (JSON.stringify(key) === JSON.stringify({ id, value })) {
            results.splice(index, 1);
            return true;
          } else {
            return false;
          }
        });
      }
      this.setData({
        confirmStyle,
      });
    },
  },
});
