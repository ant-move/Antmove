class Node {
  constructor(opts = {}) {
    this.$id = opts.id
    this.$opts = opts
    this.$children = []
    this.$parent = null

    this.$render = function() {}
  }

  appendChild(child) {
    this.$children.push(child)
    child.$parent = this
  }

  removeChild(child) {
    this.$children = this.$children.filter((c) => {
      return c.$id !== child.$id
    })
  }
}

module.exports = function link(opts = {}, cb) {
  const node = new Node({
    id: opts.id,
  })

  if (typeof cb === 'function') {
    cb(node)
  }

  if (Array.isArray(opts.children)) {
    opts.children.forEach((child) => {
      node.appendChild(link(child, cb))
    })
  }

  return node
}
