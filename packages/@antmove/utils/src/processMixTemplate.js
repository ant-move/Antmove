module.exports  = function processMixTemplate ( type = 'alipay', tag ) {
    let typeArr = ['is-wx','is-alipay'];
    let isTrue = true;
    typeArr.forEach(v => {
        if (tag.props && tag.props[v]) isTrue = false;
    })
    if (isTrue) return true
    if (tag.props[`is-${type}`]) {
        typeArr.forEach(v => {
            if (tag.props[v]) delete tag.props[v]
        })           
        return true
    }
    return false
}