module.exports = function nextTick(fn, delay = 0) {
  if (typeof fn === 'function') {
    if (!delay) {
      Promise.resolve().then(fn)
    } else {
      setTimeout(fn, delay)
    }
  }
}
