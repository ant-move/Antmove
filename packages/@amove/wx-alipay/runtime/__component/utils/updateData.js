function updateData (param) {
    let ctx = this;
    if (typeof ctx.properties === 'object') {
        ctx.properties.name = ctx.properties.name || '';
        ctx.properties.value = ctx.properties.value || null;
        Object.keys(ctx.properties)
            .forEach((item) => {
                // didupdate
                if (param && param[0][item] === this.props[item]) return false;
                if (ctx.props[item] !== undefined && typeof ctx.props[item] !== 'function' && item[0] !== '$' && ctx.data[item] !== ctx.props[item]) {
                    
                    ctx.setData({
                        [item]: ctx.props[item]
                    });
                }
            });
    }
  
}

module.exports = updateData;