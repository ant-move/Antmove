const aliRervedWord = [
  'location',
  'fetch',
  'window',
  'document',
  'XmlHttpRequest',
  'global',
  'Behavior'
]
module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        const _name = path.node.name
        if (aliRervedWord.includes(_name)) {
          path.scope.rename(_name)
        }
      },
    },
  }
}
