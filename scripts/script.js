import Preloader from "./imports/Preloader.js";
import Confetti from "./imports/Confetti.js";
import Candles from "./imports/Candles.js";
import Form from "./imports/Form.js";
import Buttons from "./imports/Buttons.js";

const form = new Form("form");

new Buttons("button", form);
new Confetti(".confetti");

// When form is submitted
form.callback((form) => {
  // Get object with form values
  const data = form.data;

  // Get age value
  const age = data.age;

  // Convert age from decimal to binary
  const candles = new Candles(age, ".candles");

  // Show result descriptioon
  candles.describe(".description");

  // Show candles
  candles.show();
});

// When age is manually changed
form.age.addEventListener("input", () => {
  const value = Number(form.age.value);
  form.constrain("age", value);
});

// Clear age input the first time it is focused
form.age.addEventListener(
  "focus",
  () => {
    form.constrain("age", 0);
    return;
  },
  { once: true }
);

form.ageDisplay.update();

new Preloader(
  "./media/candle-number-9.png",
  "./media/wick-1.png",
  "./media/cake-outline.png",
  "./media/cake.png",
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
  "./media/stick-0.png",
  "./media/stick-1.png",
  "./media/wick-0.png"
);
