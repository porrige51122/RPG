import spritesheets from './images';
import Spritesheet from './spritesheet';

class Assets {
  constructor() {
    this.outside = new Spritesheet(spritesheets.outside);
  }
}

export default Assets;
