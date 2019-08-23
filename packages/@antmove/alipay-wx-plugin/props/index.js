module.exports = function (key, value) {
    let newKey = key.replace(/a:/, 'wx:');

    return {
        key: newKey,
        value
    };
};