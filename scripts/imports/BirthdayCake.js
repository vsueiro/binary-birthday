import Connectors from "./Connectors.js";
import Labels from "./Labels.js";
import Candles from "./Candles.js";
import Cake from "./Cake.js";

export default class BirthdayCake {
  constructor(container, options) {
    this.defaults = {
      age: 21,
    };

    this.options = Object.assign({}, this.defaults, options);

    this.container = document.querySelector(container);

    this.setup();
  }
  get binary() {
    return this.options.age.toString(2);
  }
  setup() {
    this.containers = {};

    this.containers.candlesDecimal = document.createElement("div");
    this.containers.candlesDecimal.classList.add("candles");

    this.containers.connectors = document.createElement("div");
    this.containers.connectors.classList.add("connectors");

    this.containers.labels = document.createElement("div");
    this.containers.labels.classList.add("labels");

    this.containers.candlesBinary = document.createElement("div");
    this.containers.candlesBinary.classList.add("candles");

    this.containers.cake = document.createElement("div");
    this.containers.cake.classList.add("cake");

    this.container.append(
      this.containers.candlesDecimal,
      this.containers.connectors,
      this.containers.labels,
      this.containers.candlesBinary,
      this.containers.cake
    );

    this.candlesDecimal = new Candles(this.containers.candlesDecimal);
    this.connectors = new Connectors(this.containers.connectors);
    this.labels = new Labels(this.containers.labels);
    this.candlesBinary = new Candles(this.containers.candlesBinary);
    this.cake = new Cake(this.containers.cake);

    this.update();
  }
  update() {
    this.connectors.update(this.binary);
    this.candlesBinary.update(this.binary);
    this.labels.update(this.binary);
  }
}
