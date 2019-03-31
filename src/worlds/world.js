import EntityManager from '../entities/entityManager';
import Outside from '../entities/tiles/outside';
import OutsideTiles from '../tiles/outsideTiles';

class World {
  constructor(handler, map) {
    this.handler = handler;
    this.entityManager = new EntityManager(this.handler);

    this.tiles = new OutsideTiles(handler);
    this.loadWorld(map);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.entityManager.addEntity(
          new Outside(
            this.handler,
            [x * this.tiles.TILEWIDTH, y * this.tiles.TILEHEIGHT],
            [this.tiles.TILEWIDTH, this.tiles.TILEHEIGHT],
            this.tiles.getTile(this.map[y][x])
          ));
      }
    }

  }

  render(canvas, ctx) {
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
