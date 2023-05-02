import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
import Typer from "./Typer.js";

export default class Explainer {
  constructor(container, birthdayCake) {
    this.container = document.querySelector(container);
    this.birthdayCake = birthdayCake;
    this.initialDelay = 2500;

    this.typer = new Typer(this.container, ".box p");

    this.swiper = new Swiper(".swiper", {
      centeredSlides: true,
      allowTouchMove: false,
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
          setTimeout(() => {
            const slide = document.querySelector(".swiper-slide");
            this.typer.type(slide);
          }, this.initialDelay);
        },
      },
    });

    this.swiper.on("slideChange", () => {
      const step = this.swiper.activeIndex;
      const slide = this.swiper.slides[step];

      this.birthdayCake.handle(step);
      this.birthdayCake.update();
      this.typer.type(slide);

      sounds.key.play();
    });

    this.setup();
  }

  get direction() {
    const active = this.swiper.activeIndex;
    const previous = this.swiper.previousIndex;

    if (active > previous) {
      return "next";
    } else {
      return "prev";
    }
  }

  setup() {
    setTimeout(() => {
      this.container.dataset.visible = "true";
    }, 1000);
  }

  disableNext() {
    if (this.direction === "next") {
      this.swiper.disable();
      this.swiper.navigation.nextEl[0].blur();
    }
  }

  enableNext() {
    if (this.direction === "next") {
      this.swiper.enable();
      // this.swiper.navigation.nextEl[0].focus();
    }
  }

  update() {
    const step = this.birthdayCake.step;
    const age = this.birthdayCake.age;

    switch (step) {
      case 8:
        if (age === 9) {
          this.enableNext();
        } else {
          this.disableNext();
        }
        break;

      case 9:
        if (age > 0) {
          this.enableNext();
        } else {
          this.disableNext();
        }
        break;

      default:
    }
  }
}
