const Transform = require('./transform/index.js');
const path = require('path');
module.exports = function () {
    const app = {
        plugins: []
    };

    app.use = function (plugin, options) {
        preprocessOpts(options);
        processEnv(options.env, options);
        app.plugins.push({
            plugin,
            options
        });

        return app;
    };

    app.start = function (cb = () => {}) {
        app.plugins.forEach(function (plugin) {
            new Transform(plugin.plugin, plugin.options).beforeRun(cb);
        });
        
        return app;
    };

    return app;
};

function processEnv (env, options = {}) {
    if (!env) return false;
    if (env === 'dev' || env === 'development') {
        options.env = process.env.NODE_ENV = 'development';
    } else if (env === 'prod' || env === 'production') {
        options.env = process.env.NODE_ENV = 'production';
    }
}

function preprocessOpts (opts = {}) {
    /**
     * process exclude files
     */
    opts.exclude = opts.exclude || [/^\.\w+/];
    if (opts.exclude && Array.isArray(opts.exclude)) {
        opts.exclude.push(/^\.\w+/);
    } else {
        opts.exclude = [opts.exclude];
    }

    // opts.exclude.push(/__antmove/g);
    // opts.exclude.push(opts.dist);   // 排除输出目录
    opts.exclude.push(opts.dist.split(path.sep)[opts.dist.split(path.sep).length-2]);// 排除输出目录

}