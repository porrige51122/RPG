class Mouse {
  constructor() {
    this.mousePos = [];
    this.mouseDown = false;
  }

  click() {
    this.mouseDown = true;
  }

  release() {
    this.mouseDown = false;
  }

  move(pos) {
    this.mousePos = [pos.clientX, pos.clientY];
  }
}

export default Mouse;
