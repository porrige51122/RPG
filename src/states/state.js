class State {
  constructor() {
    this.currentState = null;
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
