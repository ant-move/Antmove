const { useReducer } = require('@amove/next')

useReducer({
  ...require('./runGenerateBundleApi'),
  ...require('./generateWrapComponents'),
  ...require('./runGenerateBundleComponent'),
  ...require('./generateMiniProjectJson'),
})
