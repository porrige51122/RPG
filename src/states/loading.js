import State from './state';

class Loading extends State {
  constructor(handler) {
    super(handler);
  }

  tick() {
    if (this.handler.game.mouse.mouseDown)
      this.mouseDown = true;
    else if (this.mouseDown) {
      this.mouseDown = false;
      this.handler.currentState = this.handler.game.menuState;
    }
  }

  render(canvas, ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export default Loading;
