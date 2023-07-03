export default class SoundController {
  constructor(selector, sounds) {
    this.button = document.querySelector(selector);

    this.sounds = sounds;
    this.muted = true;

    this.dialog = document.querySelector("#audio-dialog");
    this.dialogConfirm = document.querySelector("#audio-enable");

    this.setup();
  }

  setup() {
    this.dialog.showModal();

    this.dialog.addEventListener("close", () => {
      if (this.dialog.returnValue === "confirm") {
        this.unmute();
        this.unmuteBackground();
      }
    });

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
    this.sounds.background.fade(0.8, 0, 1000);
  }

  unmuteBackground() {
    if (this.sounds.background.playing() === false) {
      this.sounds.background.play();
    }
    this.sounds.background.fade(0, 0.8, 1000);
  }

  // show() {
  //   this.button.parentElement.dataset.visible = "true";
  // }
}
