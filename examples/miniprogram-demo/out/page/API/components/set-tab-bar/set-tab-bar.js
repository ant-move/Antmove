const _Component = require("../../../../__antmove/component/componentClass.js")(
    "Component"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/components/set-tab-bar/set-tab-bar"
    }
});
const defaultTabBarStyle = {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    backgroundColor: "#ffffff"
};
const defaultItemName = "接口";

_Component({
    data: {
        hasSetTabBarBadge: false,
        hasShownTabBarRedDot: false,
        hasCustomedStyle: false,
        hasCustomedItem: false,
        hasHiddenTabBar: false
    },

    attached() {
        _my.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
    },

    detached() {
        this.removeTabBarBadge();
        this.hideTabBarRedDot();
        this.showTabBar();
        this.removeCustomStyle();
        this.removeCustomItem();
    },

    methods: {
        navigateBack() {
            this.triggerEvent("unmount");
        },

        setTabBarBadge() {
            if (this.data.hasSetTabBarBadge) {
                this.removeTabBarBadge();
                return;
            }

            this.setData({
                hasSetTabBarBadge: true
            });

            _my.setTabBarBadge({
                index: 1,
                text: "1"
            });
        },

        removeTabBarBadge() {
            this.setData({
                hasSetTabBarBadge: false
            });

            _my.removeTabBarBadge({
                index: 1
            });
        },

        showTabBarRedDot() {
            if (this.data.hasShownTabBarRedDot) {
                this.hideTabBarRedDot();
                return;
            }

            this.setData({
                hasShownTabBarRedDot: true
            });

            _my.showTabBarRedDot({
                index: 1
            });
        },

        hideTabBarRedDot() {
            this.setData({
                hasShownTabBarRedDot: false
            });

            _my.hideTabBarRedDot({
                index: 1
            });
        },

        showTabBar() {
            this.setData({
                hasHiddenTabBar: false
            });

            _my.showTabBar();
        },

        hideTabBar() {
            if (this.data.hasHiddenTabBar) {
                this.showTabBar();
                return;
            }

            this.setData({
                hasHiddenTabBar: true
            });

            _my.hideTabBar();
        },

        customStyle() {
            if (this.data.hasCustomedStyle) {
                this.removeCustomStyle();
                return;
            }

            this.setData({
                hasCustomedStyle: true
            });

            _my.setTabBarStyle({
                color: "#FFF",
                selectedColor: "#1AAD19",
                backgroundColor: "#000000"
            });
        },

        removeCustomStyle() {
            this.setData({
                hasCustomedStyle: false
            });

            _my.setTabBarStyle(defaultTabBarStyle);
        },

        customItem() {
            if (this.data.hasCustomedItem) {
                this.removeCustomItem();
                return;
            }

            this.setData({
                hasCustomedItem: true
            });

            _my.setTabBarItem({
                index: 1,
                text: "API"
            });
        },

        removeCustomItem() {
            this.setData({
                hasCustomedItem: false
            });

            _my.setTabBarItem({
                index: 1,
                text: defaultItemName
            });
        }
    }
});
