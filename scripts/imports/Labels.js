import Label from "./Label.js";

export default class Labels {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);
  }

  setup() {}

  clear() {
    this.container.replaceChildren();
  }

  update(digits) {
    this.clear();

    for (let i = 0; i < digits.length; i++) {
      const label = new Label(digits, i);
      this.container.append(label.element);
    }
  }

  hide() {
    this.container.style.display = "none";
  }

  show() {
    this.container.style.display = "flex";
  }
}
