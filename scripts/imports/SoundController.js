export default class SoundController {
  constructor(selector, sounds) {
    this.button = document.querySelector(selector);

    this.sounds = sounds;
    this.muted = true;

    this.dialog = document.querySelector("#audio-dialog");
    this.dialogConfirm = document.querySelector("#audio-enable");

    this.crossFaded = {};
    this.crossFaded.from = undefined;
    this.crossFaded.to = undefined;

    this.setup();
  }

  setup() {
    this.dialog.showModal();

    this.dialog.addEventListener("close", () => {
      if (this.dialog.returnValue === "confirm") {
        this.unmute();
        this.unmuteBackground();
        this.fadeIn("background");
      }
    });

    this.button.addEventListener("click", () => {
      if (this.muted) this.unmute();
      else this.mute();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        this.muteBackground();
      } else if (document.visibilityState === "visible") {
        this.unmuteBackground();

        const { from, to } = this.crossFaded;
        this.crossFade(from, to);
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
    this.fadeOut("background");
    this.fadeOut("backgroundPuzzle");
  }

  unmuteBackground() {
    if (this.sounds.background.playing() === false) {
      this.sounds.background.play();
      this.sounds.backgroundPuzzle.play();
    }
  }

  fadeIn(sound, volume, duration = 1000) {
    volume = volume || this.sounds.volume.background;

    this.sounds[sound].fade(0, volume, duration);
  }

  fadeOut(sound, duration = 1000) {
    const currentVolume = this.sounds[sound].volume();
    this.sounds[sound].fade(currentVolume, 0, duration);
  }

  crossFade(from, to, duration = 1000) {
    const volume = this.sounds.volume.background;

    const fromCurrentVolume = this.sounds[from].volume();
    const toCurrentVolume = this.sounds[to].volume();

    this.sounds[from].fade(fromCurrentVolume, 0, duration);
    this.sounds[to].fade(toCurrentVolume, volume, duration);

    this.crossFaded.from = from;
    this.crossFaded.to = to;
  }
}
