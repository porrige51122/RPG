class EntityManager {
  constructor(handler, player) {
    this.handler = handler;
    this.player = player;
    this.entities = [];
  }

  tick() {
    this.entities.forEach((entity) => {
      entity.tick();
    });
  }

  render(canvas, ctx) {
    this.entities.forEach((entity) => {
      entity.render(canvas, ctx);
    });
  }

  addEntity(e) {
    this.entities.push(e);
    console.log(e);
  }

  clearEntities() {
    this.entities = [this.player];
  }
}

export default EntityManager;
