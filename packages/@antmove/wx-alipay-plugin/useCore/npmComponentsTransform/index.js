const Transform = require('@antmove/core/transform')

function componentsTransform(plugin, opts) {
  const $options = plugin.$options || {}
  const exclude = [
    /^\.\w+/,
    'project.config.json',
    'node_modules',
    'antmove.config.js',
    'miniprogram_npm',
    'mini.project.json',
    ...opts.exclude,
  ]
  const lifeCycles = plugin.lifeCycles
  if (lifeCycles.$options) {
    lifeCycles.$options.exclude = exclude
    lifeCycles.$options.output = opts.output
    lifeCycles.$options.dist = lifeCycles.$options.output
    lifeCycles.$options.input = opts.input
    lifeCycles.$options.entry = lifeCycles.$options.input
  }
  $options.exclude = exclude
  $options.output = opts.output
  $options.dist = $options.output
  $options.input = opts.input
  $options.entry = $options.input
  $options.isNpmComponent = true
  $options.component = 'component'
  $options.watch = false
  new Transform(plugin, $options).beforeRun()
}

module.exports = componentsTransform
