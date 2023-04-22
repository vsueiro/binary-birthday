export default class Logo {
  constructor(container, birthdayCake) {
    this.container = document.querySelector(container);
    this.birthdayCake = birthdayCake;
  }

  setup() {}
  update() {}

  hide() {
    this.container.dataset.visible = "false";
  }

  show() {
    this.container.dataset.visible = "true";
  }
}
