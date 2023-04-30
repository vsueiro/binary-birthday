export default class Sounds {
  constructor() {
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

    // By https://freesound.org/people/gis_sweden/sounds/651801/
    this.background = new Howl({
      src: ["audio/music.mp3"],
      volume: 0.025,
      loop: true,
    });

    document.addEventListener(
      "click",
      () => {
        this.background.play();
        this.background.fade(0, 0.05, 1000);
      },
      { once: true }
    );
  }

  mute() {
    for (let sound in this) {
      this[sound].mute(true);
    }
  }

  unmute() {
    for (let sound in this) {
      this[sound].mute(false);
    }
  }
}
