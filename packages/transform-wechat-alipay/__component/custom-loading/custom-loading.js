Component({
    props: {
        hidden: true,
        duration: 1500,
        textContent: "",
        onLoadChange: () => { }
    },
    methods: {
        watchHidden () {
            const num = Number(this.props.duration);
            if (!this.props.hidden) {
                const that = this;
                setTimeout(() => {
                    const e = {
                        type: "change"
                    };
                    that.props.onLoadChange(e);
                }, num);
            }
        }
    },
    didUpdate () {
        this.watchHidden();
    }
});