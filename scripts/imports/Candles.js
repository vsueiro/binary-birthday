export default class Candles {
  constructor(decimal) {
    // Set user’s age in decimal (7, 21, 60, etc)
    this.decimal = Number(decimal);
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

  show(container) {
    // Get relevant numbers
    const total = this.total;
    const lit = this.lit;

    // Create result text
    const p = document.createElement("p");
    p.innerHTML = `

      ${this.binary}

      <br><br>

      You will need
      ${total}
      candles.

      ${total === lit ? "All" : "But only"}
      ${lit}
      of them need to be lit.
    `;

    // Clear container
    container.replaceChildren();

    // Add text to page
    container.append(p);
  }
}
