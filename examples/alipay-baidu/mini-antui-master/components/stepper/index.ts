Component({
  data: {
    opaReduce: 1,
    opaAdd: 1,
  },
  props: {
    className: '',
    min: 0,
    max: 100000,
    disabled: false,
    value: 10,
    readOnly: false,
    showNumber: false,
    step: 1,
    onChange: () => {},
  },
  didMount() {
    const { value, min, max } = this.props;
    this.setData({
      value: Math.min(Math.max(min, value), max),
    });
  },
  didUpdate(preProps) {
    const { value, min, max } = this.props;
    if (preProps.value !== value) {
      const newValue = Math.min(Math.max(min, value), max);
      this.setData({
        value: newValue,
      });
      this.resetFn(newValue);
    }
  },
  methods: {
    changeFn(ev) {
      const { min, max, onChange, disabled, step } = this.props;
      const evType = ev.target.dataset.type;
      let { opaReduce, opaAdd, value } = this.data;
      if (!disabled) {
        if (evType === 'reduce') {
          if (value > min) {
            opaAdd = 1;
            value = Math.max(min, this.getCalculateValue('reduce', (+value), (+step)));
            opaReduce = value === min ? 0.4 : 1;
          }
        } else {
          /* eslint-disable no-lonely-if */
          if (value < max) {
            opaReduce = 1;
            value = Math.min(this.getCalculateValue('add', (+value), (+step)), max);
            opaAdd = value === max ? 0.4 : 1;
          }
        }
        this.setData({
          value,
          opaAdd,
          opaReduce,
        });
        onChange(value);
      }
    },
    onBlur(event) {
      const { value } = event.detail;
      this.resetFn(value);
    },
    resetFn(value) {
      const { max, min, onChange } = this.props;
      let calculatedVal = value;
      let opaAdd = 1;
      let opaReduce = 1;
      if (value >= max) {
        calculatedVal = max;
        opaAdd = 0.4;
      } else if (value <= min) {
        calculatedVal = min;
        opaReduce = 0.4;
      }
      this.setData({
        value: calculatedVal,
        opaAdd,
        opaReduce,
      });
      onChange(calculatedVal);
    },
    getCalculateValue(type, arg1, arg2) {
      const numFloat = arg1.toString().split('.')[1] || '';
      const num2Float = arg2.toString().split('.')[1] || '';
      const length = Math.max(numFloat.length, num2Float.length);
      const times = 10 ** length;
      return type === 'reduce' ? (((+arg1) * times - (+arg2) * times) / times).toFixed(length) : (((+arg1) * times + (+arg2) * times) / times).toFixed(length);
    },
  },
});
