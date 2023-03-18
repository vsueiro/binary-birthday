export default class Candle {
  constructor(bit = 0, number = undefined) {
    this.bit = Number(bit);
    this.number = number;
  }
  get element() {
    const div = document.createElement("div");
    div.classList.add("candle");

    if (this.number >= 0) {
      div.dataset.number = this.number;
    }

    div.dataset.bit = this.bit;
    return div;
  }
}
