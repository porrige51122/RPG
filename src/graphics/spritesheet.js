class Spritesheet {
  constructor(image) {
    this.img = image.img;
    this.rows = image.rows;
    this.columns = image.columns;
    this.frameSize = [(this.img.width / this.columns) >> 0, (this.img.height / this.rows) >> 0]; // width and hight of sprite
  }

  getSpriteImage(index) {
    return ({
      x: this.frameSize[0] * index[0],
      y: this.frameSize[1] * index[1],
      width: this.frameSize[0],
      height: this.frameSize[1]
    });
  }
}

export default Spritesheet;
