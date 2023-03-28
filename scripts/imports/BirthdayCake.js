import Connectors from "./Connectors.js";
import Labels from "./Labels.js";
import Candles from "./Candles.js";
import Cake from "./Cake.js";

export default class BirthdayCake {
  constructor(container, options) {
    this.defaults = {
      age: 21,
      minCandles: 7,
    };

    this.options = Object.assign({}, this.defaults, options);

    this.container = document.querySelector(container);

    this.setup();
  }
  get binary() {
    const string = this.age.toString(2);
    const paddedString = string.padStart(this.options.minCandles, "0");
    return paddedString;
  }

  createContainers() {
    this.containers = {};
    this.containers.candles = {};

    this.containers.candles.decimal = document.createElement("div");
    this.containers.candles.decimal.classList.add("candles");

    this.containers.connectors = document.createElement("div");
    this.containers.connectors.classList.add("connectors");

    this.containers.labels = document.createElement("div");
    this.containers.labels.classList.add("labels");

    this.containers.candles.binary = document.createElement("div");
    this.containers.candles.binary.classList.add("candles");

    this.containers.cake = document.createElement("div");
    this.containers.cake.classList.add("cake");

    this.container.append(
      this.containers.candles.decimal,
      this.containers.connectors,
      this.containers.labels,
      this.containers.candles.binary,
      this.containers.cake
    );
  }

  setup() {
    this.age = this.options.age;

    this.createContainers();

    this.candles = {};

    this.candles.decimal = new Candles(this.containers.candles.decimal, this);
    this.connectors = new Connectors(this.containers.connectors, this);
    this.labels = new Labels(this.containers.labels, this);
    this.candles.binary = new Candles(this.containers.candles.binary, this);
    this.cake = new Cake(this.containers.cake, this);

    this.update();
  }

  setAgeFromCandles() {
    const binary = this.candles.binary.string;
    const age = parseInt(binary, 2);
    this.age = age;
  }

  update() {
    this.connectors.update(this.binary);
    this.candles.binary.update(this.binary);
    this.labels.update(this.binary);

    console.log(this.age);
  }
}
