export default class Candle {
  constructor(bit = 0) {
    this.bit = Number(bit);
    this.media = [];
    this.media[0] = "./media/candle-0.png";
    this.media[1] = "./media/candle-1.png";
  }
  get image() {
    const img = document.createElement("img");
    img.src = this.media[this.bit];
    return img;
  }
}
