if(!self.Map || !self.Set || !self.Symbol) {
    importScripts('https://gw.alipayobjects.com/as/g/appx_release/deps/1.0.3/es6-set-map-symbol.js');
     }
     importScripts(`https://appx/af-appx.worker.min.js`);

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}
