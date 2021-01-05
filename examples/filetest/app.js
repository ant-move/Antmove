// app.js
App({
    onLaunch: function (o) {
        console.log(o.scene);
        console.log(o.shareTicket);
        console.log(o);
        wx.login({
            success (res) {
                console.log(res);
            }
        });
    },
    onShow: function (o) {
        console.log(o.scene);
        console.log(o.shareTicket);
        console.log(o);
    },
    onPageNotFound: function () {},
    globalData: {
        userInfo: null
    }
});
