Page({
  data: {
    tagData: [
      { date: '2018-10-14', tag: '还房贷', tagColor: 5 },
      { date: '2018-10-28', tag: '公积金', tagColor: 2 },
      { date: '2018-10-18', tag: 'xx', disable: true },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
  onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate',
    });
  },
});
