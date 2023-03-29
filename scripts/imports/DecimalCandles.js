import DecimalCandle from "./DecimalCandle.js";
import Form from "./Form.js";

export default class DecimalCandles {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.options = Object.assign({}, this.defaults, options);

    this.form = new Form(this.container, this.birthdayCake);

    this.setup();
  }

  setup() {
    this.list = [];
    this.digits = this.birthdayCake.age;
  }

  clear() {
    for (let candle of this.list) {
      candle.element.remove();
    }
    this.list = [];
  }

  update(digits) {
    this.clear();

    this.digits = digits || this.digits;

    this.form.input.value = this.digits;

    for (let digit of this.digits) {
      const candle = new DecimalCandle(digit, this.birthdayCake);
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
