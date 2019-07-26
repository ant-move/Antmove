const baseApi = require('./base');
const device = require('./device');
const openinterface= require('./openinterface');
module.exports = {
    ...device,
    ...baseApi,
    ...openinterface
};
