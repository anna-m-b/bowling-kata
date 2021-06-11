const Game = require("./game");

describe("Game properties and methods", () => {
  const frames = [{},{},{}]
  let game;
  beforeAll(() => {
    game = new Game(frames);
  });
  test("it can be instantiated", () => {
    expect(game).toBeInstanceOf(Object);
  });
  test("it has a 'roll' method", () => {
    expect(game).toHaveProperty("roll");
    expect(typeof game.roll).toBe("function");
  });
  test("it has a 'score' method", () => {
    expect(game).toHaveProperty("score");
    expect(typeof game.roll).toBe("function");
  });
  test("it has a play method", () => {
    expect(game).toHaveProperty("play");
    expect(typeof game.play).toBe("function");
  });
  test("it has a calculateBonus method", () => {
    expect(game).toHaveProperty("calculateBonus");
    expect(typeof game.calculateBonus).toBe("function");
  });
  test("it has a property that stores the player's scores", () => {
    expect(game).toHaveProperty("playerRunningTotal");
    expect(typeof game.playerRunningTotal).toBe("number");
  });
  test("it has a property that stores the bonus points", () => {
    expect(game).toHaveProperty("bonus");
    expect(typeof game.bonus).toBe("number");
  });
  test("it has a property 'frames' that stores the value passed to the constructor", () => {
    expect(game).toHaveProperty("frames");
    expect(game.frames).toHaveLength(3);
  });
});

describe("Method behaviour", () => {
  const frames = [
    {
      roll1Score: 5,
      roll2Score: 5,
      setFirstScore: jest.fn(),
      setSecondScore: jest.fn(),
      strike: false,
      spare: true,
    },
  ];
  let game;
  beforeEach(() => {
    game = new Game(frames);
  });
  test("roll increases the player's score according to the number passed in", () => {
    game.roll(5);
    expect(game.playerRunningTotal).toBe(5);
  });
  test("the play method calls each frame's set scores methods", () => {
    const setFirstScore = jest.spyOn(game.frames[0], "setFirstScore");
    const setSecondScore = jest.spyOn(game.frames[0], "setSecondScore");
    game.play();
    expect(setFirstScore).toHaveBeenCalled();
    expect(setSecondScore).toHaveBeenCalled();
  });
  test("the play method calls game.roll twice per frame, passing frame.roll1Score and frame.roll2Score as an argument", () => {
    const roll = jest.spyOn(game, "roll");
    game.play();
    expect(roll).toHaveBeenCalledWith(game.frames[0].roll1Score);
    expect(roll).toHaveBeenCalledWith(game.frames[0].roll2Score);
  });
  
});

describe("calculating a game's total score", () => {
  test("a spare in one frame adds a bonus equal to the next frame's first roll", () => {
    const frames = [
      {
        roll1Score: 5,
        roll2Score: 5,
        setFirstScore: jest.fn(),
        setSecondScore: jest.fn(),
        strike: false,
        spare: true,
      },
      {
        roll1Score: 3,
        roll2Score: 5,
        setFirstScore: jest.fn(),
        setSecondScore: jest.fn(),
        strike: false,
        spare: false,
      },
    ];
    const game = new Game(frames);
    game.calculateBonus();
    expect(game.bonus).toBe(3);
  });
  test("a strike in one frame adds a bonus equal to the both of the next frame's rolls", () => {
    const frames = [
      {
        roll1Score: 10,
        roll2Score: 0,
        setFirstScore: jest.fn(),
        setSecondScore: jest.fn(),
        strike: true,
        spare: false,
      },
      {
        roll1Score: 3,
        roll2Score: 5,
        setFirstScore: jest.fn(),
        setSecondScore: jest.fn(),
        strike: false,
        spare: false,
      },
    ];
    const game = new Game(frames);
    game.calculateBonus();
    expect(game.bonus).toBe(8);
  });
  test("the score method returns the total score of a game: playerRunningTotal + bonus" ,() => {
    const frames = [
      {
        roll1Score: 10,
        roll2Score: 0,
        setFirstScore: jest.fn(),
        setSecondScore: jest.fn(),
        strike: true,
        spare: false,
      },
      {
        roll1Score: 3,
        roll2Score: 5,
        setFirstScore: jest.fn(),
        setSecondScore: jest.fn(),
        strike: false,
        spare: false,
      },
    ];
    const game = new Game(frames);
    game.play()
    const result = game.score()
    expect(result).toBe(26)
  })
});
