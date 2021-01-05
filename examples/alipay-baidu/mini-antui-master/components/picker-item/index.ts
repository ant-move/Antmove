import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    className: '',
    value: '',
    placeholder: '',
    onSelect: () => {},
    labelCls: '',
    pickerCls: '',
  },
  methods: {
    onPickerTap(e) {
      const event = fmtEvent(this.props, e);
      this.props.onPickerTap(event);
    },
  },
});
