import Label from "./Label.js";

export default class Labels {
  constructor(container, options) {
    this.container = container;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);
  }

  setup() {}

  update(digits) {
    for (let i = 0; i < digits.length; i++) {
      const label = new Label(digits, i);
      this.container.append(label.element);
    }
  }
}
