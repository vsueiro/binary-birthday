export default class About {
  constructor(container, birthdayCake) {
    this.container = document.querySelector(container);
    this.birthdayCake = birthdayCake;
    this.button = document.querySelector(".info");

    this.setup();
  }

  setup() {
    this.button.addEventListener("click", () => {
      let value = this.container.dataset.visible;

      if (value === "false") {
        value = "true";
      } else {
        value = "false";
      }

      this.container.dataset.visible = value;
    });
  }

  hide() {
    this.container.dataset.visible = "false";
  }

  show() {
    this.container.dataset.visible = "true";
  }
}
