module.exports = function (index) {
    let spilt = '    ';
    let space = '';
    for (let i = 0; i <= index-1; i++) {
        space += spilt;
    }
    return space;
}