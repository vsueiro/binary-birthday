import DecimalCandles from "./DecimalCandles.js";
import Connectors from "./Connectors.js";
import Labels from "./Labels.js";
import BinaryCandles from "./BinaryCandles.js";
import Cake from "./Cake.js";
import Logo from "./Logo.js";
import Explainer from "./Explainer.js";
import Navigation from "./Navigation.js";

export default class BirthdayCake {
  constructor(container, app, options) {
    this.defaults = {
      age: 7,
      minCandles: 7,
    };

    this.container = document.querySelector(container);
    this.app = app;
    this.options = Object.assign({}, this.defaults, options);
    this.age = this.options.age;
    this.userAge = 0;
    this.step = 0;
    this.state = 0;
    this.timeout;

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
    this.logo = new Logo(".logo", this);
    this.navigation = new Navigation(".navigation", this);

    this.explainer = new Explainer(".explainer", this);

    this.handle(this.step);
    this.update();
  }

  update() {
    this.candles.decimal.update(this.decimal);
    this.connectors.update(this.binary);
    this.labels.update(this.binary);
    this.candles.binary.update(this.binary);
    this.explainer.update();
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

  switchBackgroundMusic(step) {
    const slide = this.explainer.swiper.slides[step];
    const isPuzzle = slide.classList.contains("quiz");

    let from = "backgroundPuzzle";
    let to = "background";

    if (isPuzzle) {
      from = "background";
      to = "backgroundPuzzle";
    }

    this.app.sounds.controller.crossFade(from, to);
  }

  handle(step) {
    clearTimeout(this.timeout);

    this.step = step;
    this.app.element.dataset.step = this.step;

    this.switchBackgroundMusic(step);

    switch (step) {
      case 0:
        this.age = 7;
        this.options.minCandles = 0;
        this.logo.show();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.hide();
        this.labels.hide();
        this.candles.binary.hide();
        break;

      case 1:
        this.age = "seven";
        this.options.minCandles = 0;
        this.logo.show();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.hide();
        this.labels.hide();
        this.candles.binary.hide();
        break;

      case 2:
        this.age = 127;
        this.options.minCandles = 7;
        this.logo.show();
        this.candles.decimal.form.hide();
        this.candles.decimal.hide();
        this.connectors.hide();
        this.labels.hide();
        this.candles.binary.show();
        break;

      case 3:
        this.age = 7;
        this.options.minCandles = 3;
        this.logo.show();
        this.candles.decimal.form.hide();
        this.candles.decimal.hide();
        this.connectors.hide();
        this.labels.hide();
        this.candles.binary.show();
        break;

      case 4:
        this.age = 7;
        this.options.minCandles = 3;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.hide();
        this.connectors.hide();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 5:
        this.age = 7;
        this.options.minCandles = 3;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 6:
        this.age = 7;
        this.options.minCandles = 4;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 7:
        this.age = 8;
        this.options.minCandles = 4;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 8:
        this.age = 8;
        this.options.minCandles = 4;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 9:
        this.age = this.userAge ? this.userAge : 0;
        this.options.minCandles = 7;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 10:
        if (this.explainer.direction === "next") {
          this.userAge = this.age;
        } else {
          this.age = this.userAge;
        }
        this.options.minCandles = 7;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 11:
        if (this.explainer.direction === "next") {
          this.userAge = this.age;
        }
        this.age = this.userAge;
        this.options.minCandles = 7;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 12:
        this.age = 127;
        this.options.minCandles = 7;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.hide();
        this.connectors.hide();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 13:
        if (this.age === 1) {
          this.age = 0;
        } else {
          this.age = 1;
        }

        this.update();

        this.options.minCandles = 0;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.hide();
        this.connectors.hide();
        this.labels.show();
        this.candles.binary.show();

        this.timeout = setTimeout(() => {
          this.handle(this.step);
        }, 1000);
        break;

      case 14:
        this.age = 0;
        this.options.minCandles = 7;
        this.logo.hide();
        this.candles.decimal.form.show();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      case 15:
        this.age = 0;
        this.options.minCandles = 7;
        this.logo.hide();
        this.candles.decimal.form.hide();
        this.candles.decimal.show();
        this.connectors.show();
        this.labels.show();
        this.candles.binary.show();
        break;

      default:
    }
  }
}
