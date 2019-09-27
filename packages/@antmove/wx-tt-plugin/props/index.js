module.exports = function (key, value) {
    let newKey = key.replace(/wx:/, 'tt:');

    return {
        key: newKey,
        value
    };
};