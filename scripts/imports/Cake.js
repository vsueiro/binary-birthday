import Strawberries from "./Strawberries.js";

export default class Cake {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);

    this.setup();
  }
  setup() {
    this.strawberries = new Strawberries(7);
    this.container.append(this.strawberries.element);
  }
}
