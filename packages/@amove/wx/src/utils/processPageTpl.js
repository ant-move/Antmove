module.exports = function(fileInfo = {}, preData) {
  const jsonFile = fileInfo.path.replace(/.wxml/, '.json')
  if (preData.pagesJson[jsonFile]) {
    fileInfo.isPage = true
    fileInfo.isComponent = false
  } else if (preData.componentsJson[jsonFile]) {
    fileInfo.isComponent = true
  }
}
