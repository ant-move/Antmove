function createCustomEvent(props = {}) {
  const e = {
    target: {
      dataset: {},
    },
    currentTarget: {
      dataset: {},
      // 组件的id
      id: props.id,
    },
  }

  Object.keys(props)
    .forEach((prop) => {
      if (prop.match(/^data-/)) {
        const originProp = prop
        prop = prop.replace(/[A-Z]/g, ($) => {
          return $.toLowerCase()
        })


        prop = prop.split('-')
        prop.shift()
        prop = prop.join('')
        e.target.dataset[prop] = props[originProp]
        e.currentTarget.dataset[prop] = props[originProp]
      }
    })
  return e
}

function processTriggerEvent() {
  this.triggerEvent = function(event, data) {
    const eventType = (event[0].toLowerCase() + event.substring(1))
    event = `on${event[0].toUpperCase()}${event.substring(1)}`

    const e = createCustomEvent(this.props)

    e.type = eventType
    e.detail = data
    event = event.replace(/-\w+/, (name) => {
      name = name[1].toUpperCase() + name.substring(2)
      return name
    })

    if (typeof this.props[event] === 'function') {
      this.props[event](e)
    }
  }
}

module.exports = processTriggerEvent
