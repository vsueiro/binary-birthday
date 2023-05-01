export default class SoundController {
  constructor(selector, sounds) {
    this.button = document.querySelector(selector);
    this.sounds = sounds;

    this.setup();
  }

  setup() {
    this.button.addEventListener("click", () => {
      const string = this.button.dataset.muted;
      const muted = JSON.parse(string);

      if (muted) {
        this.sounds.unmute();
        this.button.dataset.muted = false;
      } else {
        this.sounds.mute();
        this.button.dataset.muted = true;
      }
    });

    document.addEventListener(
      "click",
      () => {
        this.sounds.background.play();
        this.sounds.background.fade(0, 0.05, 1000);
      },
      { once: true }
    );
  }
}
