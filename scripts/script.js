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

  // Show explanation
  candles.explain(".explanation");
});
