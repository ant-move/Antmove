const descObj = require('./desc.js')

const apiObj = {
  setStorageSync: {
    fn(obj) {
      return swan.setStorageSync(obj.key, obj.data)
    },
  },
  getStorageSync: {
    fn(obj) {
      return { data: swan.getStorageSync(obj.key) }
    },
  },
    
}
module.exports = apiObj
