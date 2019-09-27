Component({
    props: {
        data: Object
    },
    data: {
        propsData: {} 
    },
    methods: {
        tapItem (e) {
            e.currentTarget.dataset = { ...this.data.propsData };
            this.props.onTap(e);
        },
        makeData () {
            this.data.propsData = {};
            for (let key in this.props) {
                if (key.indexOf('data') !== -1) {
                    let datakey = key.split("-")[1];
                    if (datakey) this.data.propsData[datakey] = this.props[key];
                } 
            }
        }
    },
    ready () {
        this.makeData();
    },
});
