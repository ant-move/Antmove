module.exports = function(key, value) {
  const newKey = key.replace(/a:/, 'wx:')

  return {
    key: newKey,
    value,
  }
}
