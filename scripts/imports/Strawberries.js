import Strawberry from "./Strawberry.js";

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
      this.list.push(strawberry);
      this.element.append(strawberry.element);
    }
  }
}
