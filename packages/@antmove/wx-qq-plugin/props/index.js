module.exports = function (key, value) {
    let newKey = key.replace(/wx:/, 'qq:');

    return {
        key: newKey,
        value
    };
};