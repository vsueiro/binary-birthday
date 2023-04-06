export default class Glow {
  constructor() {
    this.className = "glow";
    this.delay = 0;
    this.interval;
    this.selector;
  }

  clear() {
    clearInterval(this.interval);

    const elements = document.querySelectorAll(`.${this.className}`);

    for (let element of elements) {
      console.log(element);
      element.classList.remove(this.className);
    }
  }

  apply() {
    this.clear();

    if (!this.selector) {
      return;
    }

    const elements = document.querySelectorAll(this.selector);

    for (let element of elements) {
      this.interval = setInterval(() => {
        element.classList.add(this.className);
      }, this.delay);
    }
  }

  set(selector) {
    this.clear();

    this.selector = selector;
  }
}
