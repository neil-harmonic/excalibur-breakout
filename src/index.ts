import { DisplayMode, Engine } from 'excalibur';
import { Sword } from './sword';
import { loader } from './resources';

class Game extends Engine {
  initialize() {
    const sword = new Sword();
    this.add(sword);
    this.start(loader);
  }
}

const game = new Game({
  displayMode: DisplayMode.FitScreenAndFill
});

game.initialize();
