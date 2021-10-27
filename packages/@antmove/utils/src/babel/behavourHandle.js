module.exports = function(originCode) {
  if (/\s*Behavior/.test(originCode) || /=Behavior/.test(originCode)) {
    originCode = `function Behavior (behavior) {
            behavior.$id = Number(new Date()) + String(Math.random()).substring(2,7);
            return behavior;
        }\n ${originCode} `
  }
  return originCode
}
 
