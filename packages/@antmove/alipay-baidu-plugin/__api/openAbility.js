const apiObj = {
    getAuthUserInfo: {
        fn (obj) {
            const successFn = obj.success || function () {};
            delete obj.success;
            swan.getUserInfo({
                ...obj,
                success (res) {
                    const retBoj = {
                        nickName: res.userInfo.nickName,
                        avatar: res.userInfo.avatarUrl
                    };
                    successFn(retBoj);
                }   
            });
        }
    },
    navigateToMiniProgram: {
        fn (obj) {
            swan.navigateToSmartProgram({...obj});
        }
       
    },
    navigateBackMiniProgram: {
        fn (obj) {
            swan.navigateBackSmartProgram({...obj});
        }
    },
    ap: {
        fn () {
            return new Object();
        },
        imgRisk () {
            console.warn("my.ap.imgRisk暂不支持");
        },
        imgRiskCallback () {
            console.warn("my.ap.imgRiskCallback暂不支持");
        },
        navigateToAlipayPage () {
            console.warn("my.ap.navigateToAlipayPage暂不支持");
        },
        updateAlipayClient () {
            console.warn("my.ap.updateAlipayClient暂不支持");
        },
        faceVerify () {
            console.warn("my.ap.faceVerify暂不支持");
        },
        preventCheat () {
            console.warn("my.ap.preventCheat暂不支持");
        },
        nsf () {
            console.warn("my.ap.preventCheat暂不支持");
        }
    }
};

module.exports = apiObj;
