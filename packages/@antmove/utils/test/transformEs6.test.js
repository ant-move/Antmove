const babelPlugins = require('../src/babel/index.js');

function testCode(testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'transformES6 testing:',
    babelPlugins.transformEs6(`function f(x, ...y) {
        return x * y.length;
      }
      f(3, "hello", true) == 6`),
    `\"use strict\";

function f(x) {
  return x * (arguments.length <= 1 ? 0 : arguments.length - 1);
}

f(3, \"hello\", true) == 6;`
);