class EntityManager {
  constructor(handler, player) {
    this.handler = handler;
    this.player = player;
    this.entities = [this.player];
  }

  tick() {
    this.entities.forEach((entity) => {
      entity.tick();
    });
  }

  render() {
    this.entities.forEach((entity) => {
      entity.render();
    });
  }

  addEntity(e) {
    this.entities.push(e);
  }
}

export default EntityManager;
