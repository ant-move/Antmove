const utils = require('../utils/index.js');

module.exports = {
  processTransformationPage (_opts,options) {
    _opts = Object.assign(_opts,options);
    if ( options.onResize ) {
      console.warn(`There is no onResize life cycle`);

    }
    if ( options.onTabItemTap ) {
      const body = {
        params: {
          index: {
            type: 0,
            desc: "missing"
          },
          pagePath: {
            type: 0,
            desc: "missing"
          },
          text: {
            type: 0,
            desc: "missing"
          }
        }
      };
      _opts.onTabItemTap = function (res) {
        function pre ( params = {} ) {
          return utils.defineGetter(params,body.params,function (obj, prop) {
          console.warn(`onTabItemTap's return value is not support ${prop} attribute!`);
          });
        }
        res = pre(res);       
        return options.onTabItemTap(res);          
      };

    }
  }
} ;