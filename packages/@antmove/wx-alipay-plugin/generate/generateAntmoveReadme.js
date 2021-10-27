const path = require('path')
const fs = require('fs-extra')

module.exports = function(output) {
  const miniPath = path.join(output, '__antmove/README.MD')
  const readmePath = path.join(__dirname, './README.MD')
  fs.copyFileSync(readmePath, miniPath)
}
