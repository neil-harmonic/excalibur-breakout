import { Actor, vec } from 'excalibur';
import { Resources } from './resources';

export class Sword extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 25,
      height: 25
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Sword.toSprite());
  }
}
