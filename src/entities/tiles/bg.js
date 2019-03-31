import Entity from '../entity';

class Bg extends Entity {
  constructor(handler, pos, size, vel, index) {
    super(handler, pos, size, vel, handler.game.assets.bg, index);
  }
}

export default Bg;
