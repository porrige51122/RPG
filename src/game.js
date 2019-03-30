import Handler from './handler';
// states
import Loading from './states/loading';
import Menu from './states/menu';
// listeners
import Mouse from './input/mouse';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    // init listeners here
    this.mouse = new Mouse();
  }

  start() {
    this.init();
    this.loop();
  }

  init() {
    // Add listeners here
    this.canvas.addEventListener("mousedown", () => this.mouse.click());
    this.canvas.addEventListener("mouseup", () => this.mouse.release());
    // initialising handler
    this.handler = new Handler(this);

    // Loading States
    this.menuState = new Menu(this.handler);
    this.loadingState = new Loading(this.handler);

    // Setting initial State
    this.handler.currentState = this.menuState;
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.resize()
      this.tick();
      this.render();
      this.loop();
    });
  }

  resize() {
    // changes canvas size if window changes
    if (this.canvas.width != window.innerWidth || this.canvas.height != window.innerHeight) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  tick() {
    // run tick method in current game state
    if (this.handler.currentState != null)
      this.handler.currentState.tick();
  }

  render() {
    // clear screen
    this.ctx.clearRect(10, 10, 50, 50);
    // run state's draw method
    if (this.handler.currentState != null) {
      this.handler.currentState.render(this.canvas, this.ctx);
    }
  }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const game = new Game(canvas, ctx);
game.start();
