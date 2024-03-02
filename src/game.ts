import { Color, Engine } from 'excalibur';
import CONFIG from './config';

class Game extends Engine {
  constructor() {
    super({
      width: CONFIG.GAME.WIDTH,
      height: CONFIG.GAME.HEIGHT,
      backgroundColor: Color.Black
    });
  }
}

export default Game;
