export default class Candle {
  constructor(digit, callback) {
    this.element = document.createElement("div");
    this.element.classList.add("candle");
    this.callback = callback;

    this.digit = digit;

    this.setup();
  }

  get status() {
    if (this.digit === "1") {
      return "on";
    } else if (this.digit === "0") {
      return "off";
    }
  }

  setup() {
    this.update();

    this.element.addEventListener("click", () => {
      this.toggleStatus();
      this.callback();
    });
  }

  toggleStatus() {
    if (this.digit === "1") {
      this.digit = "0";
    } else if (this.digit === "0") {
      this.digit = "1";
    }

    this.update();
  }

  update(digit) {
    this.digit = digit || this.digit;

    this.element.dataset.status = this.status;
  }
}
