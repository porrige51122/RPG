class Entity {
  constructor(handler, x, y, width, height) {
    this.handler = handler;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.active = true;
    this.health = 3;
  }

  tick() {}

  render() {}

  die() {}

  hurt(damage) {
    health -= damage;
    if (health <= 0) {
      active = false;
      die();
    }
  }
}

export default Entity;
