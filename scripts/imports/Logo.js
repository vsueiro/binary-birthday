export default class Logo {
  constructor(container, birthdayCake) {
    this.container = document.querySelector(container);
    this.birthdayCake = birthdayCake;
    this.initialDelay = 500;
    this.isFirst = true;
  }

  setup() {}
  update() {}

  hide() {
    this.container.dataset.visible = "false";
  }

  show() {
    if (this.isFirst) {
      setTimeout(() => {
        this.container.dataset.visible = "true";
      }, this.initialDelay);
      this.isFirst = false;
      return;
    }

    this.container.dataset.visible = "true";
  }
}
