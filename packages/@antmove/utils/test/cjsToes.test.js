const babelPlugins = require('../src/babel/index.js');

function testCode(testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'cjsToes testing: ',
    babelPlugins.cjsToes(`module.exports = ({types: t})`),
    `export default {
  types: t
};`
);