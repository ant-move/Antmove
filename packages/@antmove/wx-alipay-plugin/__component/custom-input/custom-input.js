const processDataSet = require('../utils/processDataSet')

Component({
  props: {
    value: '',
    type: '',
    password: false,
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    confirmType: 'done',
    confirmHold: false,
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    name: '',
    onInput: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onConfirm: () => {},
    onTap: () => {},
    catchTap: () => {},
  },
  methods: {
    inputHandler(e) {
      if (this.props.onInput) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onInput(tapEvent)
      }
    },
    focusHandler(e) {
      if (this.props.onFocus) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onFocus(tapEvent)
      }
    },
    blurHandler(e) {
      if (this.props.onBlur) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onBlur(tapEvent)
      }
    },
    bindconfirmHandler(e) {
      if (this.props.onConfirm) {
        const tapEvent = processDataSet(e, this.props)
        this.props.onConfirm(tapEvent)
      }
    },
    tapHandler(e) {
      const tapEvent = processDataSet(e, this.props)
      this.props.onTap && this.props.onTap(tapEvent)
    },
    catchtapHandler(e) {
      const tapEvent = processDataSet(e, this.props)
      this.props.catchTap && this.props.catchTap(tapEvent)
    },
  },
})
