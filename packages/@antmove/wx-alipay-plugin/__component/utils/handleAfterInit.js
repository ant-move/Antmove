function handleAfterInit() {
  let classStr = ''
  this.data.__classNames
    .forEach((key) => {
      classStr += (this.props[key] || '')
    })
  if (this.data._classes !== classStr) {
    this.setData({
      _classes: classStr,
    })
  }
}

module.exports = handleAfterInit
