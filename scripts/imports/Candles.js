import Candle from "./Candle.js";

export default class Candles {
  constructor(container, options) {
    this.container = container;

    this.defaults = {
      system: "binary",
    };

    this.options = Object.assign({}, this.defaults, options);

    this.setup();
  }

  setup() {
    this.digits = "0";
  }

  clear() {
    this.list = [];
    this.container.replaceChildren();
  }

  update(digits) {
    this.clear();

    if (this.options.system === "binary") {
      this.digits = digits || this.digits;

      for (let digit of this.digits) {
        const candle = new Candle(digit);
        this.list.push(candle);

        this.container.append(candle.element);
      }
    }
  }
}
