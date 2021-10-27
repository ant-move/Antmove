const chokidar = require('chokidar')
const Transform = require('@antmove/core/transform')

let isOnCompiling = false
let timer = null

function monitorFiles(opts) {
  const input = opts.$options.input || opts.$options.defaultInput
  const ignored = opts.$options.ignored || []
  const watcher = chokidar.watch(input, {
    persistent: true,
    ignored,
  })
  watcher
    .on('add', (p) => {
      onChange(p, 'add', opts)
    })
    .on('change', (p) => {
      onChange(p, 'change', opts)
    })
    .on('unlink', (p) => {
      onChange(p, 'delete', opts)
    })
    .on('ready', () => {
      process.env.onWatching = true
    })
}

function action(options, p, type) {
  const $options = options.$options || {}
  const exclude = [
    /^\.\w+/,
    'project.config.json',
    'node_modules',
    'antmove.config.js',
    'miniprogram_npm']
  const lifeCycles = options.lifeCycles
  if (lifeCycles.$options) {
    lifeCycles.$options.exclude = exclude
  }
  options.$options.exclude = exclude
  new Transform(options, $options).beforeRun()
  isOnCompiling = false
  console.info('重新编译完成!\n')
}

function onChange(p, type, opts) {
  const $opts = opts.$options
  if (!process.env.onWatching) {
    return false
  }
  if (p.indexOf($opts.dist) !== -1) {
    return false
  }
  if ($opts.ignoreWatchFiles) {
    if ($opts.ignoreWatchFiles[p]) {
      return false
    }
  }
  if (!isOnCompiling) {
    isOnCompiling = true
    opts.isMonitorFiles = true
    console.info('重新编译中:\n')
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      action(opts, p, type)
    }, 300)
  }
}


module.exports = {
  monitorFiles,
}
