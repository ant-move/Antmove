module.exports = function(key, value) {
  const newKey = key.replace(/wx:/, 'a:')

  return {
    key: newKey,
    value,
  }
}
