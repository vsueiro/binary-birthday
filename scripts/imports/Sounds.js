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
  }
}
