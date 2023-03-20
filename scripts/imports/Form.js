export default class Form {
  constructor(selector) {
    // Store refence to <form> element
    this.element = document.querySelector(selector);

    this.minus = this.element.querySelector("button.minus");
    this.plus = this.element.querySelector("button.plus");
    this.age = this.element.querySelector("input#age");

    this.enableActiveState();
  }

  enableActiveState() {
    // Show :active state on iOS Safari
    const buttons = document.querySelectorAll("button");
    for (let button of buttons) {
      button.ontouchstart = "";
    }
  }

  get data() {
    // Extract form data
    const formData = new FormData(this.element);

    // Turn form data into object
    let data = Object.fromEntries(formData);

    /* TEMP: Disable to make it simpler

    // Parse specific properties as numbers or booleans
    const Numbers = ["age"];
    const Booleans = [];

    // For each value in the form
    for (let key in data) {
      // If it’s supposed to be a number
      if (Numbers.includes(key)) {
        // Convert it to a number
        data[key] = Number(data[key]);
      }
      // If it’s supposed to be a boolean
      else if (Booleans.includes(key)) {
        // Convert it to a boolean
        if (data[key] === "on") {
          data[key] = true;
        }
      }
    }

    */

    // Return converted object
    return data;
  }

  constrain(field, value) {
    const min = Number(this[field].min);
    const max = Number(this[field].max);

    this[field].value = value;

    if (value < min) {
      this[field].value = min;
    }

    if (value > max) {
      this[field].value = max;
    }
  }

  callback(customFunction) {
    this.element.addEventListener("submit", (event) => {
      // Handle form submission using custom callback function
      if (customFunction) {
        customFunction(this);
      }
      event.preventDefault();
    });
  }
}
