import About from "./About.js";

export default class Navigation {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.about = new About(".about");
  }

  hide() {
    this.element.dataset.visible = "false";
  }

  show() {
    this.element.dataset.visible = "true";
  }
}
