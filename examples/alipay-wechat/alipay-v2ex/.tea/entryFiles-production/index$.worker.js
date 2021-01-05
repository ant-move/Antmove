if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;



function success() {
require('../../app');
require('../../__antmove/component/custom-loading/custom-loading');
require('../../pages/latest/latest');
require('../../pages/hotest/hotest');
require('../../pages/node/node');
require('../../pages/topicList/topicList');
require('../../pages/detail/detail');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}