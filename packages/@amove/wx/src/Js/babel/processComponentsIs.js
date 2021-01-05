module.exports = {
  processComponentIs(node) {
    const { code, isPath } = node
    if (isPath) {
      this.$node.content = `
            my.setStorageSync({
                key: 'activeComponent',
                data: {
                    is: '${isPath}'
                }
            })\n
            ${code}`
    }
  },
}
