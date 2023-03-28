export default class Labels {
  constructor(container, options) {
    this.container = container;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);
  }
}
