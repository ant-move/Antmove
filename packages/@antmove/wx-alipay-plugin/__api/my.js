const baseApi = require('./base');
const device = require('./device');
const openinterface= require('./openinterface');
const equipment = require('./equipment.js');

module.exports = {
    ...device,
    ...baseApi,
    ...openinterface,
    ...equipment
};
