Component({
    props: {
        hidden: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 1500
        },
        textContent: {
            type: String
        },
        bindchange: {
            type: Function
        }
    },
    methods: {
        onChange () {
            this.props.bindchange && this.props.bindchange();
        },
        toggleToast () {
            if (this.props.hidden) {
                my.hideToast();
            } else {
                my.showToast({
                    type: 'none',
                    content: this.props.textContent,
                    duration: this.props.duration,
                    success: () => {
                        this.onChange();
                    }
                });
            }
        }
    },
    didUpdate () {
        this.toggleToast();
    },
    didMount () {
        this.toggleToast();
    }
});