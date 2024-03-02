import { Keys } from 'excalibur';
import Ball from './ball';
import Game from './game';
import Paddle from './paddle';
import Wall from './wall';

const game = new Game();
const ball = new Ball();
const paddle = new Paddle();
const wall = new Wall();

ball.on('exitviewport', () => {
  game.stop();
  alert('Game over!');
});

// Blatant cheating! But useful for testing. 🙈
game.onPostUpdate = () => {
  if (game.input.keyboard.isHeld(Keys.C)) {
    paddle.teleportTo(ball.pos.x);
  }
};

game.add(paddle);
game.add(ball);
game.add(wall);
game.start().then(() => ball.kick());
