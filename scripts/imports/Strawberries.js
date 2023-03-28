export class Strawberry {
  constructor() {
    this.eaten = 0;
    this.respawn = 4000;
    this.limit = 2;
    this.timeout;

    this.setup();
  }
  eat() {
    if (this.eaten < this.limit) {
      this.eaten++;
      console.log(this);
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

    this.element.addEventListener("click", () => {
      this.eat();
    });

    this.update();
  }
  update() {
    this.element.dataset.eaten = this.eaten;
  }
}

export default class Strawberries {
  constructor(amount = 1) {
    this.amount = amount;
    this.list = [];

    this.setup();
  }
  setup() {
    this.element = document.createElement("div");
    this.element.classList.add("strawberries");

    for (let i = 0; i < this.amount; i++) {
      const strawberry = new Strawberry();
      this.element.append(strawberry.element);
    }
  }
}
