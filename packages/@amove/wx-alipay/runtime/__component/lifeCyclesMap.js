/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 */

module.exports = {
  Component: {
    created: {
      type: 1,
      name: 'onInit',
    },
  },
}
