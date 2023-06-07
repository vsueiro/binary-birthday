export default class Quiz {
  constructor(birthdayCake) {
    this.birthdayCake = birthdayCake;

    this.quizStep = 15;
    this.shuffledAge = 0;
    this.elements = {};

    this.elements.shuffledAge = document.querySelector(".shuffle-age-decimal");
    this.elements.score = document.querySelector(".score");
    this.elements.balloons =
      this.elements.score.querySelectorAll(".emoji-balloon");

    this.timeout = undefined;
    this.delay = 1000;
    this.score = 0;
    this.maxScore = 5;
    this.lost = false;
    this.won = false;

    // TODO: implement lives deduction for every mistake
    this.lives = 14;

    this.shuffleAge();
    this.displayScore();
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
    this.elements.shuffledAge.parentElement.classList.add("just-shuffled");

    const explainerInitialized = this.birthdayCake.explainer;

    if (explainerInitialized) {
      const typedAge = this.birthdayCake.explainer.typer.getSpans(
        String(this.shuffledAge),
        true
      );

      this.elements.shuffledAge.innerHTML = typedAge;
    } else {
      this.elements.shuffledAge.innerHTML = this.shuffledAge;
    }

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.elements.shuffledAge.parentElement.classList.remove("just-shuffled");
    }, this.delay);
  }

  displayScore() {
    const empty = "emoji-balloon-empty";

    for (let i = 0; i < this.score; i++) {
      const length = this.elements.balloons.length - 1;
      const index = length - i;
      const balloon = this.elements.balloons[index];

      const isMostRecent = i === this.score - 1;

      if (isMostRecent) {
        balloon.classList.add("just-scored");
      }

      balloon.classList.remove(empty);
    }

    // const remaining = this.maxScore - this.score;
    // const string = todo.repeat(remaining) + done.repeat(this.score);
    // this.elements.score.textContent = string;
  }

  resetCakeAge() {
    this.birthdayCake.age = 0;
    this.birthdayCake.update();
  }

  updateScore(increment = 1) {
    this.score += increment;

    this.displayScore();
  }

  success() {
    this.updateScore();

    alert(
      "Yay! You got it! [Fireworks animation!] Now, try with another number…"
    );

    this.resetCakeAge();

    if (this.score < this.maxScore) {
      this.shuffleAge();
    } else {
      this.won = true;
      alert("Congrats! You got 5 questions right!");
    }
  }
}
