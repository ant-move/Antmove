Page({
  data: {
    items: [
      { checked: true, disabled: false, value: 'a', title: '复选框-默认选中', id: 'checkbox1' },
      { checked: false, disabled: false, value: 'b', title: '复选框-默认未选中', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: '复选框-默认选中disabled', id: 'checkbox3' },
      { checked: false, disabled: true, value: 'd', title: '复选框-默认未选中disabled', id: 'checkbox4' },
    ],
    items2: [
      { name: 'react', value: 'React', checked: true },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true },
    ],
  },
  onSubmit(e) {
    my.alert({
      content: `你选择的框架是 ${e.detail.value.libs.join(', ')}`,
    });
  },
  onReset() {},
  onChange(e) { console.log(e); },
});
