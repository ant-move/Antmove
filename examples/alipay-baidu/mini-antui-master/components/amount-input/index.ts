import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    type: 'number',
    className: '',
    focus: false,
    placeholder: '',
    value: '',
    controlled: false,
  },
  data: {
    _focus: false,
  },
  methods: {
    onInput(e) {
      const event = fmtEvent(this.props, e);
      if (this.props.onInput) {
        this.props.onInput(event);
      }
    },
    onConfirm(e) {
      const event = fmtEvent(this.props, e);
      if (this.props.onConfirm) {
        this.props.onConfirm(event);
      }
    },
    onButtonClick() {
      if (this.onButtonClick) {
        this.props.onButtonClick();
      }
    },
    onFocus(e) {
      this.setData({
        _focus: true,
      });
      const event = fmtEvent(this.props, e);
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    },
    onBlur(e) {
      this.setData({
        _focus: false,
      });
      const event = fmtEvent(this.props, e);
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    },
    onClearTap() {
      if (this.props.onClear) {
        this.props.onClear('');
      }
    },
  },
});
