const babelPlugins = require('../src/babel/index.js');

function testCode(testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'behavourHandle testing: ',
    babelPlugins.behavourHandle(`let SmallFourBeh = Behavior({
        properties: {
          name: {
            type: String,
            value: '熊猫',
          },
          type: String
        },
        behaviors:[LargeFourBeh],
        definitionFilter(defFields) {
          defFields.data.from = 'behavior'
        },
      })`),
    `function Behavior (behavior) {
            behavior.$id = Number(new Date()) + String(Math.random()).substring(2,7);
            return behavior;
        }
 let SmallFourBeh = Behavior({
        properties: {
          name: {
            type: String,
            value: '熊猫',
          },
          type: String
        },
        behaviors:[LargeFourBeh],
        definitionFilter(defFields) {
          defFields.data.from = 'behavior'
        },
      }) `  
);