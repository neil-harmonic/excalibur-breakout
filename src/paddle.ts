import { Actor, CollisionType, Color, Engine, Keys } from 'excalibur';
import CONFIG from './config';

class Paddle extends Actor {
  constructor() {
    super({
      x: CONFIG.GAME.WIDTH / 2,
      y: CONFIG.GAME.HEIGHT - CONFIG.PADDLE.HEIGHT / 2 - 5,
      width: CONFIG.PADDLE.WIDTH,
      height: CONFIG.PADDLE.HEIGHT,
      color: Color.White,
      collisionType: CollisionType.Fixed
    });
  }

  public update(engine: Engine): void {
    if (engine.input.keyboard.isHeld(Keys.ArrowLeft)) {
      this.vel.x = -CONFIG.PADDLE.SPEED;
    } else if (engine.input.keyboard.isHeld(Keys.ArrowRight)) {
      this.vel.x = CONFIG.PADDLE.SPEED;
    } else if (this.vel.x !== 0) {
      this.acc.setTo(this.vel.x * -5, 0);
    }
  }

  public teleportTo(x: number): void {
    this.pos.x = x;
    this.vel.setTo(0, 0);
    this.acc.setTo(0, 0);
  }
}

export default Paddle;
