export default class SoundController {
  constructor(selector, sounds) {
    this.button = document.querySelector(selector);
    this.sounds = sounds;
    this.muted = false;

    this.setup();
  }

  setup() {
    this.button.addEventListener("click", () => {
      if (this.muted) this.unmute();
      else this.mute();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.unmuteBackground();
      } else if (document.visibilityState === "hidden") {
        this.muteBackground();
      }
    });
  }

  mute() {
    this.sounds.mute();
    this.muted = true;
    this.button.dataset.muted = this.muted;
  }

  unmute() {
    this.sounds.unmute();
    this.muted = false;
    this.button.dataset.muted = this.muted;
  }

  muteBackground() {
    this.sounds.background.fade(0.05, 0, 1000);
  }

  unmuteBackground() {
    if (this.sounds.background.playing() === false) {
      this.sounds.background.play();
    }
    this.sounds.background.fade(0, 0.05, 1000);
  }

  show() {
    this.button.parentElement.dataset.visible = "true";
  }
}
