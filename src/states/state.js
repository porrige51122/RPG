class State {
  constructor(handler) {
    this.currentState = null;
    this.handler = handler;
  }

  setState(state) {
    this.currentState = state;
  }

  getState() {
    return this.currentState;
  }

  tick() {}

  render(canvas, ctx) {}
}

export default State;
