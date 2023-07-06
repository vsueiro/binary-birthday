import SoundController from "./SoundController.js";

export default class Sounds {
  constructor(selector, app) {
    this.app = app;
    this.volume = {};
    this.volume.background = 0.8;

    // By https://freesound.org/people/UberBosser/sounds/421581/
    this.key = new Howl({
      src: ["audio/key.mp3"],
      volume: 1,
    });

    this.candle = new Howl({
      src: ["audio/hit.mp3"],
      volume: 0.2,
    });

    // By https://freesound.org/people/ironcross32/sounds/582905/
    this.type = new Howl({
      src: ["audio/beep.mp3"],
      volume: 0.025,
    });

    this.background = new Howl({
      src: ["audio/Binary_Bday_Track_1.mp3"],
      volume: 0,
      loop: true,
      onload: () => this.app.preloader.addDependency(),
    });

    this.backgroundPuzzle = new Howl({
      src: ["audio/Binary_Bday_Solo_Drums.mp3"],
      volume: 0,
      loop: true,
      onload: () => this.app.preloader.addDependency(),
    });

    this.controller = new SoundController(selector, this, app);

    this.mute();
  }

  mute() {
    for (let sound in this) {
      if (this[sound] instanceof Howl) {
        this[sound].mute(true);
      }
    }
  }

  unmute() {
    for (let sound in this) {
      if (this[sound] instanceof Howl) {
        this[sound].mute(false);
      }
    }
  }
}
