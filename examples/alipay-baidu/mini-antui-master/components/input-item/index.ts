import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: false, // 是否带清除功能
    syncInput: false,
    enableNative: false, // 兼容安卓input的输入bug
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {},
  },
  data: {
    _focus: false,
  },
  didMount() {
    this.setData({
      _focus: this.props.focus,
    });
  },
  methods: {
    onBlur(e) {
      this.setData({
        _focus: false,
      });
      const event = fmtEvent(this.props, e);
      this.props.onBlur(event);
    },
    onConfirm(e) {
      const event = fmtEvent(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus(e) {
      this.setData({
        _focus: true,
      });
      const event = fmtEvent(this.props, e);
      this.props.onFocus(event);
    },
    onInput(e) {
      const event = fmtEvent(this.props, e);
      this.props.onInput(event);
    },
    onClear(e) {
      const event = fmtEvent(this.props, e);
      this.props.onClear(event);
    },
  },
});
