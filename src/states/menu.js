import State from './state';

class Menu extends State {
  constructor(handler) {
    super(handler);
  }

  tick() {
    if (this.handler.game.mouse.mouseDown)
      this.mouseDown = true;
    else if (this.mouseDown) {
      this.mouseDown = false;
      this.handler.currentState = this.handler.game.loadingState;
    }
  }

  render(canvas, ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export default Menu;
