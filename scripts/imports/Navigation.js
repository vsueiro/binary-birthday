export default class Navigation {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  hide() {
    this.element.dataset.visible = "false";
  }

  show() {
    this.element.dataset.visible = "true";
  }
}
