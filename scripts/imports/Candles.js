export default class Candles {
  constructor(container, options) {
    this.container = container;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);
  }
}
