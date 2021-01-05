Component({
  props: {
    className: '',
    placeholder: '',
    focus: false,
  },
  data: {
    _value: '',
    focus: false,
  },
  didMount() {
    this.setData({
      _value: ('value' in this.props) ? this.props.value : '',
      focus: this.props.focus,
    });
  },
  didUpdate() {
    if (('value' in this.props) && this.props.value !== this.data._value) {
      this.setData({
        _value: this.props.value,
      });
    }
  },
  methods: {
    handleInput(e) {
      const { value } = e.detail;

      if (!('value' in this.props)) {
        this.setData({
          _value: value,
        });
      }

      if (this.props.onInput) {
        this.props.onInput(value);
      }
    },
    handleClear() {
      // this.setData({
      //   focus: true,
      // });

      if (!('value' in this.props)) {
        this.setData({
          _value: '',
        });
      }

      this.doClear();
    },
    doClear() {
      if (this.props.onClear) {
        this.props.onClear('');
      }

      if (this.props.onChange) {
        this.props.onChange('');
      }
    },
    handleFocus() {
      this.setData({
        focus: true,
      });

      if (this.props.onFocus) {
        this.props.onFocus();
      }
    },
    handleBlur() {
      this.setData({
        focus: false,
      });

      if (this.props.onBlur) {
        this.props.onBlur();
      }
    },
    handleCancel() {
      if (!('value' in this.props)) {
        this.setData({
          _value: '',
        });
      }

      if (this.props.onCancel) {
        this.props.onCancel();
      } else {
        this.doClear();
      }
    },
    handleConfirm(e) {
      const { value } = e.detail;

      if (this.props.onSubmit) {
        this.props.onSubmit(value);
      }
    },
  },
});
