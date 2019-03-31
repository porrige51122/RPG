class OutsideTiles {
  constructor(handler) {
    this.TILEWIDTH = 64;
    this.TILEHEIGHT = 64;
    this.tiles = new Array(720);

    // Tile List Here
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 90; y++) {
        this.addTile(x+(y*8), [x,y]);
      }
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
