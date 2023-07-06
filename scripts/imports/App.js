import Preloader from "./Preloader.js";
import Confetti from "./Confetti.js";
import BirthdayCake from "./BirthdayCake.js";
import Sounds from "./Sounds.js";

export default class App {
  constructor(selector = ".app") {
    this.delay = 1000;
    this.element = document.querySelector(selector);

    this.setup();
  }

  setup() {
    this.preloader = new Preloader(this);

    window.sounds = new Sounds(".audio", this);

    this.confetti = new Confetti(".confetti");

    setTimeout(() => {
      this.birthdayCake = new BirthdayCake(".birthday-cake", this.element);

      this.element.classList.add("initialized");
    }, this.delay);
  }
}
