export default class Strawberry {
  constructor() {
    this.eaten = 0;
    this.respawn = 4000;
    this.limit = 2;
    this.timeout;
    this.interactive = false;

    this.setup();
  }

  eat() {
    if (this.eaten < this.limit) {
      this.eaten++;
      this.update();
    }

    if (this.eaten > 0) {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.eaten = 0;
        this.update();
      }, this.respawn);
    }
  }

  setup() {
    this.element = document.createElement("div");
    this.element.classList.add("strawberry");

    if (this.interactive) {
      this.element.dataset.interactive = "true";

      this.element.addEventListener("click", () => {
        this.eat();
      });
    }

    this.update();
  }

  update() {
    this.element.dataset.eaten = this.eaten;
  }
}
