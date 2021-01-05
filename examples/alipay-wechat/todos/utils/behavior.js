let SmallFourBeh = Behavior({
  properties: {
    name: {
      type: String,
      value: '熊猫',
    },
    type: String
  },
  definitionFilter(defFields) {
    defFields.data.from = 'behavior'
  },
})
const initialState = {
  data: {
    age: 30,
  },
  props: {
    age: 20
  }
};
export { SmallFourBeh,initialState }