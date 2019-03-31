class OutsideTiles {
  constructor(handler) {
    this.getSize(handler.game.width, handler.game.height, handler.game.canvas);
    this.tiles = new Array(720);

    // Tile List Here
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 90; y++) {
        this.addTile(x+(y*8), [x,y]);
      }
    }
  }
  getSize(width, height, canvas) {
    this.TILEWIDTH = canvas.width/width;
    this.TILEHEIGHT = canvas.height/height;
    if (canvas.width / width * height < canvas.height) {
      this.TILEWIDTH = this.TILEHEIGHT = Math.round(canvas.width/width)
    } else {
      this.TILEWIDTH = this.TILEHEIGHT = Math.round(canvas.height/height)
    }
  }

  addTile(id, index) {
    this.tiles[id] = index;
  }

  getTile(id) {
    return this.tiles[id];
  }
}

export default OutsideTiles;
