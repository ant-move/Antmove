Page({
    data: {
        logs: {},
        _logs: "",
        logNum: 0,
        recordOpen: [],
        _recordOpen: [],
        menuShow: false,
        allShow: true,
        deletShow: false,
        inputValue: "",
        content: "",
        notMatch: false
    },
    _logNum: 0,
    onLoad (q) {
        my.setNavigationBar({
          title:q.path
        })  
        let logs = JSON.parse(q.logs);
        let logNum = q.logNum;
        this._logNum = q.logNum;
        this.setData({
            logs,
            logNum
        });
    },

    delet () {
        this.setData({
            _logs: "",
            deletShow: false,
            notMatch: false,
            inputValue: "",
            logNum: this._logNum
        });
    },

    bindKeyInput (e) {
        let deletShow = false;
        this.setData({
            inputValue: e.detail.value
        });
        if (this.data.inputValue) {
            deletShow = !deletShow;
        } else {
            this.setData({
                _logs: '',
                notMatch: false,
                logNum: this._logNum
            });
            deletShow = false;
        }               
        this.setData({
            deletShow
        });

    },

    menuShow () {
        let menuShow = !this.data.menuShow;
        this.setData({
            menuShow
        });
    },

    menuHide () {
        this.setData({
            menuShow: false
        });
    },

    allShow () {
        let allShow = !this.data.allShow;
        this.setData({
            allShow
        });
    },

    open () {
        if (this.data._logs) {
            let logs = this.data._logs;

            for (let i = 0, len = logs.length; i < len; i++) {
                logs[i].open = true;
            }

            this.setData({
                _logs: logs
            });
        } else {
            let logs = this.data.logs;

            for (let i = 0, len = logs.length; i < len; i++) {
                logs[i].open = true;
            }

            this.setData({
                logs
            });
        }
    },

    recover () {
        if (this.data._logs) {
            let logs = this.data._logs;
            let recordOpen = this.data._recordOpen;

            for (let i = 0, len = logs.length; i < len; i++) {
                logs[i].open = recordOpen[i];
            }

            this.setData({
                _logs: logs
            });
        } else {
            let logs = this.data.logs;
            let recordOpen = this.data.recordOpen;

            for (let i = 0, len = logs.length; i < len; i++) {
                logs[i].open = recordOpen[i];
            }

            this.setData({
                logs
            });
        }
    },

    kindToggle (e) {
        const id = e.currentTarget.id;
        let logs = {};

        if (this.data._logs) {
            logs = this.data._logs;
        } else {
            logs = this.data.logs;
        }

        let recordOpen = [];

        for (let i = 0, len = logs.length; i < len; ++i) {
            if (logs[i].name === id) {
                logs[i].open = !logs[i].open;
            } else {
                logs[i].open = false;
            }

            recordOpen.push(logs[i].open);
        }

        if (this.data._logs) {
            this.setData({
                _logs: logs,
                _recordOpen: recordOpen
            });
        } else {
            this.setData({
                logs,
                recordOpen
            });
        }
    },

    find () {
        let inputValue = this.data.inputValue.toLowerCase();
        const logs = this.data.logs;
        let num = [];
        let _logs = [];
        if (!inputValue) return;

        for (let i = 0, len = logs.length; i < len; ++i) {
            let brr = JSON.stringify(logs[i]).split(",");

            for (let j = 0, _len = brr.length; j < _len; j++) {
                let str = '';
                brr[j].split(":").length > 1 ? str = brr[j].split(":")[1].toLowerCase() : str = brr[j].split(":")[0].toLowerCase()
                

                if ( str.indexOf(inputValue) !== -1 ) {
                    num.push(i);
                }
            }
        }

        if (num.length === 0) {
            this.setData({
                notMatch: true,
                deletShow: true
            });
        } else {
            this.setData({
                notMatch: false
            });
        }

        const _num = [...new Set(num)];

        for (let n = 0, leng = _num.length; n < leng; n++) {
            _logs.push(logs[_num[n]]);
        }
        let logsLen = _logs.length;
        this.setData({
            _logs,
            logNum: logsLen
        });
    }
});