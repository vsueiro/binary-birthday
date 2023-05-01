export default class Sounds {
  constructor(selector) {
    this.button = document.querySelector(selector);
    this.muted = false;
    this.list = {};

    this.setup();
    this.events();
  }

  setup() {
    // By https://freesound.org/people/UberBosser/sounds/421581/
    this.list.key = new Howl({
      src: ["audio/key.mp3"],
      volume: 1,
    });

    this.list.candle = new Howl({
      src: ["audio/hit.mp3"],
      volume: 0.2,
    });

    // By https://freesound.org/people/ironcross32/sounds/582905/
    this.list.type = new Howl({
      src: ["audio/beep.mp3"],
      volume: 0.025,
    });

    // By https://freesound.org/people/gis_sweden/sounds/651801/
    this.list.music = new Howl({
      src: ["audio/music.mp3"],
      volume: 0.05,
      loop: true,
    });
  }

  events() {
    this.button.addEventListener("click", () => {
      if (this.muted) {
        this.unmute();
      } else {
        this.mute();
      }
    });
    document.addEventListener(
      "click",
      () => {
        this.list.music.play();
        this.list.music.fade(0, 0.05, 1000);
      },
      { once: true }
    );
  }

  mute() {
    for (let sound in this.list) {
      this.list[sound].mute(true);
    }
    this.muted = true;
  }

  unmute() {
    for (let sound in this.list) {
      this.list[sound].mute(false);
    }
    this.muted = false;
  }
}
