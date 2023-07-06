import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
import Typer from "./Typer.js";
import Quiz from "./Quiz.js";

export default class Explainer {
  constructor(container, birthdayCake) {
    this.container = document.querySelector(container);
    this.birthdayCake = birthdayCake;
    this.initialDelay = 2500;
    this.timeout;

    this.quiz = new Quiz(this.birthdayCake);
    this.typer = new Typer(this.container, ".box p");

    this.swiper = new Swiper(".swiper", {
      centeredSlides: true,
      allowTouchMove: false,
      speed: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      keyboard: {
        enabled: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      on: {
        init: () => this.birthdayCake.app.preloader.addDependency(),
      },
    });

    this.swiper.on("slideChange", () => {
      clearTimeout(this.timeout);

      const step = this.swiper.activeIndex;
      const slide = this.swiper.slides[step];

      if (slide.classList.contains("quiz")) {
        this.birthdayCake.app.element.dataset.quiz = "true";
      } else {
        this.birthdayCake.app.element.dataset.quiz = "false";
      }

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

  updateDynamicText() {
    const decimals = document.querySelectorAll(".user-age-decimal");
    const binaries = document.querySelectorAll(".user-age-binary");
    const typed = true;

    for (let decimal of decimals) {
      decimal.textContent = this.birthdayCake.age;
      this.typer.addSpans(decimal, typed);
    }
    for (let binary of binaries) {
      binary.textContent = this.birthdayCake.age.toString(2);
      this.typer.addSpans(binary, typed);
    }
  }

  setup() {
    setTimeout(() => {
      this.container.dataset.visible = "true";
    }, 1000);
  }

  disableNext() {
    const next = this.swiper.navigation.nextEl[0];
    next.classList.add("swiper-button-lock");
    next.blur();
    this.swiper.allowSlideNext = false;
  }

  enableNext() {
    const next = this.swiper.navigation.nextEl[0];
    next.classList.remove("swiper-button-lock");
    this.swiper.allowSlideNext = true;
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
        this.enableNext();
    }

    this.updateDynamicText();
  }
}
