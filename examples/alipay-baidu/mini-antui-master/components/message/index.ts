Component({
  props: {
    className: "",
    type: "success",
    title: "",
    onTapMain: () => {},
    onTapSub: () => {}
  },
  methods: {
    tapMain() {
      this.props.onTapMain();
    },
    tapSub() {
      this.props.onTapSub();
    }
  }
});