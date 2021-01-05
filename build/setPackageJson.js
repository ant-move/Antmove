const path = require('path')
const recursive = require('recursive-readdir')
const fs = require('fs-extra')
const utils = require('@antmove/utils')

const allowList = [
  'lerna.json'
]

function match(file) {
  return allowList.find((item) => {
    return file.indexOf(item) !== -1
  })
}

const version = '1.2.2'
const dir = path.join(__dirname, '../')
recursive(dir, ['examples', '.git', 'node_modules'], (err, files) => {
  if (err) { throw err }
  files.forEach((file) => {
    if (file.match(/package\.json$/) || match(file)) {
      let json = fs.readFileSync(file, 'utf8')

      json = json.replace(/(?<="version"\s*:\s*")[^"]+/, version)
      fs.outputFileSync(file, json)
    }
  })
})
