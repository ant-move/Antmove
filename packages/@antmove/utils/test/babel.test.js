const babelPlugins = require('../src/babel/index.js');

function testCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'crossCodeFn testing: ',
    babelPlugins.ifProcessHandleFn(`const name = wx.__target__ === 'alipay' ? 'alipay' : 'wx'`),
    `const name = 'alipay';`
);

testCode(
    'crossCodeFn testing: ',
    babelPlugins.ifProcessHandleFn(`const name = wx.__target__ === 'wx' ? 'alipay' : wx + 'wx';`),
    `const name = wx + 'wx';`
);
