Page(
    {
        data: {
            show: [],
            title: "warn",
            logNum: [],
            pathNum: 0,
            inpWidth: 180
        },
        delete () {
            my.clearStorageSync({
                key: "__antmove_loginfo"
            });

            my.clearStorageSync({
                key: "_pageMsg"
            });

            this.getStorage();
        },
        allShow (event) {
            let _dataset = {
                path: "",
                logNum: "",
                logs: ""
            };
            _dataset.logNum = event.target.dataset.logNum;
            _dataset.path = event.target.dataset.path;
            _dataset.logs = JSON.stringify(event.target.dataset.logs); 
                  
            my.navigateTo({
                url: `./specific/index?path=${_dataset.path}&logs=${_dataset.logs}&logNum=${_dataset.logNum}`
            });              
        },

        onLoad () {
            this.getStorage();
        },

        getStorage () {
            let arr = [];
            let res = my.getStorageSync({ key: "__antmove_loginfo" });
            if (res.data) {
                arr = res.data.pages;
            }                  
            this.setData({
                pathNum: arr.length
            });
            for ( let i = 0 ; i < arr.length ; i ++ ) {
                let _i = arr[i].logs.length;
                arr[i].logNum = _i;
                _i = null;
            }
            this.setData({
                show: arr
            });
        },
    },
    "Page"
);
