import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
import Typer from "./Typer.js";

export default class Explainer {
  constructor(container, birthdayCake) {
    this.container = document.querySelector(container);
    this.birthdayCake = birthdayCake;

    this.typer = new Typer(this.container, ".box p");

    this.swiper = new Swiper(".swiper", {
      centeredSlides: true,
      speed: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      on: {
        // TODO: Improve design
        init: () => {
          const step = 0;
          this.birthdayCake.update(step);
          const slide = document.querySelector(".swiper-slide");
          this.typer.type(slide);
        },
      },
    });

    this.swiper.on("slideChange", () => {
      const step = this.swiper.activeIndex;
      this.birthdayCake.update(step);
      const slide = this.swiper.slides[step];
      this.typer.type(slide);
    });

    this.setup();
  }

  setup() {}
  update() {}
}
