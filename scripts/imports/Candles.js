import Candle from "./Candle.js";

export default class Candles {
  constructor(decimal, selector, numbered = false) {
    // Set user’s age in decimal (7, 21, 60, etc)
    this.decimal = Number(decimal);

    // Check if candles should be simple or numbered
    this.numbered = numbered === false ? false : true;

    // Store selector for future use
    this.selector = selector;
  }
  get binary() {
    // Convert to binary string
    const binary = this.decimal.toString(2);

    return binary;
  }

  get binaryDigits() {
    let string = ``;

    for (let bit of this.binary) {
      string += `<span data-bit="${bit}">${bit}</span>`;
    }

    return string;
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
    // Set container element
    this.element = document.querySelector(this.selector);

    // Clear candles
    this.element.replaceChildren();

    // Check if candles should be numbered (1, 2, 3…)
    if (this.numbered) {
      // For each binary digit
      for (let digit of String(this.decimal)) {
        // Create a candle (either on or off)
        const candle = new Candle(1, digit);

        // Add candle image to page
        this.element.append(candle.element);
      }
    }

    // Otherwise, candles (either on or off)
    else {
      // For each binary digit
      for (let bit of this.binary) {
        // Create a candle (either on or off)
        const candle = new Candle(bit);

        // Add candle image to page
        this.element.append(candle.element);
      }
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

    // Choose funny closing phrase
    let closing = "";

    // All candles are lit
    if (total === lit) {
      closing = "It’s your special day! <br>Blow those candles & make a wish!";
    }
    // Only 1 candle is lit
    else if (total > 2 && lit === 1) {
      closing = "I guess one is better than none… right?";
    }
    // Only 1 candle is off
    else if (total === lit + 1) {
      closing = "Save the remaining one for next year!";
    }
    // A few candles are off
    else {
      closing = "Save the rest for next year!";
    }

    // Build description content
    const content = `
      <p>
        <em>
          Your age in binary is:
          <br>
          <code class="binary">
            ${this.binaryDigits}
          </code>
        </em>
      </p>

      <div class="birthday-cake">
        <div class="candles"></div>
        <div class="cake"></div>
      </div>

      <p>
  
        So, you will need

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

      </p>
    `;

    // Add description to page
    description.insertAdjacentHTML("beforeend", content);
  }
}
