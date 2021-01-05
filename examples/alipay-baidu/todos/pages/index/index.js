Page({
    data: {
        addtext: "hellow",

    },
    onLoad() { },


    onClickMe(data) {
        console.log(data)
    },

    setNavigationBar() {
        my.setNavigationBar({
            title: "改变标题",
            backgroundColor: "#daa520"
        })
    },
    alert() {
        my.alert({
            title: "alert"
        })
    },
    confirm() {
        my.confirm({
            title: "confirm",
            content: "这是content",
            confirmButtonText: "是",
            cancelButtonText: "否",
            success() {
                console.log("成功")
            },
            fail() {
                console.log("取消")
            },
            complete(data) {
                console.log(2, data)
            }

        })
    },
    showActionSheet() {
        my.showActionSheet({
            title: '支付宝-ActionSheet',
            items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
            badges: [
                { index: 0, type: 'none' },
                { index: 1, type: 'point' },
                { index: 2, type: 'num', text: '99' },
                { index: 3, type: 'text', text: '推荐' },
                { index: 4, type: 'more' },],
            cancelButtonText: '取消好了',
            success: (res) => {
                const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
                my.alert({
                    title: `你点了${btn}按钮`
                });
            },
        });
    },
    showLoading() {
        my.showLoading({
            content: '加载中...',
            delay: 1000,
        });
        setTimeout(() => {
            my.hideLoading();
        }, 3000)
    },
    animation() {
        my.navigateTo({
            url: '/pages/animation/animation'
        });
    },
    createMapContext() {
        my.navigateTo({
            url: '/pages/map/map'
        });
    },
    file() {
        my.navigateTo({
            url: '/pages/file/file'
        });
    },
    life() {
        my.navigateTo({
            url: '/pages/lifeCircle/lifeCircle?count=100',
        });
    },

    form () {
        my.navigateTo({
            url: '/pages/form/form',
        });
    },
    chooseAddress() {
        my.navigateTo({
            url: '/pages/chooseAddress/chooseAddress',
        });
    }
});
