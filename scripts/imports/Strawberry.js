export default class Strawberry {
  constructor() {
    this.eaten = 0;
    this.respawn = 4000;
    this.limit = 2;
    this.eatOutLimit = 3;
    this.timeout;
    this.interactive = false;
    this.delay = 500;

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
        this.reset();
      }, this.respawn);
    }
  }

  eatOut() {
    if (this.eaten < this.eatOutLimit) {
      this.element.classList.add("just-eaten");

      const delay = this.eaten === 0 ? 0 : this.delay;
      this.eaten++;

      this.timeout = setTimeout(() => {
        this.update();
        this.eatOut();
      }, delay);
    }
  }

  reset() {
    console.log(this.element, this.timeout);

    clearTimeout(this.timeout);

    this.element.classList.remove("just-eaten");
    this.eaten = 0;
    this.update();
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
