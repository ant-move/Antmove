const baseApi = require('./base')
const equipment = require('./equipment')
const openinterface = require('./openinterface')

module.exports = {
  ...equipment,
  ...baseApi,
  ...openinterface,
}

