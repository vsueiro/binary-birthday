export default class Preloader {
  constructor() {
    this.images = [
      "./images/audio-animated.png",
      "./images/audio-muted.png",
      "./images/button-minus.png",
      "./images/button-plus.png",
      "./images/cake-outline.png",
      "./images/cake.png",
      "./images/candle-letter-e.png",
      "./images/candle-letter-n.png",
      "./images/candle-letter-s.png",
      "./images/candle-letter-v.png",
      "./images/candle-number-0.png",
      "./images/candle-number-1.png",
      "./images/candle-number-2.png",
      "./images/candle-number-3.png",
      "./images/candle-number-4.png",
      "./images/candle-number-5.png",
      "./images/candle-number-6.png",
      "./images/candle-number-7.png",
      "./images/candle-number-8.png",
      "./images/candle-number-9.png",
      "./images/candle-stick.png",
      "./images/candle-wick-0.png",
      "./images/candle-wick-1.png",
      "./images/composite/logo.png",
      "./images/info.png",
      "./images/strawberry-0-outline.png",
      "./images/strawberry-0.png",
      "./images/strawberry-1-outline.png",
      "./images/strawberry-1.png",
      "./images/strawberry-2-outline.png",
      "./images/strawberry-2.png",
    ];

    this.load();
  }

  load() {
    for (let image of this.images) {
      const img = new Image();
      img.src = image;
    }
  }
}
