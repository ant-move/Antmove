const babelPlugins = require('../src/babel/index.js');

function testCode(testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'ConstructorHandle testing: ',
    babelPlugins.ConstructorHandle(`App({
        onShow(opts) {
            console.log('App Show', opts)
        }
      })`, {
        targetName: '_'
    }),
`_App({
  onShow(opts) {
    console.log('App Show', opts);
  }

});`
);