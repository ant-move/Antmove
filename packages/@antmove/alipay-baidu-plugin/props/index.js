module.exports = function (key, value) {
    let newKey = key.replace(/a:/, 's-');

    return {
        key: newKey,
        value
    };
};