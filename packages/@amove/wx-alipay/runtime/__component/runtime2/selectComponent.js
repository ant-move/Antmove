
function selectComponent(ctx) {
  this.$ctx = ctx
  this.$nodes = {}
  this.$cacheComponents = {}
  this.$activeComponents = {}
}

selectComponent.prototype = {
  _addComponentNode(className, ctx) {
    className = `.${className}`
    const componentNodes = this.$nodes
    if (componentNodes[className]) {
      if (componentNodes[className].every((item) => {
        return item.$id != ctx.$id
      })) {
        componentNodes[className].push(ctx)
      }
    } else {
      componentNodes[className] = [ctx]
    }


    if (this.$cacheComponents[className]) {
      this.$cacheComponents[className](componentNodes[className])
    }
  },
  addComponentNodeId(id, ctx) {
    id = `#${id}`
    const componentNodes = this.$nodes
    if (componentNodes[id]) {
      if (componentNodes[id].every((item) => {
        return item.$id != ctx.$id
      })) {
        componentNodes[id].push(ctx)
      }
    } else {
      componentNodes[id] = [ctx]
    }
  },
  addComponentNode(className = '', ctx) {
    const classNameArray = className.split(/\s+/g)
    classNameArray.forEach((classNameStr) => {
      this._addComponentNode(classNameStr, ctx)
    })
  },
  remove(ctx) {
    const components = this.$activeComponents

    delete components[ctx.$id]
  },
  selectComponent(className) {
    return this._sortComponents(className)[0]
  },
  selectComponents(className) {
    return this._sortComponents(className)
  },
  _sortComponents(className) {
    const componentNodes = this.$nodes[className] || []
    return componentNodes.sort((pre, next) => {
      return Number(pre.$id) > Number(next.$id)
    })
  },
  preProcesscomponents,
  connect() {
    const ctx = this.$ctx
    const self = this
    ctx.selectComponent = function(...p) {
      return self.selectComponent(...p)
    }
    ctx.selectAllComponents = function(...p) {
      return self.selectComponents(...p) || []
    }

    ctx.selectorWatch = function(selector, cb) {
      self.$cacheComponents[selector] = cb
    }
  },
}

function preProcesscomponents(ctx) {
  this.$activeComponents[ctx.$id] = true
  if (ctx.props.id) {
    this.addComponentNodeId(ctx.props.id, ctx)
  }

  if (ctx.props.className) {
    this.addComponentNode(ctx.props.className, ctx)
  }
}

module.exports = selectComponent
