const utils = require("../../api/utils");

Component({
    data: {
    },
    props: {
        hoverClass: 'navigator-hover',
        hoverStartTime: 50,
        hoverStayTime: 600,
        url: '',
        className: "",
        openType:''

    },
    didMount() {
        this.props.appId && utils.warn(
            `支付宝navigator组件不支持 appId 属性!`
        );
    },
});