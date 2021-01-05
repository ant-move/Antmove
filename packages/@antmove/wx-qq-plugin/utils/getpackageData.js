const path = require('path')
const fs = require('fs-extra')

module.exports = function() {
  const packagePath = path.join(__dirname, '../../../..', 'package.json')
  const packageData = fs.readFileSync(packagePath, 'utf-8')
  return JSON.parse(packageData)
}
