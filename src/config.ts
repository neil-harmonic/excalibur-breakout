const CONFIG = {
  GAME: {
    HEIGHT: 600,
    WIDTH: 800
  },
  PADDLE: {
    SPEED: 1000,
    HEIGHT: 10,
    WIDTH: 200
  },
  BALL: {
    SPEED: 300,
    RADIUS: 5
  },
  WALL: {
    HEIGHT: 150,
    WIDTH: 750,
    BRICK_COLS: 5,
    BRICK_ROWS: 5,
    BRICK_GAP: 20
  }
} as const;

export default CONFIG;
