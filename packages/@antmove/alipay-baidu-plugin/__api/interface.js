/**
 *  界面
 * */
const descObj = require("./desc.js");
const apiObj = {
  
    setNavigationBar: {

        fn (obj) {
            let {
                title,
                backgroundColor,
            } = obj;
          
            if (title) {
                swan.setNavigationBarTitle({title: title});
            }
            if (backgroundColor) {
                let newObj = {
                    frontColor: '#ffffff',
                    backgroundColor
                }
                swan.setNavigationBarColor(newObj);
            }
            
            obj.success&&obj.success();
            
            Object.keys(obj).map(key => {
                if (descObj.setNavigationBar.body.params.props[key].type===0) {
                    console.warn(`参数${key}不支持`);
                }
            });


        }
        
    },
    alert: {
        fn (obj) {
            swan.showModal({
                ...obj,
                showCancel: false
            });
        }
    },
    showToast: {
        fn (obj) {
            (!obj.icon) && (obj.icon = 'none');
            obj.title =  obj.content;
            delete obj.content;

            let duration = 2000;
            if (obj.duration) {
                duration = obj.duration;
            }
        
            swan.showToast({
                ...obj,
                success: function () {
                    setTimeout(function () {
                        obj.success && obj.success();
                    }, duration);
                },
                fail: function () {
                    setTimeout(function () {
                        obj.fail && obj.fail();
                    }, duration);
                },
                showCancel: false
            });
        }
    },
    confirm: {
        fn (obj) {
            obj.cancelText = obj.cancelButtonText;
            obj.confirmText = obj.confirmButtonText;
            delete obj.cancelButtonText;
            delete obj.confirmButtonText;
            swan.showModal({
                ...obj
            })
        }
    },
    hideLoading: {
        fn () {
            swan.hideLoading();
        }
    },
    showActionSheet: {
        fn (obj) {
            const newObj = Object.assign({},obj);
            newObj.itemList = newObj.items;
            delete newObj.items;
            const successFn = newObj.success;
            delete newObj.success;
            swan.showActionSheet({
                ...newObj,
                success (res) {
                    res.index = res.tapIndex;
                    successFn(res);
                }
            });
            Object.keys(obj).map(key => {
                if (descObj.showActionSheet.body.params.props[key].type===0) {
                    console.warn(`参数${key}不支持`);
                }
            });
            
        }
    },
    showLoading: {
        fn (obj) {
            const newObj = Object.assign({},obj);
            newObj.title = newObj.content;
            const delay = newObj.delay||0;
            delete newObj.content;
            delete newObj.delay;
            setTimeout(()=>{
                swan.showLoading({
                    ...newObj
                });
            },delay);

        }
    },
    createAnimation: {
        fn (obj) {
            obj.timingFunction = obj.timeFunction;
            delete obj.timeFunction;
            return swan.createAnimation({...obj});
        }
    },
    createMapContext: {
        fn (obj) {
            const mapContext = swan.createMapContext(obj);
            Object.keys(descObj.createMapContext.body.returnValue.props).map(key => {
                if (descObj.createMapContext.body.returnValue.props[key].type===0) {
                    mapContext[key] = () => {
                        console.warn(`参数${key}不支持`);
                    };
                    console.warn(`参数${key}不支持`);
                }
            });
            return mapContext;
        }
    },

    





};
module.exports = apiObj;