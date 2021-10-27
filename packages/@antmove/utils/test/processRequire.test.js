const babelPlugins = require('../src/babel/index.js');
const path = require('path');
function testCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'processRequireForWx testing:',
    babelPlugins.processRequireForWx(`const WXApp = require(\'/__antmove_wechat/component/componentClass.js\')(\'App\')`, {
        dirname: `${path.join(__dirname, '../../../../examples/alipay-minapp/')}`, 
        filename: `${path.join(__dirname, '../../../../examples/alipay-minapp/app.js')}`,
        filepath: `${path.join(__dirname, '../../../../examples/alipay-minapp')}`
    }),
    `const WXApp = require("./__antmove_wechat/component/componentClass.js")(\'App\');`
);