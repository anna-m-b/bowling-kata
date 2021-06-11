# Things to Refactor

## Tests

### Frame

- [ ] Refactor test for strike and spare properties to reflect what they are dependent on.  
- [ ] Is there a better way to test a function that returns a random number?
  
### Game
  
- [ ] The tests for calculateBonus didn't catch that the function would error because it tries to access the last index + 1.  

### Others

- [ ] Missing test for helper.
- [ ] Should there be a consistent approach test groupings and structure across the application?


--- 

## Game Class

### play()

- [ ] Should we separate out setting the frame scores and the roll method calls?
- [ ] Rename play if above is done
- [ ] Call score somewhere else, or not at all? 

### calulcateBonus()

- [ ] We check twice if index is less than 9. Can we avoid this?
--- 

## Frame Class

- [ ] Rename roll1score and roll2score because they are too similar.
- [ ] Rename range --> max


--- 

# Thoughts for an improved process

- Do One Thing At A Time! I tend to jump about a lot. 
- Don't add properties/methods as 'maybes' or assumed needed, just do what is necessary for the current step (I added the bonus property to the Frame class initially then later realised it isn't needed there)
- Put more effort into planning beforehand to potentially avoid the previous points.