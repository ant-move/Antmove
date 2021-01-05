module.exports = function(type = 'alipay', content) {
  const envKey = `_${type}Env`
  const ENV_KEY_REGEXP = /^_[alipay|wx|swan|tt|quick]+Env$/
  if (typeof content === 'string') {
    content = JSON.parse(content)
  }
  if (!(content instanceof Object)) {
    return content
  }
  Object.keys(content)
    .forEach((c) => {
      if (c === envKey) {
        Object.assign(content, content[c])
        delete content[c]
      } else if (ENV_KEY_REGEXP.test(c)) {
        delete content[c]
      }
    })
  return JSON.stringify(content, null, 4)
}
