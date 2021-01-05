const utils = require('../utils/index.js');

module.exports = {
  processTransformationApp (_opts,options) {
    _opts = Object.assign(_opts,options);
    if (options.onPageNotFound) {
      console.warn(`There is no onPageNotFound life cycle`);

    }
    if (options.onLaunch) { 
      const body = {
        params: {
          scene: {
            type: 0,
            desc: "missing"
          },
          shareTicket: {
            type: 0,
            desc: "missing"
          }
        }
      };
      _opts.onLaunch = function (res) {
        function pre ( params = {} ) {
          return utils.defineGetter(params,body.params,function (obj, prop) {
          console.warn(`onLauch's return value is not support ${prop} attribute!`);
          });
        }
          res = pre(res);  
          return options.onLaunch(res);            
      };

    }
    if (options.onShow) {
      const body = {
        params: {
          scene: {
            type: 0,
            desc: "missing"
          },
          shareTicket: {
            type: 0,
            desc: "missing"
          }
        }
      };
      _opts.onShow = function (res) {
        function pre (params = {} ) { 
          return utils.defineGetter(params,body.params,function (obj, prop) {
          console.warn(`onShow's return value is not support ${prop} attribute!`);
          });
        }
          res = pre(res);            
          return options.onShow(res);           
      };
    
    }
    if (options.onHide) {
      _opts.onHide = options.onHide;
    }
    if (options.onError) {
      _opts.onError = options.onError;
    }

    // compiler meta data
    _opts.__platform__ = 'alipay';
  }
};