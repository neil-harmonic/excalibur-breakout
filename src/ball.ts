import { Actor, Collider, CollisionContact, CollisionType, Color, Engine, Side, vec } from 'excalibur';
import CONFIG from './config';

class Ball extends Actor {
  constructor() {
    super({
      x: CONFIG.GAME.WIDTH / 2,
      y: CONFIG.GAME.HEIGHT / 2,
      radius: 10,
      color: Color.Red,
      collisionType: CollisionType.Passive
    });
  }

  private _colliding = false;

  public onCollisionStart(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
    if (!this._colliding) {
      this._colliding = true;

      let bump = vec(0, 0);
      if (other.owner instanceof Actor) {
        bump = other.owner.vel.scale(0.2);
      }

      const intersection = contact.mtv.normalize();
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        this.vel.x *= -1;
        this.vel = this.vel.add(bump);
        this.vel.clampMagnitude(CONFIG.BALL.SPEED * 2);
      } else {
        this.vel.y *= -1;
        this.vel = this.vel.add(bump);
        this.vel.clampMagnitude(CONFIG.BALL.SPEED * 2);
      }
    }
  }

  public onCollisionEnd(): void {
    this._colliding = false;
  }

  public onPostUpdate(engine: Engine): void {
    const isHittingLeftWall = this.pos.x < this.width / 2;
    const isHittingRightWall = !isHittingLeftWall && this.pos.x + this.width / 2 > engine.drawWidth;

    if (isHittingLeftWall || isHittingRightWall) {
      this.vel.x *= -1;
    }

    if (this.pos.y < this.height / 2) {
      this.vel.y *= -1;
    }
  }

  public kick(): void {
    this.vel.setTo(0, CONFIG.BALL.SPEED);
    this.vel = this.vel.rotate(Math.random() * (Math.PI / 2) - Math.PI / 4);
  }
}

export default Ball;
