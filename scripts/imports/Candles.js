import Candle from "./Candle.js";

export default class Candles {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {
      system: "binary",
    };

    this.options = Object.assign({}, this.defaults, options);

    this.setup();
  }

  get string() {
    let digits = "";

    for (let candle of this.list) {
      digits += candle.digit;
    }

    return digits;
  }

  setup() {
    this.list = [];
    this.callback = function () {};
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
        const candle = new Candle(digit, this.birthdayCake);
        this.list.push(candle);

        this.container.append(candle.element);
      }
    }
  }
}
