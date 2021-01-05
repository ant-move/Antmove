Component({
    props: {
        hidden: Boolean,
        bindchange: Function,
    },
    methods: {
        howLoading () {
            console.log(this.props.textContent);
            if (this.props.hidden) return false;
            my.showActionSheet({
                content: this.props.textContent,
                mask: true
            });
        },
        hideLoading () {
            my.hideLoading();
        }
    },
    didUpdate () {},
    didMount () {},
    didUnmount () {},
});
