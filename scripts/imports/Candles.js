import Candle from "./Candle.js";

export default class Candles {
  constructor(decimal, selector) {
    // Set user’s age in decimal (7, 21, 60, etc)
    this.decimal = Number(decimal);

    // Set container element
    this.element = document.querySelector(selector);
  }
  get binary() {
    // Convert to binary string
    const binary = this.decimal.toString(2);

    return binary;
  }

  get total() {
    // How many candles will it neeed?
    return this.binary.length;
  }

  get lit() {
    // How many candles I need to light up?
    let lit = 0;

    for (let bit of this.binary) {
      if (bit === "1") lit++;
    }

    return lit;
  }

  show() {
    // Clear candles
    this.element.replaceChildren();

    // For each binary digit
    for (let bit of this.binary) {
      // Create a candle (either on or off)
      const candle = new Candle(bit);

      // Add candle image to page
      this.element.append(candle.image);
    }
  }

  describe(selector) {
    // Get description container element
    const description = document.querySelector(selector);

    // Clear explanation
    description.replaceChildren();

    // Get relevant numbers
    const total = this.total;
    const lit = this.lit;

    // Create result text
    const p = document.createElement("p");

    // Choose funny closing phrase
    let closing = "";

    // All candles are lit
    if (total === lit) {
      closing = "It’s your special day! Blow those candles & make a wish!";
    }
    // Only 1 candle is lit
    else if (total > 2 && lit === 1) {
      closing = "I guess one is better than none… right? Happy Birthday!";
    }
    // Only 1 candle is off
    else if (total === lit + 1) {
      closing = "Save the remaining one for next year!";
    }
    // A few candles are off
    else {
      closing = "Save the rest for next year’s celebration!";
    }

    // Build description content
    p.innerHTML = `
      You will need

      <strong>
      ${total}
      </strong>

      candles.
      <br>
      ${total === lit ? "All" : "But only"}

      <strong>
      ${lit}
      </strong>

      of them need to be lit.

      <em>${closing}</em>
    `;

    // Add description to page
    description.append(p);
  }
}
