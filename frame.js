class Frame {
  constructor() {
    this.roll1Score = 0;
    this.roll2Score = 0;
  }
  setFirstScore() {
    this.roll1Score = Math.floor(Math.random() * 11)
  }
  setSecondScore() {
    let limit = 11 - this.roll1Score;
    this.roll2Score = Math.floor(Math.random() * limit);
  }
  get strike() {
    return this.roll1Score === 10;
  }
  get spare() {
    return this.roll1Score + this.roll2Score === 10;
  }
}

module.exports = Frame;
