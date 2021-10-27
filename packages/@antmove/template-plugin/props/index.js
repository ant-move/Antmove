module.exports = function(key, value) {
  const newKey = key.replace(/wx:/, 'tt:')

  return {
    key: newKey,
    value,
  }
}
