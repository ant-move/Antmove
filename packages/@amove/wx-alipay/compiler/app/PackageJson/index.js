const path = require('path')
const { useReducer } = require('@amove/next')
const fs = require('fs-extra')

const convertedComponents = {
  'vant-weapp': 'vant-aliapp',
}
const convertedNpmName = Object.keys(convertedComponents)
useReducer({
  PackageJson(node, store) {
    this.$node.content = store.package
    this.$node.dist = node.body.dist
    let packageJson = this.$node.content
    let antmoveJson = fs.readFileSync(path.join(store.config.entry, './antmove.config.js')).toString()
    antmoveJson = antmoveJson.replace(/module.exports = /, '').replace(/;/, '')
    antmoveJson = eval(`(${antmoveJson})`)
    packageJson = replaceNpmName(packageJson, antmoveJson)
    this.$node.content = packageJson
  },
  PackageJsonMounted() {
    this.addChild({
      type: 'outputFile',
      body: {
        dist: this.$node.dist,
        content: this.$node.content,
      },
    })
  },
    
})


function replaceNpmName(packageJson, antmoveJson) {
  packageJson.dependencies && Object.keys(packageJson.dependencies).forEach((key) => {
    if (convertedNpmName.includes(key)) {
      const newKey = antmoveJson.npm[key].name
      packageJson.dependencies[newKey] = antmoveJson.npm[key].version
      delete packageJson.dependencies[key]
    }
  })
  packageJson.devDependencies && Object.keys(packageJson.devDependencies).forEach((key) => {
    if (convertedNpmName.includes(key)) {
      const newKey = antmoveJson.npm[key].name
      packageJson.devDependencies[newKey] = antmoveJson.npm[key].version
      delete packageJson.devDependencies[key]
    }
  })
  return JSON.stringify(packageJson, null, 4)
}

