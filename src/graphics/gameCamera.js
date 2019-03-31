class GameCamera {
  constructor(handler, xOffset, yOffset) {
    this.handler = handler;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  }

  move(x, y) {
    this.xOffset += x;
    this.yOffset += y;
  }
}

export default GameCamera;
