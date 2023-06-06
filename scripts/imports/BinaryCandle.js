export default class BinaryCandle {
  constructor(digit, birthdayCake) {
    this.digit = digit;
    this.birthdayCake = birthdayCake;

    this.element = document.createElement("div");
    this.element.classList.add("candle");

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

      this.birthdayCake.setAgeFromCandles();
      this.birthdayCake.update();

      sounds.candle.play();

      this.birthdayCake.explainer.quiz.checkAnswer();
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
