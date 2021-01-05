const path = require('path')
const buildAliAntmove = require('./buildAlife')

const antmovePath = path.join(__dirname, '../..')

buildAliAntmove(antmovePath, 'alife-antmove')
