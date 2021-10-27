const parse = require('./parser').parse.default

Component({
  mixins: [],
  data: {
    nodesData: [],
  },
  props: {
    nodes: [],
  },
  onInit() {
    this.processNodes(this.props.nodes)
  },
  deriveDataFromProps(nextProps) {
    nextProps.nodes !== this.props.nodes && this.processNodes(nextProps.nodes)
  },

  didUnmount() {},
  methods: {
    processNodes(nodes) {
      if (typeof nodes === 'string') {
        nodes = nodes.replace(/<br>/g, '<br/>')
        parse(nodes, (err, _nodes) => {
          if (!err) {
            this.setData({
              nodesData: _nodes,
            })
          }
        })
      } else if (Array.isArray(nodes)) {
        this.setData({
          nodesData: nodes,
        })
      }
    },
  },
})
