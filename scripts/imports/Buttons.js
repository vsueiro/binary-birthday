export default class Buttons {
  constructor(selector, form) {
    this.form = form;
    this.selector = selector || "button";
    this.elements = document.querySelectorAll(this.selector);
    this.timeout = undefined;

    this.enableActiveState();
    this.updateAgeOnPress();
  }
  enableActiveState() {
    for (let button of this.elements) {
      // Show :active state on iOS Safari
      button.addEventListener("touchstart", function () {
        this.classList.add("active");
      });

      button.addEventListener("touchend", function () {
        this.classList.remove("active");
      });
    }
  }
  updateAgeOnPress() {
    for (let button of this.elements) {
      if (!button.dataset.step) {
        continue;
      }

      const step = Number(button.dataset.step);

      button.addEventListener("touchstart", () => {
        this.timeout = setTimeout(() => {
          this.form.constrain("age", undefined, step);
        }, 1000);
      });

      button.addEventListener("touchend", () => {
        // …
        clearTimeout(this.timeout);
      });
    }
  }
}
