import { filterPage } from '../../../util/debounce';

const extContainers = [
  {
    name: '列表',
    scopes: ['view'],
    path: '/page/component/list/list'
  },
  {
    name: '顶部选项卡',
    scopes: ['view'],
    path: '/page/component/tabs/tabs'
  },
  {
    name: '纵向选项卡',
    scopes: ['view'],
    path: '/page/component/vtabs/vtabs'
  },
  {
    name: '卡片',
    scopes: ['view'],
    path: '/page/component/card/card'
  },
  {
    name: '宫格',
    scopes: ['view'],
    path: '/page/component/grid/grid'
  },
  {
    name: '步骤条',
    scopes: ['view'],
    path: '/page/component/steps/steps'
  },
  {
    name: '页脚',
    scopes: ['view'],
    path: '/page/component/footer/footer'
  }
];

const pops = [
  {
    name: '气泡',
    scopes: ['view'],
    path: '/page/component/popover/popover'
  },
  {
    name: '筛选',
    scopes: ['view'],
    path: '/page/component/filter/filter'
  },
  {
    name: '对话框',
    scopes: ['view'],
    path: '/page/component/modal/modal'
  },
  {
    name: '弹出菜单',
    scopes: ['view'],
    path: '/page/component/popup/popup'
  }
];

const extForms = [
  {
    name: '文本输入',
    scopes: ['view'],
    path: '/page/component/input-item/input-item'
  },
  {
    name: '金额输入',
    scopes: ['view'],
    path: '/page/component/amount-input/amount-input'
  },
  {
    name: '搜索框',
    scopes: ['view'],
    path: '/page/component/search-bar/search-bar'
  },
  {
    name: '复选框',
    scopes: ['view'],
    path: '/page/component/am-checkbox/am-checkbox'
  }
];

const results = [
  {
    name: '异常页',
    scopes: ['view'],
    path: '/page/component/page-result/page-result'
  },
  {
    name: '结果页',
    scopes: ['view'],
    path: '/page/component/message/message'
  }
];

const tips = [
  {
    name: '引导',
    scopes: ['view'],
    path: '/page/component/tips/tips'
  },
  {
    name: '通告栏',
    scopes: ['view'],
    path: '/page/component/notice/notice'
  },
  {
    name: '徽标',
    scopes: ['view'],
    path: '/page/component/badge/badge'
  }
];

const gestures = [
  {
    name: '可滑动单元格',
    scopes: ['view'],
    path: '/page/component/swipe-action/swipe-action'
  }
];

const inputs = [
];

const others = [
  {
    name: '日历',
    scopes: ['view'],
    path: '/page/component/calendar/calendar'
  },
  {
    name: '步进器',
    scopes: ['view'],
    path: '/page/component/stepper/stepper'
  }
];

const extComponentList = [
  {
    type: '布局导航',
    list: filterPage(extContainers)
  },
  {
    type: '操作浮层',
    list: filterPage(pops)
  },
  {
    type: '结果类',
    list: filterPage(results)
  },
  {
    type: '提示引导',
    list: filterPage(tips)
  },
  {
    type: '表单类',
    list: filterPage(extForms)
  },
  {
    type: '手势类',
    list: filterPage(gestures)
  },
  {
    type: '其他',
    list: filterPage(others)
  }
];

Page({
  data: {
    headline: 'AMAP API',
    subtitle: '基于第三方的扩展组件，为开发者提供便利',
    active: 1,
    APIList: extComponentList
  },
  onLoad() {},
  Change(e) {
    this.setData({
      active: e.target.dataset.index
    });
  }
});
