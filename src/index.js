const Transform = require('./transform/index.js');
const chalk = require('chalk');

module.exports = function () {
    const app = {
        plugins: []
    };

    app.use = function (plugin, options) {
        processEnv(options.env, options);
        app.plugins.push({
            plugin,
            options
        });

        return app;
    };

    app.start = function () {
        app.plugins.forEach(function (plugin) {
            new Transform(plugin.plugin, plugin.options).beforeRun();
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
    } else {
        console.log(chalk('Invalid env value, use production instead.'));
    }
}