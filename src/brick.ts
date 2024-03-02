import { Actor, CollisionType, Color } from 'excalibur';

type BrickProps = {
  x: number;
  y: number;
  height: number;
  width: number;
};

class Brick extends Actor {
  constructor(props: BrickProps) {
    super({
      ...props,
      color: Color.White,
      collisionType: CollisionType.Active
    });
  }

  public onCollisionStart(): void {
    this.kill();
  }
}

export default Brick;
