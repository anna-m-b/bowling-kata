const Frame = require('./frame.js')

const generateFramesArray = () => {
  let frames =[]
  for (let i = 0; i < 10; i++) {
    frames.push(new Frame())
  }
  return frames;
}

module.exports = generateFramesArray