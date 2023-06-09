export default class Balloons {
  constructor(container) {
    this.container = document.querySelector(container);

    this.count = 12;
    this.tracks = [];
    this.colors = ["deeppink", "tomato", "coral", "hotpink"];

    this.setup();
  }

  get randomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  release() {
    for (let track of this.tracks) {
      let delay = Math.random() * 500;

      track.classList.remove("released");

      setTimeout(() => {
        track.classList.add("released");
      }, delay);
    }
  }

  setup() {
    for (let i = 0; i < this.count; i++) {
      let track = document.createElement("div");
      track.classList.add("balloon-track");

      let balloon = document.createElement("div");
      balloon.classList.add(
        "emoji",
        "emoji-balloon",
        `emoji-balloon-${this.randomColor}`
      );

      balloon.style;

      track.append(balloon);
      this.container.append(track);

      this.tracks.push(track);
    }
  }
}
