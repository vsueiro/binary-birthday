import Preloader from "./imports/Preloader.js";
import Confetti from "./imports/Confetti.js";
import BirthdayCake from "./imports/BirthdayCake.js";
import Explainer from "./imports/Explainer.js";

const confetti = new Confetti(".confetti");
const birthdayCake = new BirthdayCake(".birthday-cake");
const explainer = new Explainer(".explainer", birthdayCake);

new Preloader(
  "./media/button-minus.png",
  "./media/button-plus.png",
  "./media/cake.png",
  "./media/cake-outline.png",
  "./media/candle-number-0.png",
  "./media/candle-number-1.png",
  "./media/candle-number-2.png",
  "./media/candle-number-3.png",
  "./media/candle-number-4.png",
  "./media/candle-number-5.png",
  "./media/candle-number-6.png",
  "./media/candle-number-7.png",
  "./media/candle-number-8.png",
  "./media/candle-number-9.png",
  "./media/candle-stick.png",
  "./media/candle-wick-0.png",
  "./media/candle-wick-1.png",
  "./media/strawberry-0.png",
  "./media/strawberry-1-outline.png",
  "./media/strawberry-1.png",
  "./media/strawberry-2-outline.png",
  "./media/strawberry-2.png",
  "./media/strawberry-0-outline.png"
);
