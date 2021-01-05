export default {
  data: {
    results: [],
    items: [],
    commonProps: {
      max: 10000,
    }
  },

  didUnmount() {
    let { items, results } = this.data;
    results.splice(0, results.length);
    items.splice(0, items.length);
  },
};