import EntityManager from '../entities/entityManager';
import Bg from '../entities/tiles/bg';

class World {
  constructor(handler) {
    this.handler = handler;
    this.entityManager = new EntityManager(this.handler);

    // TEMP
    this.entityManager.addEntity(new Bg(
      this.handler, [0,0], [100, 100], [0,0], [0,0]
    ));
  }

  render(canvas, ctx) {
    this.entityManager.render(canvas, ctx);
  }

  tick() {
    this.entityManager.tick();
  }
}

export default World;
