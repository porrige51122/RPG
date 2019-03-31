import EntityManager from '../entities/entityManager';
import Outside from '../entities/tiles/outside';
import OutsideTiles from '../tiles/outsideTiles';

class World {
  constructor(handler, map) {
    this.handler = handler;
    this.entityManager = new EntityManager(this.handler);

    this.tiles = new OutsideTiles(handler);
    this.loadWorld(map);
  }

  render(canvas, ctx) {
    // Sets start and end render area relative to game camera
    let startx = Math.max(0, this.handler.game.gameCamera.xOffset / this.tiles.TILEWIDTH);
    let endx = Math.min(this.width, this.handler.game.width + Math.ceil(startx));
    let starty = Math.max(0, this.handler.game.gameCamera.yOffset / this.tiles.TILEHEIGHT);
    let endy = Math.min(this.height, this.handler.game.height + Math.ceil(starty));

    // Draws Tiles
    for (let y = starty; y < endy; y++) {
      for (let x = startx; x < endx; x++) {
        new Outside(
            this.handler,
            [
              Math.round((Math.floor(x) - startx) * this.tiles.TILEWIDTH),
              Math.round((Math.floor(y) - starty) * this.tiles.TILEHEIGHT)
            ],
            [this.tiles.TILEWIDTH, this.tiles.TILEHEIGHT],
            this.tiles.getTile(this.map[Math.floor(y)][Math.floor(x)])
        ).render(canvas, ctx);
      }
    }
    this.entityManager.render(canvas, ctx);
  }

  tick() {
    this.entityManager.tick();
  }

  loadWorld(map) {
    let file = require('../assets/maps/'+map);
    this.width = file.width;
    this.height = file.height;
    this.map = file.map;

  }
}

export default World;
