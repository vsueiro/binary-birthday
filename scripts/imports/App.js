import Preloader from "./Preloader.js";
import StartScreen from "./StartScreen.js";
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
    this.startScreen = new StartScreen("#audio-dialog", this);
    this.sounds = new Sounds(".audio", this);
    this.birthdayCake = new BirthdayCake(".birthday-cake", this);
    this.confetti = new Confetti(".confetti");
  }
}
