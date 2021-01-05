if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
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
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/discovery/discovery?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/notify/notify?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/chat/chat?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/more/more?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/answer/answer?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/question/question?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ant-move-runtime-logs/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ant-move-runtime-logs/specific/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}