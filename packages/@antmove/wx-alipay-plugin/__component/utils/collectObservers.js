const {
    observersHandle
} = require('./observerHandle');
function collectObservers (observersObj, options, param) {
    let self  = this;
    for (let key in options.observers) {
        let keyArr = key.split(","); 
        let arr = []; 
        keyArr.forEach( its => {  
            its = its.trim(); 
            let attr = {}; 
            if (its.match(/\./)) {
              let _attr = its.split('.');
              attr = processChildAttr(self.data,_attr)
            } else {
              attr = self.data[its]
            }          
            arr.push(attr);                                  
        });
        keyArr.forEach (its => {
            its = its.trim(); 
            observersObj[its] = Object.create(null);
            observersObj[its].fn = options.observers[key]; 
            observersObj[its].arr = arr;
        }); 
    }
    observersHandle(observersObj, param, self);
}

function processChildAttr (attr,arr) {
  let _ = attr;
  arr.forEach(function (name) {
      _ = _[name];
  })
  return _;
}

module.exports = collectObservers;