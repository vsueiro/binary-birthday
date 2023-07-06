export default class StartScreen {
  constructor(container, app) {
    this.container = container;
    this.app = app;
    this.dialog = document.querySelector(this.container);
    this.dialogConfirm = this.dialog.querySelector("#audio-enable");
    this.typerDelay = 500;

    this.setup();
  }

  setup() {
    this.dialog.showModal();

    this.dialog.addEventListener("close", () => {
      if (this.dialog.returnValue === "confirm") {
        this.startWithAudio();
      }
    });
  }

  startWithAudio() {
    this.app.sounds.controller.unmute();
    this.app.sounds.controller.unmuteBackground();
    this.app.sounds.controller.fadeIn("background");

    setTimeout(() => {
      const first = this.app.birthdayCake.explainer.swiper.slides[0];
      this.app.birthdayCake.explainer.typer.type(first);
    }, this.typerDelay);
  }
}
