
const Transform = require('./transform/index.js')

module.exports = function() {
  const app = {
    plugins: [],
  }

  app.use = function(plugin, options) {
    preprocessOpts(options)
    processEnv(options.env, options)
    app.plugins.push({
      plugin,
      options,
    })

    return app
  }

  app.start = function(cb = () => {}) {
    app.plugins.forEach((plugin) => {
      new Transform(plugin.plugin, plugin.options).beforeRun(cb)
    })

        
    return app
  }

  return app
}

function processEnv(env, options = {}) {
  if (!env) { return false }
  if (env === 'dev' || env === 'development') {
    options.env = 'development'
    process.env.NODE_ENV = 'development'
  } else if (env === 'prod' || env === 'production') {
    options.env = 'production'
    process.env.NODE_ENV = 'production'
  }
}

function preprocessOpts(opts = {}) {
  /**
     * process exclude files
     */

  opts.exclude = opts.exclude || [/^\.\w+/]
  if (opts.exclude && Array.isArray(opts.exclude)) {
    opts.exclude.push(/^\.\w+/)
  } else {
    opts.exclude = [opts.exclude]
  }
  // 排除输出目录
  opts.exclude.push(opts.dist)
}
