import State from './state';

class Loading extends State {
  constructor(handler) {
    super(handler);
    console.log('Loading state Loaded')
  }

  tick() {
    // this.handler.currentState = this.handler.game.menuState;
  }

  render(canvas, ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export default Loading;
