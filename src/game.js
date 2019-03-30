import State from './states/state';
import Loading from './states/loading';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  start() {
    this.init();
    this.loop();
  }

  init() {
    // Add listeners here


    // set initial state
    this.state = new State();
    this.state.setState(new Loading());
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
    if (this.state.getState() != null)
      this.state.getState().tick();
  }

  render() {
    // clear screen
    this.ctx.clearRect(10, 10, 50, 50);
    // run state's draw method
    if (this.state.getState() != null) {
      this.state.getState().render(this.canvas, this.ctx);
    }
  }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const game = new Game(canvas, ctx);
game.start();
