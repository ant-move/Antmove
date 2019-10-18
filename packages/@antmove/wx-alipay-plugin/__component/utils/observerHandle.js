function observerHandle (observerObj, args, that,isInit = false) {
    Object.keys(observerObj).forEach(function (obs) {       
        if (isInit && that.props[obs] === undefined ) return false;
        if (args[0][obs] !== that.props[obs] && typeof observerObj[obs] === 'function') { 
            observerObj[obs].call(that, that.props[obs], args[0][obs]);
        }
    });
}

function observersHandle (observersObj, args, that) {
    Object.keys(observersObj).forEach(function (obs) {
        if (typeof observersObj[obs].fn === 'function' && args[1][obs] !== that.data[obs] ) {
            observersObj[obs].fn.call(that, ...observersObj[obs].arr);
        }
    });
}

module.exports = {
    observerHandle,
    observersHandle
}