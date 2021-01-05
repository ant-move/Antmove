const parse = require('./parser').parse.default;

Component({
    mixins: [],
    data: {
        nodesData: []
    },
    props: {
        nodes: []
    },
    didMount () {
        this.processNodes();
    },
    didUpdate () {
        this.processNodes();
    },
    didUnmount () {},
    methods: {
        processNodes () {
            if (typeof this.props.nodes === 'string') {
                parse(this.props.nodes, (err, nodes) => {
                    if (!err) {
                        this.setData({
                            nodesData: nodes,
                        });
                    }
                });
            }
        }
    },
});
