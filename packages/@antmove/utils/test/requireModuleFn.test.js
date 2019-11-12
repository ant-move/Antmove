const babelPlugins = require('../src/babel/index.js');

function testCode(testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'requireModuleFn testing: ',
    babelPlugins.requireModuleFn(`const config = require(\"./config\");`,  {} ),
    `const config = require("./config");`
);