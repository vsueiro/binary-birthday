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
    this.lives = 7;
    this.maxLives = 7;
    this.lost = false;
    this.won = false;

    this.shuffleAge();
    this.displayScore();
  }

  get binary() {
    const string = this.shuffledAge.toString(2);
    const paddedString = string.padStart(
      this.birthdayCake.options.minCandles,
      "0"
    );
    return paddedString;
  }

  random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  get isActive() {
    const currentStep = this.birthdayCake.explainer.swiper.activeIndex;
    return currentStep === this.quizStep;
  }

  get isPlayable() {
    if (this.lost || this.won) {
      return false;
    } else {
      return true;
    }
  }

  checkAnswer() {
    if (this.isActive && this.isPlayable) {
      if (this.birthdayCake.age === this.shuffledAge) {
        this.success();
      } else {
        const userGuess = this.birthdayCake.binary;
        const target = this.binary;

        for (let i = 0; i < userGuess.length; i++) {
          let userDigit = userGuess[i];
          let targetDigit = target[i];

          if (userDigit === "1") {
            if (targetDigit !== "1") {
              const fixedGuess = this.fixGuess(userGuess, i, "0");
              const fixedAge = parseInt(fixedGuess, 2);

              this.birthdayCake.age = fixedAge;
              this.birthdayCake.update();

              this.error(i);
            }
          }
        }
      }
    }
  }

  fixGuess(guess, index, value) {
    let chars = guess.split("");
    chars[index] = value;
    return chars.join("");
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

  updateLives(increment = -1) {
    this.lives += increment;

    this.displayLives();
  }

  displayLives() {
    const lostLives = this.maxLives - this.lives;

    const strawberries = this.birthdayCake.cake.strawberries.list;

    for (let i = 0; i < lostLives; i++) {
      const strawberry = strawberries[i];
      strawberry.eatOut();
    }

    console.log(`Only ${this.lives} strawberries left`);
  }

  error(candleIndex) {
    const candles = this.birthdayCake.candles.binary.list;
    const candle = candles[candleIndex].element;

    console.log(`Candle #${candleIndex + 1} should not be lit`);

    candle.classList.remove("just-lit-by-mistake");
    candle.classList.add("just-lit-by-mistake");

    setTimeout(() => {
      candle.classList.remove("just-lit-by-mistake");
    }, 1000);

    this.updateLives(-1);

    if (this.lives <= 0) {
      alert("Game Over");
      this.lost = true;
    }
  }
}
