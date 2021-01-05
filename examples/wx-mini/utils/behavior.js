let LargeFourBeh = Behavior({
  data:{
    nba:'科比',
  }
})
let SmallFourBeh = Behavior({
  properties: {
    name: {
      type: String,
      value: '熊猫',
    },
    type: String
  },
  behaviors:[LargeFourBeh],
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