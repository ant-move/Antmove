// const utils = require('../utils')

module.exports = {
  processTransformationComponent (_opts,options) {  
    _opts = Object.assign(_opts,options);
    let _life = {};
    if (options && options.lifetimes) {
      _life = options.lifetimes;
  
    } else if (options) {
      _life = options;
      
    }
    let arr = [];
      if (_life.created) {
        arr.push(_life.created);
  
      }
      if (_life.attached) {
        arr.push(_life.attached);
  
      }
      if (_life.ready) {
        arr.push(_life.ready);
  
      }
      if (_life.detached) {
        _opts.didUnmount = _life.detached;
  
      }
      if (_life.error) { 
        console.warn(`There is no error life cycle`);
  
      }
      if (_life.moved) {
        console.warn(`There is no moved life cycle`);
  
      }
  
    _opts.didMount = function () {
      let l = arr.length ;
      for ( let m = 0 ; m < l ; m ++ ) {
        arr[m].call(this);
      }
    };
  
    if ( options.pageLifetimes) {
        console.warn(`There is no page life cycle where the component resides,including(show,hide,resize)`);
    }
  }
};