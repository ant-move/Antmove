Component({
    props: {
        bindchange: {
            type: Function
        },
        hidden: {
            type: Boolean
        }
    },
    methods: {
        showLoading () {
            console.log(this.props.textContent);
            if (this.props.hidden) return false;
            my.showLoading({
                content: this.props.textContent,
                mask: true
            });
        },
        hideLoading () {
            my.hideLoading();
        }
    },
    didMount () {
        if (!this.props.hidden) {
            this.showLoading();
        } else {
            this.hideLoading();
        }
    },
    didUpdate () {
        if (!this.props.hidden) {
            this.showLoading();
        } else {
            this.hideLoading();
        }
    },
    didUnmount () {
        this.hideLoading();
    },
});
