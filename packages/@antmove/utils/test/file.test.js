const Plugins = require('../index.js');
const path = require('path');
function testStringCode (testName, code01, code02) {
    // eslint-disable-next-line no-undef
    test(testName || 'testing: ', () => {
        // eslint-disable-next-line no-undef
        expect(code01).toBe(code02);
    });
}
function testObjectCode (testName, code01, code02) {
    // eslint-disable-next-line no-undef
    test(testName || 'testing: ', () => {
        // eslint-disable-next-line no-undef
        expect(code01).toStrictEqual(code02);
    });
}

testObjectCode(
    'parserDirInfo testing:',
    Plugins.parserDirInfo({
        dist:
            `${path.join(__dirname, '../../../../examples/out/')}`,
        entry:
            `${path.join(__dirname, '../../../../examples/filetest/')}`,
        input:
            `${path.join(__dirname, '../../../../examples/filetest/')}`,
        output:
            `${path.join(__dirname, '../../../../examples/out/')}`,
        env: 'development',
        remote: undefined,
        component2: true,
        platform: 'alipay',
        scope: true,
        defaultInput:
            `${path.join(__dirname, '../../../../examples/filetest/')}`,
        type: 'wx-alipay',
        component: false,
        exclude:
            [/^\.\w+/,
                /^\.\w+/,
                `${path.join(__dirname, '../../../../examples/out/')}`,
                'project.config.json',
                'node_modules',
                'antmove.config.js'],
        dirpath:
            `${path.join(__dirname, '../../../../examples/filetest/')}`,
    }, function (info) {
    }),
    [ { type: 'file',
        path:
        `${path.join(__dirname, '../../../../examples/filetest/app.js')}`,
        filename: 'app.js',
        extname: '.js',
        dirname:
        `${path.join(__dirname, '../../../../examples/filetest')}`,
        basename: 'app',
        children: null,
        parent: null,
        deep: 0,
        entry:
        `${path.join(__dirname, '../../../../examples/filetest/')}`,
        packageInfo: null } ]

);
testObjectCode(
    'parserFileInfo testing:',
    Plugins.parserFileInfo(
        `${path.join(__dirname, '../../../../examples/wx-mini/app.js')}`,
        0,
        `${path.join(__dirname, '../../../../examples/wx-mini/')}`,
        {
            type: 'file',
            path:
            `${path.join(__dirname, '../../../../examples/wx-mini/app.js')}`,
            filename: 'app.js',
            extname: '.js',
            dirname:
            `${path.join(__dirname, '../../../../examples/wx-mini')}`,
            basename: 'app',
            children: null,
            parent:
            `${path.join(__dirname, '../../../../examples/wx-mini/')}`,
            deep: 0
        }),
    { type: 'file',
        path:
        `${path.join(__dirname, '../../../../examples/wx-mini/app.js')}`,
        filename: 'app.js',
        extname: '.js',
        dirname:
        `${path.join(__dirname, '../../../../examples/wx-mini')}`,
        basename: 'app',
        children: null,
        parent:
        `${path.join(__dirname, '../../../../examples/wx-mini/')}`,
        deep: 0 }
);
testStringCode(
    'emptyFiles testing:',
    Plugins.emptyFiles(
        `${path.join(__dirname, '../../../../examples/filetest')}`,
        ['app.js']),
    
);