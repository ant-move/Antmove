module.exports = {
  ComponentBehavior(node) {
    const originCode = this.$node.content
    if (/\s*Behavior/.test(originCode) || /=Behavior/.test(originCode)) {
      this.$node.content = `function Behavior (behavior) {
                behavior.$id = Number(new Date()) + String(Math.random()).substring(2,7);
                return behavior;
            }\n ${originCode} `
    }
  },
}
