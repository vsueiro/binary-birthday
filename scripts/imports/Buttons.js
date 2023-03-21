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
    this.clicked = false;

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

  handlePress(step, origin) {
    // Make first increment
    this.form.constrain("age", undefined, step);

    // Prevent fast increment if origin was first user click
    if (origin === "click") {
      return;
    }

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

      // When the first click occurs
      button.addEventListener(
        "click",
        () => {
          // Prevent increment if one of the buttons was already clicked
          if (!this.clicked) {
            this.handlePress(step, "click");

            // Set flag to prevent further events from firing
            this.clicked = true;
          }
        },
        { once: true }
      );

      // When touch begins
      button.addEventListener("touchstart", (event) => {
        // If a click was fired once (to enable audio)
        if (this.clicked) {
          this.handlePress(step);
          // Prevent further mouse events from firing
          event.preventDefault();
        }
      });

      // When touch ends
      button.addEventListener("touchend", (event) => {
        this.handleRelease();
        // Prevent further mouse events from firing
        event.preventDefault();
        // }
      });

      // When mousedown begins
      button.addEventListener("mousedown", () => {
        // If a click was fired once (to enable audio)
        if (this.clicked) {
          this.handlePress(step);
        }
      });

      // When mouseup is fired
      document.body.addEventListener("mouseup", () => {
        this.handleRelease();
      });
    }
  }
}
