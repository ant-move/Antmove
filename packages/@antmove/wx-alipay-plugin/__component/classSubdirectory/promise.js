const isArray = Array.isArray
Promise.all = function(arr) {
  return new Promise(((resolve, reject) => {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'))
    }

    const args = Array.prototype.slice.call(arr)
    if (args.length === 0) { return resolve([]) }
    let remaining = args.length

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          const then = val.then
          if (typeof then === 'function') {
            then.call(
              val,
              (_val) => {
                res(i, _val)
              },
              reject,
            )
            return
          }
        }
        args[i] = val
        if (--remaining === 0) {
          resolve(args)
        }
      } catch (ex) {
        reject(ex)
      }
    }

    for (let i = 0; i < args.length; i++) {
      res(i, args[i])
    }
  }))
}
