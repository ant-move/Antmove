const Plugins = require('../src/index.js');
function testObjectCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toStrictEqual(code02);
    });
}

testObjectCode(
    'defineGetter testing:',
    Plugins.defineGetter({
        path: "page/component/index",
        scene: '123'
    }, {
        scene: {
            type: 0,
            desc: "missing"
        },
        shareTicket: {
            type: 0,
            desc: "missing"
        }
    }, function () {}),
    { path: 'page/component/index', scene: '123' }
);