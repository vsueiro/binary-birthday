export default class Candle {
  constructor(bit = 0) {
    this.bit = Number(bit);
    this.media = [];
    this.media[0] = "./media/candle-0.svg";
    this.media[1] = "./media/candle-1.svg";
  }
  get image() {
    const img = document.createElement("img");
    img.src = this.media[this.bit];
    return img;
  }
}
