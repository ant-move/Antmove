/* eslint-disable complexity, no-param-reassign */
/* eslint max-depth: [2, 7] */
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const commonYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const FIRST_MONTH = 0;
const LAST_MONTH = 11;
const DAYS_PER_ROW = 7;
const COLOR_MAP = {
  1: '#f5a911',
  2: '#e8541e',
  3: '#07a89b',
  4: '#108ee9',
  5: 'rgba(51, 51, 51, 0.4)',
};

// 获取某月第某天是星期几
function getDay(month, year, index) {
  return new Date(year, month, index).getDay();
}

// 获取某月有几天
function getMonthLength(month, year) {
  if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
    return leapYear[month];
  } else {
    return commonYear[month];
  }
}

// 数字补位 1 -> 01
function prefixNum(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

Component({
  data: {
    selectedYear: 0,
    selectedMonth: 0,
    currentDate: null,
    dates: [],
    blockType: 1, // 1.没有待办纯数字 2.有待办 用于区分不同类型日期块的样式。
  },
  props: {
    className: '',
    tagData: [],
    type: 'single',
  },
  didMount() {
    this.tapTimes = 1;
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    const year = date.getFullYear();
    const month = date.getMonth();

    this.setData({
      selectedYear: year,
      selectedMonth: month,
      currentDate: date,
    });
    this.refreshdates(month, year);
  },
  didUpdate() {
    const { dates } = this.data;
    let blockType = 1;
    for (let i = 0; i < dates.length; i++) {
      for (let j = 0; j < dates[i].length; j++) {
        if (this.hasTag(dates[i][j])) {
          blockType = 2;
        }
      }
    }

    this.setData({
      dates,
      blockType,
    });
  },
  methods: {
    onPrevMonthTap() {
      const { selectedMonth, selectedYear } = this.data;
      let year = selectedYear;
      let month = selectedMonth;
      // 如果当前选中是一月份，前一月是去年的12月
      if (selectedMonth === FIRST_MONTH) {
        year = selectedYear - 1;
        month = LAST_MONTH;
      } else {
        month = selectedMonth - 1;
      }

      if (this.props.onMonthChange) {
        this.props.onMonthChange(month, selectedMonth);
      }

      this.setData({
        selectedYear: year,
        selectedMonth: month,
      });

      this.refreshdates(month, year);
    },
    onNextMonthTap() {
      const { selectedMonth, selectedYear } = this.data;
      let year = selectedYear;
      let month = selectedMonth;
      // 如果当前选中是十二月份，下一月是去年的12月
      if (selectedMonth === LAST_MONTH) {
        year = selectedYear + 1;
        month = FIRST_MONTH;
      } else {
        month = selectedMonth + 1;
      }

      if (this.props.onMonthChange) {
        this.props.onMonthChange(month, selectedMonth);
      }

      this.setData({
        selectedYear: year,
        selectedMonth: month,
      });

      this.refreshdates(month, year);
    },
    refreshdates(month, year) {
      this.tapTimes = 1;
      const { selectedYear, selectedMonth, currentDate } = this.data;
      const firstDay = getDay(month, year, 1);
      const days = getMonthLength(month, year);
      const datesArray = [];
      const currentDateTimeStamp = +currentDate;
      let num = 0;

      for (let i = 0; i < firstDay; i++) {
        num += 1;
        // 如果当前选中的是一月份，前一个月是去年的12月
        let _year = selectedYear;
        let _month = selectedMonth;

        if (selectedMonth === 0) {
          _year = selectedYear - 1;
          _month = LAST_MONTH;
        } else {
          _year = selectedYear;
          _month = selectedMonth - 1;
        }

        const date = getMonthLength(_month, _year) - i;
        datesArray.unshift({
          year: _year,
          month: _month,
          date,
          isToday: false,
          isGray: true,
          isSelected: false,
          tag: '',
        });
      }

      for (let i = 0; i < days; i++) {
        num += 1;
        const date = i + 1;
        const dateTimeStamp = +new Date(selectedYear, selectedMonth, date);
        datesArray.push({
          year: selectedYear,
          month: selectedMonth,
          date,
          isToday: dateTimeStamp === currentDateTimeStamp,
          isGray: false,
          isSelected: dateTimeStamp === currentDateTimeStamp,
          tag: '',
        });
      }

      let nextDate = 0;
      let daysPerPage = 35;

      if (num > 35) {
        daysPerPage = 42;
      }

      for (let i = 0; i < daysPerPage - days - firstDay; i++) {
        // 如果是12月，下月是第二年的1月份
        nextDate += 1;
        let _year = selectedYear;
        let _month = selectedMonth;

        if (selectedMonth === LAST_MONTH) {
          _year = selectedYear + 1;
          _month = FIRST_MONTH;
        } else {
          _year = selectedYear;
          _month = selectedMonth + 1;
        }

        datesArray.push({
          year: _year,
          month: _month,
          date: nextDate,
          isToday: false,
          isGray: true,
          isSelected: false,
          tag: '',
        });
      }
      let blockType = 1;
      for (let i = 0; i < datesArray.length; i++) {
        if (this.hasTag(datesArray[i])) {
          blockType = 2;
        }
      }

      const dates = [];
      let weekDates = [];
      for (let i = 0; i < datesArray.length; i++) {
        weekDates.push(datesArray[i]);
        if ((i + 1) % DAYS_PER_ROW === 0) {
          dates.push([...weekDates]);
          weekDates = [];
        }
      }

      this.setData({
        dates,
        blockType,
      });
    },
    hasTag(dateObj) {
      const { tagData } = this.props;
      // 去重由调用者处理
      if (tagData.length === 0) {
        dateObj.tag = '';
        return false;
      }
      return tagData.some((item) => {
        const dateArr = item.date.split('-');
        const dateStr = [];
        // 兼容ios下new Date('2018-1-1')格式返回invalid Date的问题
        for (let i = 0; i < dateArr.length; i++) {
          dateStr.push(dateArr[i].length > 1 ? dateArr[i] : `0${dateArr[i]}`);
        }

        const date = new Date(dateStr.join('-'));
        if (dateObj.year === date.getFullYear() &&
            dateObj.month === date.getMonth() &&
            dateObj.date === date.getDate()) {
          dateObj.tag = item.tag;
          dateObj.color = COLOR_MAP[item.tagColor];
          dateObj.disable = item.disable;
          return true;
        } else {
          dateObj.tag = '';
          return false;
        }
      });
    },
    getDateGap(day1, day2) {
      const date1 = +new Date(day1.year, prefixNum(day1.month), prefixNum(day1.date));
      const date2 = +new Date(day2.year, prefixNum(day2.month), prefixNum(day2.date));
      return (date1 - date2) / (24 * 3600 * 1000);
    },
    makeDate(dateObj) {
      return new Date(`${dateObj.year}-${prefixNum(dateObj.month + 1)}-${prefixNum(dateObj.date)}`);
    },
    onDateTap(event) {
      const { dates } = this.data;
      const { year, month, date } = event.currentTarget.dataset;
      const { type } = this.props;

      if (type === 'range') {
        if (this.tapTimes % 2 === 0) {
          this.tapTimes += 1;
          this.endDate = { year, month, date };
          const dateGap = this.getDateGap(this.startDate, this.endDate);

          if (dateGap > 0) {
            [this.startDate, this.endDate] = [this.endDate, this.startDate];
          }

          let hasDisable = false;
          for (let i = 0; i < dates.length; i++) {
            for (let j = 0; j < dates[i].length; j++) {
              const dateObj = dates[i][j];
              dateObj.isStart = false;
              dateObj.isMiddle = false;
              dateObj.isEnd = false;

              const startDateGap = this.getDateGap(dateObj, this.startDate);
              const endDateGap = this.getDateGap(dateObj, this.endDate);

              if (dateObj.year === year && dateObj.month === month && dateObj.date === date && dateObj.disable) {
                hasDisable = true;
              }
              if (startDateGap > 0 && endDateGap < 0) {
                if (dateObj.disable) {
                  hasDisable = true;
                }

                if (dateGap !== 0) {
                  if (j === 0) {
                    dateObj.isStart = true;
                  } else if (j === 6) {
                    dateObj.isEnd = true;
                  } else {
                    dateObj.isMiddle = true;
                  }
                } else {
                  dateObj.isSelected = true;
                }
              }

              if (this.startDate.year === dateObj.year &&
                  this.startDate.month === dateObj.month &&
                  this.startDate.date === dateObj.date && dateGap !== 0) {
                if (j === 6) {
                  dateObj.isSelected = true;
                } else {
                  dateObj.isStart = true;
                }
              }

              if (this.endDate.year === dateObj.year &&
                  this.endDate.month === dateObj.month &&
                  this.endDate.date === dateObj.date && dateGap !== 0) {
                if (j === 0) {
                  dateObj.isSelected = true;
                } else {
                  dateObj.isEnd = true;
                }
              }
            }
          }
          if (hasDisable) {
            this.props.onSelectHasDisableDate([this.makeDate(this.startDate), this.makeDate(this.endDate)]);
            return;
          }

          if (this.props.onSelect) {
            this.props.onSelect([this.makeDate(this.startDate), this.makeDate(this.endDate)]);
          }
        } else {
          let isDisable = false;
          for (let i = 0; i < dates.length; i++) {
            for (let j = 0; j < dates[i].length; j++) {
              const dateObj = dates[i][j];
              if (dateObj.year === year && dateObj.month === month && dateObj.date === date) {
                if (dateObj.disable) {
                  console.log(1111);
                  isDisable = true;
                  dateObj.isSelected = false;
                } else {
                  dateObj.isSelected = true;
                }
                dateObj.isStart = false;
                dateObj.isMiddle = false;
                dateObj.isEnd = false;
              } else {
                dateObj.isSelected = false;
                dateObj.isStart = false;
                dateObj.isMiddle = false;
                dateObj.isEnd = false;
              }
            }
          }
          if (!isDisable) {
            this.tapTimes += 1;
          }
          this.startDate = { year, month, date };
        }

        this.setData({
          dates,
        });
      } else {
        let isDisable = false;
        for (let i = 0; i < dates.length; i++) {
          for (let j = 0; j < dates[i].length; j++) {
            const dateObj = dates[i][j];
            if (dateObj.year === year && dateObj.month === month && dateObj.date === date) {
              dateObj.isSelected = true;
              if (dateObj.disable) {
                isDisable = true;
              }
            } else {
              dateObj.isSelected = false;
            }
          }
        }

        if (isDisable) {
          return;
        }

        this.setData({
          dates,
        });

        if (this.props.onSelect) {
          this.props.onSelect([this.makeDate({ year, month, date }), undefined]);
        }
      }
    },
  },
});
