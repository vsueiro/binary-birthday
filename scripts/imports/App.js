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
    window.sounds = new Sounds(".audio");

    this.confetti = new Confetti(".confetti");
    this.preloader = new Preloader();

    setTimeout(() => {
      this.birthdayCake = new BirthdayCake(".birthday-cake", this.element);

      this.element.classList.add("initialized");
      // document.addEventListener(
      //   "click",
      //   () => {
      //     sounds.background.play();
      //     sounds.background.fade(0, 0.05, 1000);
      //     sounds.controller.show();
      //   },
      //   { once: true }
      // );
    }, this.delay);
  }
}
