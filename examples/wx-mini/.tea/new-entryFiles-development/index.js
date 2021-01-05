require('./index$.web.js');
(function () {
  function getBridge() {
    return Object.assign(
      {},
      window.ideMockBridge,
      {
        startupParams: { debug: "false", allowEval: 1 },
      },
    );
  }

  function onReady(callback) {
    callback({
      bridge: getBridge(),
    });
  }

  window.bootstrapApp({
    onReady: onReady,
    worker: 'index.worker.js?version=222222',
  });

  const depCaches={};

  window.placeholderFactory = function (dep) {
    if(depCaches[dep]){
      return depCaches[dep];
    }
    depCaches[dep] = function (props) {
      return React.createElement('div', {
        style: {
          background: 'red',
          color: '#fff',
          fontWeight: 'bold'
        }
      }, `<${dep}> 元素不存在，请检查你的代码`);
    };
    return depCaches[dep];
  };
})();