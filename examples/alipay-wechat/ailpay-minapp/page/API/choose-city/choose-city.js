Page({
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({
          title: 'chooseAlipayContact response: ' + JSON.stringify(res),
        });
      },
    });
  },
});
