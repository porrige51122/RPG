import State from './state';

class Loading extends State {
  constructor() {
    super();
    console.log('Loading state Loaded')
  }

  tick() {
  }

  render(canvas, ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export default Loading;
