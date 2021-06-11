class Game {
  constructor(frames) {
    this.playerRunningTotal = 0;
    this.bonus = 0;
    this.frames = frames
  }
  
  roll(int) {
   this.playerRunningTotal += int;
  }

  play() {
    this.frames.forEach((frame, i) => {
      console.log(`Frame ${i +1}`)
      frame.setFirstScore()
      console.log(`First roll: ${frame.roll1Score}`)
      frame.setSecondScore()
      console.log(`Second roll: ${frame.roll2Score}`)
      this.roll(frame.roll1Score)
      this.roll(frame.roll2Score)
    })
    this.score()
  }

  calculateBonus() {
    this.frames.forEach((frame, i) => {
      if (frame.spare && i < 9) {
        this.bonus += this.frames[i+1].roll1Score
      }
      else if (frame.strike && i < 9) {
        this.bonus += this.frames[i+1].roll1Score + this.frames[i+1].roll2Score
      }
    })
    console.log(`Total Bonus Points: ${this.bonus}`)
  }

  score() {
   this.calculateBonus()
   console.log(`Your Total Score is ${this.bonus + this.playerRunningTotal}`) 
  }

}


module.exports = Game