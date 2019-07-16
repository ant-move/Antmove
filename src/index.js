const Transform = require('./transform/index.js');

module.exports = function (transformConfig) {

    const {
        entry,
        plugins
    } = transformConfig;

    plugins.forEach(function (plugin) {
        let opts = Object.assign({entry}, transformConfig.options, plugin.options);
        new Transform(plugin.plugin, opts).beforeRun();
    });
};