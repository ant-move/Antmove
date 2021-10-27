const babelPlugins = require('../src/babel/index.js');
function testObjectCode (testName, code01, code02) {
    test (testName || 'testing: ', () => {
        expect (code01).toStrictEqual(code02);
    });
}

testObjectCode(
    'externalForWx testing:',
    babelPlugins.externalForWxFn(`Component({
        externalClasses: ['test-class'],
      });`, { externalClasses: [] }),
    `Component({\n  externalClasses: [\'test-class\']\n});`
);