Component({
  props: {
    text: 'Button',
    onClickMe: () => {},
  },
    





  methods: {
    onClickMe() {

      this.props.onClickMe("123");
    },
  },
});
