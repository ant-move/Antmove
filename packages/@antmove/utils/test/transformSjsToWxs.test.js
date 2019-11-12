const babelPlugins = require('../src/babel/index.js');

function testCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'transformSjstoWxs testing:',
    babelPlugins.transformSjsToWxs(`const calcCurrent = (propsCurrent, current) => (typeof current === 'number' ? current : propsCurrent);

    export default {
      calcCurrent,
    }`),
    `\"use strict\";

exports[\"default\"] = void 0;

var calcCurrent = function calcCurrent(propsCurrent, current) {
  return typeof current === 'number' ? current : propsCurrent;
};

var _default = {
  calcCurrent: calcCurrent
};
exports[\"default\"] = _default;`
);