export default class Label {
  constructor(digits, index) {
    this.digits = digits;
    this.index = index;
    this.digit = this.digits[index];

    this.setup();
  }

  setup() {
    this.element = document.createElement("div");
    this.element.classList.add("label");
    this.element.textContent = this.number;
    this.element.dataset.status = this.status;
  }

  get number() {
    const i = this.digits.length - 1 - this.index;
    return Math.pow(2, i);
  }

  get status() {
    if (this.digit === "1") {
      return "on";
    } else if (this.digit === "0") {
      return "off";
    }
  }
}
