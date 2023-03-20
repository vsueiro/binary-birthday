export default class Confetti {
  constructor(selector) {
    if (!selector) return;
    this.element = document.querySelector(selector);
    this.amount = 100;
    this.symbols = "○●□■△▲";
    this.create();
  }

  randomSymbol() {
    let index = Math.floor(Math.random() * this.symbols.length);
    return this.symbols[index];
  }

  randomDelay() {
    return Math.random() * 40;
  }

  create() {
    for (let i = 0; i < this.amount; i++) {
      const symbol = this.randomSymbol();
      const delay = this.randomDelay();

      const markup = `
        <div
          class="square-track"
          style="animation-delay: ${delay}s;"
        >
          <div
            class="square"
            style="animation-delay: ${delay}s;"
          >
              ${symbol}
          </div>
        </div>
      `;
      this.element.insertAdjacentHTML("beforeend", markup);
    }
  }
}
