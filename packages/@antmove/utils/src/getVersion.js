const exec = require('child_process').exec
const chalk = require('chalk')
 
let isLow = false
function getVersion(version) {
  console.log(version)
  const p1 = new Promise(((res, rej) => {
    exec('npm view antmove version', { timeout: 5000 }, (error, stdout) => {
      if (error) {
        rej(error)
      }
      if (stdout) {
        res(stdout.match(/(\S*)\n/)[1])
      } else {
        res(0)
      }
    })
  })).catch(() => {})
  const p2 = new Promise(((res) => {
    res(version)
  }))
  Promise.all([p1, p2]).then((values) => {
    if (values[0] === undefined) { return }
    try {
      const _remote = values[0].split('.')
      const _local = values[1].split('.')
      _remote.forEach((v, i) => {
        if (v > _local[i]) {
          isLow = true
        }
      })
    } catch (err) {
      // 
    }
    if (isLow) { console.log(chalk.yellow(`[antmove 版本提示升级] 最新版本为 ${values[0]} 本地版本为${values[1]} 请尽快升级至最新版本`)) }
  })
}
module.exports = {
  getVersion,
}
