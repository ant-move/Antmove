function processErrMassage(msg, filepath) {
  if (!msg) {
    return
  }
  
  const msgType = typeof msg
  let errObj = {}
  if (msgType === 'string') {
    errObj.reason = msg
  } else if (msgType === 'object') {
    errObj = msg
  } else {
    return
  }
  errObj.filepath = filepath || process.env.transFile || ''

  throw errObj
}
module.exports = {
  processErrMassage,
}
