import DecimalCandle from "./DecimalCandle.js";
import Form from "./Form.js";

export default class DecimalCandles {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);

    this.setup();
  }

  setup() {
    this.list = [];
    this.digits = this.birthdayCake.age;
  }

  clear() {
    this.list = [];
    this.container.replaceChildren();
  }

  update(digits) {
    this.clear();

    this.digits = digits || this.digits;

    for (let digit of this.digits) {
      const candle = new DecimalCandle(digit, this.birthdayCake);
      this.list.push(candle);

      this.container.append(candle.element);
    }
  }
}
