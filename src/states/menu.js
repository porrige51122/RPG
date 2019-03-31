import State from './state';
import World from '../worlds/world';

class Menu extends State {
  constructor(handler) {
    super(handler);
    this.world = new World(handler, "World1.json");
    handler.world = this.world;
  }

  tick() {
    if (this.handler.game.mouse.mouseDown)
      this.mouseDown = true;
    else if (this.mouseDown) {
      this.mouseDown = false;
      this.handler.currentState = this.handler.game.loadingState;
    }
    this.world.tick();
  }

  render(canvas, ctx) {
    ctx.fillStyle = "Yellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.world.render(canvas, ctx);
  }
}

export default Menu;
