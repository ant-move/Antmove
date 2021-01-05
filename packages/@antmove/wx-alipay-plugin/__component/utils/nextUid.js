module.exports = function nextUid(len = 8) {
  return Math.random()
    .toString(36)
    .substr(len + 1)
}
