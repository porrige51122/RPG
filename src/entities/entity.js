class Entity {
  constructor(handler, pos, size, vel, spritesheet, spriteIndex) {
    this.handler = handler;
    this.pos = pos;
    this.size = size;
    this.vel = vel;
    this.spritesheet = spritesheet || null;
    this.spriteIndex = spriteIndex || null;
    this.active = true;
    this.health = 3;
  }

  tick() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  render(canvas, ctx) {
    let img = this.spritesheet.getSpriteImage(this.spriteIndex);
    ctx.drawImage(
      this.spritesheet.img,
      img.x, img.y,
      img.width, img.height ,
      this.pos[0], this.pos[1],
      this.size[0], this.size[1]
    )
  }

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
