import Connectors from "./Connectors.js";

export default class Cake {
  constructor(container, options) {
    this.container = document.querySelector(container);

    this.setup();
  }
  setup() {
    const binary = "1010101";
    this.connectors = new Connectors(".connectors-container");
    this.connectors.update(binary);
  }
}
