function processMethods (_opts = {}) {
    let methods = {};
    Object.keys(_opts.methods || {})
        .forEach(function (method) {
            let fn = _opts.methods[method];
            methods[method] = function (...p) {  
                if (p[0] && typeof p[0] === 'object' && p[0].timeStamp && p[0].target) {
                    this._currentEvent = p[0];
                }              
                return fn.apply(this, p);
            };
        });
    _opts.methods = methods;
    
    return _opts;
}

module.exports = processMethods;