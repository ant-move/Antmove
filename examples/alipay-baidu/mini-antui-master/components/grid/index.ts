Component({
  data: {
    bottomIndex: 0,
  },
  props: {
    columnNum: 3,
    circular: false,
    list: [],
    onGridItemClick: () => {},
    hasLine: true,
  },
  didMount() {
    const { list, columnNum } = this.props;
    const rows = list.length / columnNum;
    this.setData({
      bottomIndex: Math.floor(rows) === rows ? (rows - 1) * columnNum : Math.floor(rows) * columnNum,
    });
  },
  methods: {
    onGridItemClick(e) {
      this.props.onGridItemClick({
        detail: {
          index: e.target.dataset.index,
        },
      });
    },
  },
});
