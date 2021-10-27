function collectObserver(observerObj, option, ctx) {
  Object.keys(option).forEach((prop) => {
    if (typeof option[prop] !== 'object' || !option[prop]) { return false }
    if (option[prop].observer) {
      if (typeof option[prop].observer === 'string') {
        observerObj[prop] = ctx.methods[option[prop].observer]
      } else {
        observerObj[prop] = option[prop].observer
      }
    }
  })
  return observerObj
}

module.exports = collectObserver
