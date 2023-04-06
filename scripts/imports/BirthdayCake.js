import DecimalCandles from "./DecimalCandles.js";
import Connectors from "./Connectors.js";
import Labels from "./Labels.js";
import BinaryCandles from "./BinaryCandles.js";
import Cake from "./Cake.js";

export default class BirthdayCake {
  constructor(container, options) {
    this.defaults = {
      age: 7,
      minCandles: 7,
    };

    this.container = document.querySelector(container);
    this.options = Object.assign({}, this.defaults, options);
    this.age = this.options.age;

    this.setup();
  }
  get binary() {
    const string = this.age.toString(2);
    const paddedString = string.padStart(this.options.minCandles, "0");
    return paddedString;
  }

  get decimal() {
    return this.age.toString(10);
  }

  createElements() {
    this.el = {};
    this.el.candles = {};

    this.el.candles.decimal = document.createElement("div");
    this.el.candles.decimal.classList.add("candles");

    this.el.connectors = document.createElement("div");
    this.el.connectors.classList.add("connectors");

    this.el.labels = document.createElement("div");
    this.el.labels.classList.add("labels");

    this.el.candles.binary = document.createElement("div");
    this.el.candles.binary.classList.add("candles");

    this.el.cake = document.createElement("div");
    this.el.cake.classList.add("cake");

    this.container.append(
      this.el.candles.decimal,
      this.el.connectors,
      this.el.labels,
      this.el.candles.binary,
      this.el.cake
    );
  }

  setup() {
    this.createElements();

    this.candles = {};

    this.candles.decimal = new DecimalCandles(this.el.candles.decimal, this);
    this.connectors = new Connectors(this.el.connectors, this);
    this.labels = new Labels(this.el.labels, this);
    this.candles.binary = new BinaryCandles(this.el.candles.binary, this);
    this.cake = new Cake(this.el.cake, this);
  }

  setAgeFromInput() {
    const decimal = this.candles.decimal.form.input.value;
    const age = Number(decimal);
    this.age = age;
  }

  setAgeFromCandles() {
    const binary = this.candles.binary.string;
    const age = parseInt(binary, 2);
    this.age = age;
  }

  update(step) {
    if (step === 0) {
      this.age = 7;
      this.options.minCandles = 0;
      this.candles.decimal.form.hide();
      this.candles.decimal.show();
      this.connectors.hide();
      this.labels.hide();
      this.candles.binary.hide();
    } else if (step === 1) {
      this.age = 7;
      this.age = "seven";
      this.options.minCandles = 0;
      this.candles.decimal.form.hide();
      this.candles.decimal.show();
      this.connectors.hide();
      this.labels.hide();
      this.candles.binary.hide();
    } else if (step === 2) {
      this.age = 127;
      this.options.minCandles = 0;
      this.candles.decimal.form.hide();
      this.candles.decimal.hide();
      this.connectors.hide();
      this.labels.hide();
      this.candles.binary.show();
    } else if (step === 3) {
      this.age = 7;
      this.options.minCandles = 0;
      this.candles.decimal.form.hide();
      this.candles.decimal.hide();
      this.connectors.hide();
      this.labels.hide();
      this.candles.binary.show();
    }

    this.candles.decimal.update(this.decimal);
    this.connectors.update(this.binary);
    this.labels.update(this.binary);
    this.candles.binary.update(this.binary);
  }
}
