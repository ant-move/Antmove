module.exports = function(originCode) {
  if (/__wxConfig/.test(originCode)) {
    originCode = `const __wxConfig = {};\n${originCode}`
  }
  if (/__wxAppData/.test(originCode)) {
    originCode = `const __wxAppData = {};\n${originCode}`
  }
  return originCode
}
 
