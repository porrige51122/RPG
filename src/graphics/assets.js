import spritesheets from './images';
import Spritesheet from './spritesheet';

class Assets {
  constructor() {
    this.bg = new Spritesheet(spritesheets.bg);
  }
}

export default Assets;
