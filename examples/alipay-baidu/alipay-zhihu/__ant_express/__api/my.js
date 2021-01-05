const baseApi = require('./base');
const equipment = require('./equipment');
const openinterface= require('./openinterface');
module.exports = {
    /**
     * storage
     */
    getStorageSync: {
        fn (key) {
            return my.getStorageSync({
                key
            }).data;
        }
    },
    ...baseApi,
    ...equipment,
    ...openinterface
};