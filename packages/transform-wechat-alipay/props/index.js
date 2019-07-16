module.exports = function (key, value) {
    let newKey = key.replace(/wx:/, 'a:');

    return {
        key: newKey,
        value
    };
};