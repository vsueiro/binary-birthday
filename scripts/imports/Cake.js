import Strawberries from "./Strawberries.js";

export default class Cake {
  constructor(container, options) {
    this.container = container;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);

    this.strawberries = new Strawberries(7);

    this.container.append(this.strawberries.element);
  }
}
