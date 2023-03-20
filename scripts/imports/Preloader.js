export default class Preloader {
  constructor(...images) {
    for (let image of images) {
      const img = new Image();
      img.src = image;
    }
  }
}
