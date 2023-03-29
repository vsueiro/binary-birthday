export default class Connectors {
  constructor(container, birthdayCake, binary = "0") {
    this.container = container;
    this.birthdayCake = birthdayCake;
    this.binary = binary;
    this.size = 32;
    this.width = 256;
    this.height = 32;
    this.thickness = 2;

    this.setup();
  }
  setup() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");
    this.context.lineWidth = this.thickness;
    this.context.lineCap = "square";

    this.container.append(this.canvas);
  }
  update(binary) {
    if (binary) this.binary = binary;

    this.clear();
    this.drawTracks();
    this.drawConnectors();
  }
  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
  drawTracks() {
    this.context.strokeStyle = "Indigo";

    for (let i = 0; i < this.binary.length; i++) {
      this.drawTrack(i);
    }
  }

  drawTrack(index) {
    const x1 = this.getX(index);
    const y1 = this.height;

    const x2 = x1;
    const y2 = this.height / 2;

    const x3 = this.width / 2;
    const y3 = y2;

    const x4 = x3;
    const y4 = 0;

    this.drawLine(x1, y1, x2, y2);
    this.drawLine(x2, y2, x3, y3);
    this.drawLine(x3, y3, x4, y4);
  }

  getX(index) {
    const candlesWidth = this.size * this.binary.length;
    const leftBound = this.width / 2 - candlesWidth / 2;
    const offset = this.size / 2;
    const initial = leftBound + offset;
    const additional = index * this.size;

    return initial + additional;
  }

  drawLine(x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }

  drawConnectors() {
    this.context.strokeStyle = "Coral";

    for (let i = 0; i < this.binary.length; i++) {
      const bit = this.binary[i];
      if (bit === "1") {
        this.drawTrack(i);
      }
    }
  }
}
