import Candles from "./Candles.js";

export default class AgeDisplay {
  constructor(selector, form) {
    this.selector = selector;
    this.form = form;
  }

  // Show age as numbered candles
  update() {
    const age = this.form.age.value;

    const candles = new Candles(age, this.selector, "numbered");
    candles.show();

    /*
    const min = Number(form.age.min);
    const max = Number(form.age.max);

    if (age < min || age > max) {
      console.log("Age is out of bounds");
    }
    */
  }
}
