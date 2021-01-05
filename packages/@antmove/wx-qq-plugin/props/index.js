module.exports = function(key, value) {
  const newKey = key.replace(/wx:/, 'qq:')

  return {
    key: newKey,
    value,
  }
}
