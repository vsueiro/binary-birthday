export default class DecimalCandle {
  constructor(digit, birthdayCake) {
    this.digit = digit;
    this.birthdayCake = birthdayCake;

    this.setup();
  }

  setup() {
    this.element = document.createElement("div");
    this.element.classList.add("candle");
    this.element.dataset.status = "on";

    this.update();
  }

  update(digit) {
    this.digit = digit || this.digit;

    this.element.dataset.number = this.digit;
  }
}
