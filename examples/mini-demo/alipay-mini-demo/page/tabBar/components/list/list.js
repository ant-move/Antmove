const _Component = require("../../../../__antmove/component/componentClass.js")(
    "Component"
);
_Component({
    mixins: [],
    data: {
        active: -1,
        variety: -1
    },
    properties: {
        active: {
            type: Number,
            value: -1
        },
        list: Array
    },
    methods: {
        Change(e) {
            let active = e.target.dataset.index;

            if (this.data.active === active) {
                active = -1;
            }

            this.setData({
                active: active
            });
        },

        Getstyle(e) {
            console.log(1111, e.target.dataset.index);
            this.setData({
                variety: e.target.dataset.index
            });
        },

        Nostyle(e) {
            this.setData({
                variety: -1
            });
        }
    }
});
