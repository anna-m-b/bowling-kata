const Frame = require("./frame.js");

describe("Frame properties", () => {
  let frame;
  beforeAll(() => {
    frame = new Frame();
  });
  test("it can be instantiated", () => {
    expect(frame).toBeInstanceOf(Object);
  });
  test("it has properties for strike and spare with boolean values set to false", () => {
    expect(frame.spare).toBe(false);
    expect(frame.strike).toBe(false);
  });
  test("it has properties roll1 and roll2 defaulting to 0", () => {
    expect(frame.roll1Score).toBe(0);
    expect(frame.roll2Score).toBe(0);
  });
});

describe("Frame methods", () => {
  let frame;
  beforeEach(() => {
    frame = new Frame();
  });
  test("it has a setFirstScore and a setSecondScore method", () => {
    expect(frame).toHaveProperty("setFirstScore");
    expect(frame).toHaveProperty("setSecondScore");
  });

  test("setFirstScore returns a random number between 0 and 10", () => {
    frame.setFirstScore();
    expect(frame.roll1Score).toBeGreaterThanOrEqual(0);
    expect(frame.roll1Score).toBeLessThanOrEqual(10);
  });

  test("setSecondScore returns a random number between 0 and 10 minus the score of roll1", () => {
    frame.roll1Score = 4;
    frame.setSecondScore();
    expect(frame.roll2Score).toBeGreaterThanOrEqual(0);
    expect(frame.roll1Score).toBeLessThanOrEqual(6);
  });

  test("if roll1Score is 10, strike is set to true", () => {
    frame.roll1Score = 10;
    expect(frame.strike).toBeTruthy();
  });

  test("if both roll scores add up to 10, spare is set to true", () => {
    frame.roll1Score = 6;
    frame.roll2Score = 4;
    expect(frame.spare).toBeTruthy();
  });
});



