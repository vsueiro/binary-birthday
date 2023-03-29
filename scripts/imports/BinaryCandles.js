import BinaryCandle from "./BinaryCandle.js";

export default class BinaryCandles {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {};

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

    this.digits = digits || this.digits;

    for (let digit of this.digits) {
      const candle = new BinaryCandle(digit, this.birthdayCake);
      this.list.push(candle);

      this.container.append(candle.element);
    }
  }

  hide() {
    this.container.style.display = "none";
  }

  show() {
    this.container.style.display = "flex";
  }
}
