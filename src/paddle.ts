import { Actor, CollisionType, Color, Engine, Keys } from 'excalibur';
import Ball from './ball';
import CONFIG from './config';

class Paddle extends Actor {
  constructor(private readonly _ball: Ball) {
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
    // Blatant cheating! But useful for testing. 🙈
    if (engine.input.keyboard.isHeld(Keys.C)) {
      this.pos.x = this._ball.pos.x;
      this.vel.setTo(0, 0);
      this.acc.setTo(0, 0);
      return;
    }

    if (engine.input.keyboard.isHeld(Keys.ArrowLeft)) {
      this.vel.x = -CONFIG.PADDLE.SPEED;
    } else if (engine.input.keyboard.isHeld(Keys.ArrowRight)) {
      this.vel.x = CONFIG.PADDLE.SPEED;
    } else if (this.vel.x !== 0) {
      this.acc.setTo(this.vel.x * -5, 0);
    }
  }
}

export default Paddle;
