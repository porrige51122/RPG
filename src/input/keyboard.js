class Keyboard {
  constructor() {
    this.keyId = null;
    this.keyDown = false;
  }

  click(event) {
    this.keyId = event.keyCode;
    this.keyDown = true;
  }

  release() {
    this.keyDown = false;
  }
}

export default Keyboard;
