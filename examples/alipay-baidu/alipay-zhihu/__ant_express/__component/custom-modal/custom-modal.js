Component({
    props: {
        title: {
            type: "String"
        },
        "no-cancel": {
            type: Boolean
        },
        "confirm-text": '确定',
        "cancel-text": '取消',
        bindconfirm: {
            type: Function
        },
        bindcancel: {
            type: Function
        },
        hidden: {
            type: Boolean
        }
    },
    methods: {
        showModal () {
            if (this.props.hidden) return false;
            my.confirm({
                title: this.props.title,
                content: this.props.textContent,
                confirmButtonText: this.props.confirmText,
                cancelButtonText: this.props.cancelText,
                success: (result) => {
                  if (result.confirm) {
                      this.props.bindconfirm && this.props.bindconfirm();
                  } else {
                    this.props.bindcancel && this.props.bindcancel();
                  }
                },
              });
        }
    },
    didUpdate () {
        this.showModal();
    },
    didMount () {
        this.showModal();
    }
});
