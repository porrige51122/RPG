import Entity from '../entity';

class Outside extends Entity {
  constructor(handler, pos, size, index) {
    super(handler, pos, size, [0,0], handler.game.assets.outside, index);
  }
}

export default Outside;
