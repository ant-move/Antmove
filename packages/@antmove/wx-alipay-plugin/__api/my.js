const baseApi = require('./base')
const device = require('./device')
const openinterface = require('./openinterface')
const interFace = require('./interface')
const nextTick = require('./next-tick')

module.exports = {
  ...device,
  ...baseApi,
  ...openinterface,
  ...interFace,
  nextTick,
}
