import Candles from "./imports/Candles.js";
import Candle from "./imports/Candle.js";
import Form from "./imports/Form.js";

const form = new Form("form");

// When form is submitted
form.callback((form) => {
  // Get object with form values
  const data = form.data;

  // Get age value
  const age = data.age;

  // Convert age from decimal to binary
  const candles = new Candles(age);

  // TEMP: display results
  const result = document.querySelector("#result");
  candles.show(result);
});

// new Candle();
