function handleAfterInit () {
    let classStr = '';
    this.data.__classNames
        .forEach((key) => {
            classStr += (this.props[key] || '');
        });
    this.setData({
        _classes: classStr
    });
}

module.exports = handleAfterInit;