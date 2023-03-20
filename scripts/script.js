import Confetti from "./imports/Confetti.js";
import Candles from "./imports/Candles.js";
import Form from "./imports/Form.js";

new Confetti(".confetti");

const form = new Form("form");

// When form is submitted
form.callback((form) => {
  // Get object with form values
  const data = form.data;

  // Get age value
  const age = data.age;

  // Convert age from decimal to binary
  const candles = new Candles(age, ".candles");

  // Show candles
  candles.show();

  // Show result descriptioon
  candles.describe(".description");
});

// Show age as numbered candles
function updateDisplay(value) {
  const age = form.age.value;
  const min = Number(form.age.min);
  const max = Number(form.age.max);

  if (age < min || age > max) {
    console.log("Age is out of bounds");
  }

  const selector = ".age-display";
  const candles = new Candles(age, selector, "numbered");
  candles.show();
}

// When age is changed by clicking - button
form.minus.addEventListener("click", () => {
  const value = Number(form.age.value) - 1;
  form.constrain("age", value);
  updateDisplay();
});

// When age is changed by clicking + button
form.plus.addEventListener("click", () => {
  const value = Number(form.age.value) + 1;
  form.constrain("age", value);
  updateDisplay();
});

// When age is manually changed
form.age.addEventListener("input", () => {
  const value = Number(form.age.value);
  form.constrain("age", value);
  updateDisplay();
});

// Clear age input the first time it is focused
form.age.addEventListener(
  "focus",
  () => {
    form.age.value = "0";
    updateDisplay();
    return;
  },
  { once: true }
);

updateDisplay();
