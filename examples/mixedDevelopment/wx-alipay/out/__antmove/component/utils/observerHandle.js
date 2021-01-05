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
        let left = {};
        let right = {};
        if (obs.match(/\./)) {
            let _dataArr = obs.split('.');
            left = processChildAttr(args[1],_dataArr);
            right = processChildAttr(that.data,_dataArr);
        } else {
          left = args[1][obs];
          right = that.data[obs];
        }
        if (typeof left ==='object' && typeof right === 'object') {
            let dif = deep(left,right);
            if (dif && typeof observersObj[obs].fn === "function" ) {
                observersObj[obs].fn.call(that, ...observersObj[obs].arr);
            }
        } else if (typeof observersObj[obs].fn === "function" &&left!== right ) {
            observersObj[obs].fn.call(that, ...observersObj[obs].arr);
        }
    });
}

function processChildAttr (attr,arr) {
  let _ = attr;
  arr.forEach(function (name) {
      _ = _[name];
  })
  return _;
}
function deep(args,props) {
    if (args === props === null) return false;
    if (args === null || args === null) return true;
    let isDif = false;
    for (var v in props) {
        if (args.hasOwnProperty(v)) {
            if (typeof args[v] !== typeof props[v]) {
                isDif = true;
                return isDif
            } else if (typeof args[v] === "object" && typeof props[v] === "object" ) {
                deep(args[v],props[v]);
            } else if (typeof args[v] === "Number" || typeof props[v] === "Number") {

            } else if (args[v] !== props[v]) {
                isDif = true;
            }
        } else {
            isDif = true;
            return isDif
        }
    }
    for (var v in args) {
        if (props.hasOwnProperty(v)) {
            if (typeof args[v] !== typeof props[v]) {
                isDif = true;
                return isDif
            } else if (typeof args[v] === "object" || typeof props[v] === "object" ) {
                deep(args[v],props[v]);
            } else if (args[v] !== props[v]) {
                isDif = true;
            }
        } else {
            isDif = true;
            return isDif
        }
    }
    return isDif
}

module.exports = {
    observerHandle,
    observersHandle
}