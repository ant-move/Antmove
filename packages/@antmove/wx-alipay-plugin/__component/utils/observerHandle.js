function observerHandle (observerObj, args, that, isInit = false) {
    Object.keys(observerObj).forEach(function (obs) {  
        if (isInit && !equals(args.props[obs], that.props[obs]) && typeof observerObj[obs] === 'function') {
            observerObj[obs].call(that, that.props[obs], args.props[obs]); 
        }  else if (!isInit &&!equals(args[0][obs], that.props[obs]) && typeof observerObj[obs] === 'function') {
            observerObj[obs].call(that, that.props[obs], args[0][obs]);      
        } 

    });
}

function observersHandle (observersObj, args, that) {
    Object.keys(observersObj).forEach(function (obs) {
        let left = {};
        let right = {};
        if (obs.match(/\./)) {
            let _dataArr = obs.split('.');
            left = processChildAttr(args[1], _dataArr);
            right = processChildAttr(that.data, _dataArr);
        } else {
            left = args[1][obs];
            right = that.data[obs];
        }
        let dif = equals(left, right);
        if (!dif) {
            observersObj[obs].fn.call(that, ...observersObj[obs].arr);
        }

    });
}

function processChildAttr (attr, arr) {
    let _ = attr;
    arr.forEach(function (name) {
        _ = _[name];
    });
    return _;
}


const equals = function (x, y) { 
    if (x===y) { 
        return true; 
    } 
   
    if (!(x instanceof Object) || ! (y instanceof Object)) { 
        return false; 
    } 
    if (x.constructor!==y.constructor) { 
        return false; 
    } 
    
    for (var p in x) { 
        if (x.hasOwnProperty(p)) { 
            if (! y.hasOwnProperty(p)) { 
                return false; 
            } 
   
            if (x[p]===y[p]) { 
                continue; 
            } 
   
            if (typeof( x[ p ] ) !== "object") { 
                return false; 
            } 
            if (!equals(x[p], y[p])) { 
                return false; 
            } 
        } 
    } 
   
    for (p in y) { 
        if (y.hasOwnProperty(p) && ! x.hasOwnProperty(p)) { 
            return false; 
        } 
    } 
    return true; 
};

module.exports = {
    observerHandle,
    observersHandle
};