require('./index$.worker.js');(function () {
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