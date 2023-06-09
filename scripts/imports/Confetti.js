export default class Confetti {
  constructor(container) {
    this.container = document.querySelector(container);
    this.amount = 32;
    this.symbols = "○●□■△▲";
    this.create();
  }

  randomSymbol() {
    const index = Math.floor(Math.random() * this.symbols.length);
    return this.symbols[index];
  }

  randomDelay() {
    // -20 to 20s
    return Math.random() * 40 - 20;
  }

  randomDuration() {
    // 8 to 16s
    return 8 + Math.random() * 8;
  }

  create() {
    let markup = ``;

    for (let i = 0; i < this.amount; i++) {
      const symbol = this.randomSymbol();
      const delay = this.randomDelay();
      const duration = this.randomDuration();

      markup += `
        <div
          class="particle-track"
          style="animation-delay: ${delay}s; animation-duration: ${duration}s">
          <div
            class="particle"
            style="animation-delay: ${delay}s; animation-duration: ${duration}s">
              ${symbol}
          </div>
        </div>
      `;
    }

    this.container.innerHTML = markup;
  }
}
