module.exports = function(index) {
  const spilt = '    '
  let space = ''
  for (let i = 0; i <= index - 1; i++) {
    space += spilt
  }
  return space
}
