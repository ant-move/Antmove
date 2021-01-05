Page({
  data: {
    modalOpened: false,
    modalOpened2: false,
    modalOpened21: false,
    modalOpened22: false,
    modalOpened3: false,
    modalOpened4: false,
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  openModal2() {
    this.setData({
      modalOpened2: true,
    });
  },
  onModalClick2() {
    this.setData({
      modalOpened2: false,
    });
  },
  onModalClose2() {
    this.setData({
      modalOpened2: false,
    });
  },
  openModal21() {
    this.setData({
      modalOpened21: true,
    });
  },
  onModalClick21() {
    this.setData({
      modalOpened21: false,
    });
  },
  onModalClose21() {
    this.setData({
      modalOpened21: false,
    });
  },
  openModal22() {
    this.setData({
      modalOpened22: true,
    });
  },
  onModalClick22() {
    this.setData({
      modalOpened22: false,
    });
  },
  onModalClose22() {
    this.setData({
      modalOpened22: false,
    });
  },
  openModal3() {
    this.setData({
      modalOpened3: true,
    });
  },
  onModalClick3() {
    this.setData({
      modalOpened3: false,
    });
  },
  openModal4() {
    this.setData({
      modalOpened4: true,
    });
  },
  onModalClick4() {
    this.setData({
      modalOpened4: false,
    });
  },
});