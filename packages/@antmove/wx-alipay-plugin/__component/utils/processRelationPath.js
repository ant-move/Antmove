const utils = require('../../api/utils')

const { browserPath } = utils
const posix = browserPath()

function processRelationPath(self, relation) {
  const from = self.is
  let to = relation
  if (to[0] === '.') {
    to = `../${to}`
  }
  const _p = posix.join(from, to)
  return _p
}

module.exports = processRelationPath
