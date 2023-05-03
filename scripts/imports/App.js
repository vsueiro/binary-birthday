import Preloader from "./Preloader.js";
import Confetti from "./Confetti.js";
import BirthdayCake from "./BirthdayCake.js";
import Sounds from "./Sounds.js";

export default class App {
  constructor() {
    this.delay = 1000;

    this.setup();
  }

  setup() {
    window.sounds = new Sounds(".audio");

    this.confetti = new Confetti(".confetti");
    this.preloader = new Preloader();

    setTimeout(() => {
      this.birthdayCake = new BirthdayCake(".birthday-cake");

      document.addEventListener(
        "click",
        () => {
          sounds.background.play();
          sounds.background.fade(0, 0.05, 1000);
          this.birthdayCake.navigation.show();
        },
        { once: true }
      );
    }, this.delay);
  }
}
