module.exports = function(key, value) {
  const newKey = key.replace(/a:/, 's-')

  return {
    key: newKey,
    value,
  }
}
