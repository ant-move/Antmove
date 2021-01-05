Page({
  data: {
    canReLaunch: !!my.reLaunch,
  },
  navigate(e) {
    const { url, openType = 'navigateTo' } = e.currentTarget.dataset;
    my[openType]({ url });
  },
});
