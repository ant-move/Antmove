const babelPlugins = require('../src/babel/index.js');

function testCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    `minifyObjectHandleFn testing`,
    babelPlugins.minifyObjectHandleFn(`var obj = {a: 1, b:1}`, {a: true}),
    `var obj = {
  a: 1
};`
);