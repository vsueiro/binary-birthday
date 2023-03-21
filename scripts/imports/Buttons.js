export default class Buttons {
  constructor(selector, form) {
    this.form = form;
    this.selector = selector || "button";
    this.elements = document.querySelectorAll(this.selector);
    this.timeout = undefined;
    this.interval = undefined;
    this.delay = 300;
    this.debounce = 150;
    this.isPressing = false;

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

  handlePress(step) {
    // Make first increment
    this.form.constrain("age", undefined, step);

    // Wait before triggerring fast increment mode
    this.timeout = setTimeout(() => {
      this.isPressing = true;

      // Trigger each increment
      this.interval = setInterval(() => {
        // If button is currently pressed
        if (this.isPressing) {
          // Increment age input
          this.form.constrain("age", undefined, step);
        } else {
          // Stop increments
          clearInterval(this.interval);
        }
      }, this.debounce);
    }, this.delay);
  }

  handleRelease() {
    // Cancel increments
    this.isPressing = false;

    // Prevent entering fast increment mode
    clearTimeout(this.timeout);
  }

  updateAgeOnPress() {
    for (let button of this.elements) {
      // Ignore buttons that don’t have a data-step attribute
      if (!button.dataset.step) {
        continue;
      }

      // Get step (like -1 or +1)
      const step = Number(button.dataset.step);

      // When touch begins
      button.addEventListener("touchstart", (event) => {
        this.handlePress(step);

        // Prevent further mouse events from firing
        event.preventDefault();
      });

      // When touch ends
      button.addEventListener("touchend", (event) => {
        this.handleRelease();

        // Prevent further mouse events from firing
        event.preventDefault();
      });

      // When mousedown begins
      button.addEventListener("mousedown", () => {
        this.handlePress(step);
      });

      // When mouseup is fired
      document.body.addEventListener("mouseup", () => {
        this.handleRelease();
      });
    }
  }
}
