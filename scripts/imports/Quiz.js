export default class Quiz {
  constructor(birthdayCake) {
    this.birthdayCake = birthdayCake;

    this.quizStep = 15;
    this.shuffledAge = 0;
    this.shuffledAgeElement = document.querySelector(".shuffle-age-decimal");
    this.timeout = undefined;
    this.delay = 1000;
    this.score = 0;

    // TODO: implement lives deduction for every mistake
    this.lives = 14;

    this.shuffleAge();
  }

  random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  isActive() {
    const currentStep = this.birthdayCake.explainer.swiper.activeIndex;
    return currentStep === this.quizStep;
  }

  checkAnswer() {
    if (this.isActive()) {
      if (this.birthdayCake.age === this.shuffledAge) {
        this.success();
      }

      console.log(this.birthdayCake.age);
    }
  }

  shuffleAge() {
    this.shuffledAge = this.random(1, 127);
    this.displayAge();
  }

  displayAge() {
    this.shuffledAgeElement.parentElement.classList.add("just-shuffled");

    const explainerInitialized = this.birthdayCake.explainer;

    if (explainerInitialized) {
      const typedAge = this.birthdayCake.explainer.typer.getSpans(
        String(this.shuffledAge),
        true
      );

      this.shuffledAgeElement.innerHTML = typedAge;
    } else {
      this.shuffledAgeElement.innerHTML = this.shuffledAge;
    }

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.shuffledAgeElement.parentElement.classList.remove("just-shuffled");
    }, this.delay);
  }

  resetCakeAge() {
    this.birthdayCake.age = 0;
    this.birthdayCake.update();
  }

  success() {
    this.score += 1;

    alert(
      "Yay! You got it! [Fireworks animation!] Now, try with another number…"
    );

    this.resetCakeAge();
    this.shuffleAge();
  }
}
