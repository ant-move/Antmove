/**
 * 把props的data属性，处理成dataset
 * { 'data-alpha-beta': 3 }
 * { alphaBeta: 3 }
 */
function processDataSet(e, props = {}) {
  if (e.timeStamp === undefined) {
    e = {
      ...e,
      target: {
        dataset: {},
      },
      currentTarget: {
        dataset: {},
      },
    }
  }
  Object.keys(props)
    .forEach((prop) => {
      const matched = prop.match(/^data-(.+)/)

      if (matched) {
        const key = matched[1].replace(/-(\w)/, ($0, $1) => {
          return $1.toUpperCase()
        })

        e.target.dataset[key] = props[prop]
        e.currentTarget.dataset[key] = props[prop]
      }
    })
  return e
}

module.exports = processDataSet
