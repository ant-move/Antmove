const Plugins = require('../src/index.js');

function testCode (testName, code01, code02) {
    // eslint-disable-next-line no-undef
    test(testName || 'testing: ', () => {
        // eslint-disable-next-line no-undef
        expect(code01).toBe(code02);
    });
}

testCode(
    'getVersion testing:',
    Plugins.prettierCode(`Component({
        externalClasses: ['test-class'],
      });`),
    `Component({\n    externalClasses: ["test-class"]\n});\n`
);

testCode(
    'getVersion testing:',
    Plugins.precessRelativePathOfCode(`<view class='button'>
    <image src='/image/2.png'/>
    </view>`, '/Users/liuxiaoyan/Desktop/project/transform-framework/examples/wx-mini/pages/component/testTwo/button/button.wxml', '/Users/liuxiaoyan/Desktop/project/transform-framework/examples/wx-mini/', false),
    `<view class=\'button\'>\n    <image src=\'/image/2.png\'/>\n    </view>`
);

testCode(
    'getVersion testing:',
    Plugins.precessAbsolutePathOfCode(`<view class='button'>
    <image src='../image/2.png'/>
    </view>`, '/Users/liuxiaoyan/Desktop/project/transform-framework/examples/wx-mini/pages/component/testTwo/button/button.wxml', '/Users/liuxiaoyan/Desktop/project/transform-framework/examples/wx-mini/'),
    `<view class=\'button\'>\n    <image src=\'../image/2.png\'/>\n    </view>`
);
