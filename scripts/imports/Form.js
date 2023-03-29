export default class Form {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {};

    this.options = Object.assign({}, this.defaults, options);

    this.setup();
  }

  createElements() {
    this.element = document.createElement("form");

    this.input = document.createElement("input");
    this.input.setAttribute("type", "number");
    this.input.setAttribute("inputmode", "numeric");
    this.input.setAttribute("min", "0");
    this.input.setAttribute("max", "127");
    this.input.setAttribute("autocomplete", "off");
    this.input.setAttribute("name", "age");
    this.input.setAttribute("value", this.birthdayCake.age);

    this.button = {};

    this.button.plus = document.createElement("button");
    this.button.plus.setAttribute("type", "button");
    this.button.plus.classList.add("plus");

    this.button.minus = document.createElement("button");
    this.button.minus.setAttribute("type", "button");
    this.button.minus.classList.add("minus");

    this.element.append(this.input, this.button.minus, this.button.plus);
  }

  addEventListeners() {
    this.element.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    this.input.addEventListener("input", () => {
      this.birthdayCake.setAgeFromInput();
      this.birthdayCake.update();
    });
  }

  setup() {
    this.createElements();
    this.addEventListeners();

    this.container.append(this.element);
  }
  update() {}
}
