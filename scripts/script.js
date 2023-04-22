import Preloader from "./imports/Preloader.js";
import Confetti from "./imports/Confetti.js";
import BirthdayCake from "./imports/BirthdayCake.js";
import Explainer from "./imports/Explainer.js";

const confetti = new Confetti(".confetti");

document.querySelector(".start-button").addEventListener("click", (event) => {
  const birthdayCake = new BirthdayCake(".birthday-cake");
  const explainer = new Explainer(".explainer", birthdayCake);

  // Enable audio

  event.target.closest(".start-screen").remove();
});

new Preloader(
  "./images/composite/logo.png",
  "./images/button-minus.png",
  "./images/button-plus.png",
  "./images/cake.png",
  "./images/cake-outline.png",
  "./images/candle-number-0.png",
  "./images/candle-number-1.png",
  "./images/candle-number-2.png",
  "./images/candle-number-3.png",
  "./images/candle-number-4.png",
  "./images/candle-number-5.png",
  "./images/candle-number-6.png",
  "./images/candle-number-7.png",
  "./images/candle-number-8.png",
  "./images/candle-number-9.png",
  "./images/candle-stick.png",
  "./images/candle-wick-0.png",
  "./images/candle-wick-1.png",
  "./images/strawberry-0.png",
  "./images/strawberry-1-outline.png",
  "./images/strawberry-1.png",
  "./images/strawberry-2-outline.png",
  "./images/strawberry-2.png",
  "./images/strawberry-0-outline.png"
);
