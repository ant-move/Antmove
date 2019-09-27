Component({
    properties: {
        hidden: Boolean,
        onChange: Function,
        textContent: String
    },
    methods: {
        cancel () {
            const ev = {};
            this.props.onChange(ev);
        },
        stopbable () {
            return false;
        }
    }
});
