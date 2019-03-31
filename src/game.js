import Handler from './handler';
import Assets from './graphics/assets';
import GameCamera from './graphics/gameCamera';

// states
import Loading from './states/loading';
import Menu from './states/menu';

// listeners
import Mouse from './input/mouse';
import Keyboard from './input/keyboard';


class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    //number of tiles on the canvas
    this.width = 25;
    this.height = 15;


    // init listeners here
    this.mouse = new Mouse();
    this.kbd = new Keyboard();
  }

  start() {
    this.init();
    this.loop();
  }

  init() {
    // Add listeners here
    canvas.addEventListener('mousedown', () => this.mouse.click());
    canvas.addEventListener('mouseup', () => this.mouse.release());
    canvas.addEventListener('mousemove', () => this.mouse.move(event));

    window.addEventListener('keydown', () => this.kbd.click(event));
    window.addEventListener('keyup', () => this.kbd.release());

    // Get all assets
    this.assets = new Assets();

    // initialising handler
    this.handler = new Handler(this);

    // Loading States
    this.menuState = new Menu(this.handler);
    this.loadingState = new Loading(this.handler);

    // Setting initial State
    this.handler.currentState = this.menuState;

    // Setting Game Camera
    this.gameCamera = new GameCamera(this.handler, 0, 0);

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
    if (canvas.width != window.innerWidth ||canvas.height != window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (this.handler.world != null) {
        this.handler.world.tiles.getSize(this.width, this.height, canvas)
      }
    }
  }

  tick() {
    // run tick method in current game state
    if (this.handler.currentState != null)
      this.handler.currentState.tick();

    if (this.kbd.keyDown) {
      if (this.kbd.keyId == 83) {
        this.gameCamera.move(0,1);
      }
      if (this.kbd.keyId == 87) {
        this.gameCamera.move(0,-1);
      }
      if (this.kbd.keyId == 68) {
        this.gameCamera.move(1,0);
      }
      if (this.kbd.keyId == 65) {
        this.gameCamera.move(-1,0);
      }
    }
  }

  render() {
    // clear screen
    this.ctx.clearRect(10, 10, 50, 50);
    // run state's draw method
    if (this.handler.currentState != null) {
      this.handler.currentState.render(canvas, ctx);
    }
  }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const game = new Game(canvas, ctx);
game.start();
