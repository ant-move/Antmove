const Plugins = require('../index.js');
const path = require('path');
function testObjectCode (testName, code01, code02) {
    // eslint-disable-next-line no-undef
    test(testName || 'testing: ', () => {
        // eslint-disable-next-line no-undef
        expect(code01).toStrictEqual(code02);
    });
}
testObjectCode(
    'transformPackage testing:',
    Plugins.transformPackage({
        type: 'file',
        path:
            `${path.join(__dirname, '../../../../examples/wx-mini/package.json')}`,
        filename: 'package.json',
        extname: '.json',
        dirname:
            `${path.join(__dirname, '../../../../examples/wx-mini')}`,
        basename: 'package',
        children: null,
        parent: null,
        deep: 0,
        entry:
            `${path.join(__dirname, '../../../../examples/wx-mini/')}`,
        dist:
            `${path.join(__dirname, '../../../../examples/out/package.json')}`,
        output:
            `${path.join(__dirname, '../../../../examples/out/')}`,
        packageInfo: { dependencies: { 'vant-weapp': '^0.5.22' } }
    }),
    '{\n    "dependencies": {\n        "vant-aliapp": "1.0.14"\n    }\n}'
);