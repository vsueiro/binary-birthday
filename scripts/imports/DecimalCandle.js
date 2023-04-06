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

  isNumber(char) {
    return /^\d$/.test(char);
  }

  update(digit) {
    this.digit = digit || this.digit;

    const attribute = this.isNumber(this.digit) ? "number" : "letter";

    this.element.dataset.number = "";
    this.element.dataset.letter = "";

    this.element.dataset[attribute] = this.digit;
  }
}
