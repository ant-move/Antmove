const Plugins = require('../index.js');

function testStringCode (testName, code01, code02) {
    // eslint-disable-next-line no-undef
    test(testName || 'testing: ', () => {
        // eslint-disable-next-line no-undef
        expect(code01).toBe(code02);
    });
}
testStringCode(
    'isTypeFile testing:',
    Plugins.isTypeFile('.html', 'index.html'),
    true
);

testStringCode(
    'transformStr testing:',
    Plugins.transformStr('Canvas-context'),
    `canvas-context`
);