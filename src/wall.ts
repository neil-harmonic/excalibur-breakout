import { Actor, Engine } from 'excalibur';
import CONFIG from './config';
import Brick from './brick';

class Wall extends Actor {
  private readonly _bricks: Actor[] = [];

  public onInitialize(engine: Engine): void {
    const { WIDTH, HEIGHT, BRICK_COLS, BRICK_ROWS, BRICK_GAP } = CONFIG.WALL;

    const border = (engine.drawWidth - WIDTH) / 2;
    const brickWidth = (WIDTH - (BRICK_COLS - 1) * BRICK_GAP) / BRICK_COLS;
    const brickHeight = (HEIGHT - (BRICK_ROWS - 1) * BRICK_GAP) / BRICK_ROWS;
    const newBrick = (x: number, y: number) => new Brick({ x, y, width: brickWidth, height: brickHeight });

    for (let i = 0; i < BRICK_COLS; i++) {
      for (let j = 0; j < BRICK_ROWS; j++) {
        const x = border + brickWidth / 2 + i * (brickWidth + BRICK_GAP);
        const y = border + brickHeight / 2 + j * (brickHeight + BRICK_GAP);
        const brick = newBrick(x, y);
        this._bricks.push(brick);
        engine.add(brick);
      }
    }
  }
}

export default Wall;
