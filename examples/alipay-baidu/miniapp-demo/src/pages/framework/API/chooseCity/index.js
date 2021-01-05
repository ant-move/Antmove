Page({
  data: {
    localcity: '天津',
  },
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({ title: `chooseAlipayContact response: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  noChooseCity() {
    my.chooseCity({
      showLocatedCity: false,
      showHotCities: false,
      success: (res) => {
        my.alert({ title: `操作成功: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
    })
  },
  selfChooseCity() {
    my.chooseCity({
      cities: [
        {
          city: '朝阳区',
          adCode: '110105',
          spell: 'chaoyang',
        },
        {
          city: '海淀区',
          adCode: '110108',
          spell: 'haidian',
        },
        {
          city: '丰台区',
          adCode: '110106',
          spell: 'fengtai',
        },
        {
          city: '东城区',
          adCode: '110101',
          spell: 'dongcheng',
        },
        {
          city: '西城区',
          adCode: '110102',
          spell: 'xicheng',
        },
        {
          city: '房山区',
          adCode: '110111',
          spell: 'fangshan',
        },
      ],
      hotCities: [
        {
          city: '朝阳区',
          adCode: '110105',
        },
        {
          city: '海淀区',
          adCode: '110108',
        },
        {
          city: '丰台区',
          adCode: '110106',
        },
      ],
      success: (res) => {
        my.alert({ title: `操作成功: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
    })
  },

  self_chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      cities: [
        {
          city: '朝阳区',
          adCode: '110105',
          spell: 'chaoyang',
        },
        {
          city: '海淀区',
          adCode: '110108',
          spell: 'haidian',
        },
        {
          city: '丰台区',
          adCode: '110106',
          spell: 'fengtai',
        },
        {
          city: '东城区',
          adCode: '110101',
          spell: 'dongcheng',
        },
        {
          city: '西城区',
          adCode: '110102',
          spell: 'xicheng',
        },
      ],
      hotCities: [
        {
          city: '朝阳区',
          adCode: '110105',
        },
        {
          city: '海淀区',
          adCode: '110108',
        },
        {
          city: '丰台区',
          adCode: '110106',
        },
      ],
      success: (res) => {
        my.alert({ title: `操作成功: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
    })
  },

  multiLevelSelect() {
    my.multiLevelSelect({
      title: '请选择城市', // 级联选择标题
      list: [
        {
          name: '杭州市', // 条目名称
          subList: [
            {
              name: '西湖区',
              subList: [
                {
                  name: '文一路',
                },
                {
                  name: '文二路',
                },
                {
                  name: '文三路',
                },
              ],
            },
            {
              name: '滨江区',
              subList: [
                {
                  name: '滨河路',
                },
                {
                  name: '滨兴路',
                },
                {
                  name: '白马湖动漫广场',
                },
              ],
            },
          ], // 级联子数据列表
        },
      ],
      success: (result) => {
        console.log(result)
        my.alert({ content: `级联${JSON.stringify(result)}` })
      },
      fail: (error) => {
        my.alert({ content: `调用失败${JSON.stringify(error)}` })
      },
    })
  },

  setLocatedCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      setLocatedCity: true,
      success: (res) => {
        this.setData({
          localcity: res.city,
        })
        my.alert({ title: `chooseAlipayContact response: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
    my.onLocatedComplete({
      success: (res) => {
        my.setLocatedCity({
          locatedCityId: res.locatedCityId,
          locatedCityName: this.data.localcity,
          success: (result) => {
            console.log(result)
          },
          fail: (error) => {
            my.alert({
              content: `修改当前定位城市失败${JSON.stringify(error)}`,
            })
          },
        })
      },
      fail: (error) => {
        my.alert({
          content: `onLocatedComplete失败${JSON.stringify(error)}`,
        })
      },
    })
  },
})
