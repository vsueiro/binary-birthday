export default class Preloader {
  constructor(...images) {
    this.length = images.length;
    this.loaded = 0;
    for (let image of images) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        this.loaded++;
      };
    }
  }
}
