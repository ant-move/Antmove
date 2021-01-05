if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../components/add-button/add-button');
require('../../pages/index/index');
require('../../pages/todos/todos');
require('../../pages/add-todo/add-todo');
require('../../pages/animation/animation');
require('../../pages/map/map');
require('../../pages/file/file');
require('../../pages/lifeCircle/lifeCircle');
require('../../pages/form/form');
require('../../pages/chooseAddress/chooseAddress');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}