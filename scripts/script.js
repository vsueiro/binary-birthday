import Candles from "./imports/Candles.js";
import Form from "./imports/Form.js";

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
function updateDisplay() {
  const age = form.age.value;
  const selector = ".age-display";
  const candles = new Candles(age, selector, "numbered");

  candles.show();
}

// When age is changed by clicking - button
form.minus.addEventListener("click", () => {
  const value = Number(form.age.value) - 1;
  const min = Number(form.age.min);

  if (value >= min) {
    form.age.value = value;
    updateDisplay();
  }
});

// When age is changed by clicking + button
form.plus.addEventListener("click", () => {
  const value = Number(form.age.value) + 1;
  const max = Number(form.age.max);

  if (value <= max) {
    form.age.value = value;
    updateDisplay();
  }
});

// When age is manually changed
form.age.addEventListener("input", () => {
  updateDisplay();
});

updateDisplay();
