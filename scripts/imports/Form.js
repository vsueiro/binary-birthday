export default class Form {
  constructor(container, birthdayCake, options) {
    this.container = container;
    this.birthdayCake = birthdayCake;

    this.defaults = {
      system: "binary",
    };

    this.options = Object.assign({}, this.defaults, options);

    this.markup = `
    <form>
      <input
        type="number"
        inputmode="numeric"
        min="0"
        max="127"
        placeholder="21"
        autocomplete="off"
        value="21"
        name="age"
      />
      <button class="decrement">
        <span class="screen-reader">&minus;</span>
      </button>
      <button class="increment">
        <span class="screen-reader">&plus;</span>
      </button>
    </form>
    `;

    this.setup();
  }
  setup() {
    this.container.innerHTML = this.markup;
  }
  update() {}
}
