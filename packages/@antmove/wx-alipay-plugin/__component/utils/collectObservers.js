const {
    observersHandle
} = require('./index');
function collectObservers (observersObj, options, param) {
    let self  = this;
    for (let key in options.observers) {
        let keyArr = key.split(","); 
        let arr = []; 
        keyArr.forEach( its => {  
            its = its.trim();               
            arr.push(self.data[its]);  
                                   
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

module.exports = collectObservers;