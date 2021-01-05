Component({
  props: {
    title: '',
    onClick: () => {},
    info: '',
  },
  methods:{
    onCardClick() {
      const { info, onClick } = this.props;
      onClick({info});
    },
  },
})
