const babelPlugins = require('../src/babel/index.js');

function testCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'transformClass testing:',
    babelPlugins.transformClass(`class Bork {
        static a = 'foo';
        static b;
    
        x = 'bar';
        y;
      }`),
    `class Bork {
  constructor() {
    this.x = 'bar';
    this.y = void 0;
  }

}

Bork.a = 'foo';
Bork.b = void 0;`
);
