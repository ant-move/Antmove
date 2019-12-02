const baseApi = require('./base');
const device = require('./device');
const openinterface= require('./openinterface');
const interFace = require('./interface')
module.exports = {
    ...device,
    ...baseApi,
    ...openinterface,
    ...interFace
};
