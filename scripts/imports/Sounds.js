export default class Sounds {
  constructor() {
    this.path = "./sounds/";
  }

  play(file) {
    const audio = new Audio(this.path + file);
    audio.volume = 0.1;
    audio.play();
  }
}
