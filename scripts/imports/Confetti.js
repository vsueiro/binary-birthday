export default class Confetti {
  constructor(selector) {
    if (!selector) return;
    this.element = document.querySelector(selector);
    this.amount = 256;
    this.symbols = "○●□■△▲";
    this.create();
  }

  randomSymbol() {
    let index = Math.floor(Math.random() * this.symbols.length);
    return this.symbols[index];
  }

  randomDelay() {
    // -20 to 20
    return Math.random() * 40 - 20;
  }

  randomDuration() {
    // 8 to 16
    return 8 + Math.random() * 8;
  }

  create() {
    for (let i = 0; i < this.amount; i++) {
      const symbol = this.randomSymbol();
      const delay = this.randomDelay();
      const duration = this.randomDuration();

      const markup = `
        <div
          class="symbol-track"
          style="animation-delay: ${delay}s; animation-duration: ${duration}s">
          <div
            class="symbol"
            style="animation-delay: ${delay}s; animation-duration: ${duration}s">
              ${symbol}
          </div>
        </div>
      `;
      this.element.insertAdjacentHTML("beforeend", markup);
    }
  }
}
