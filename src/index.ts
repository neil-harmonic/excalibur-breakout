import Ball from './ball';
import Game from './game';
import Paddle from './paddle';
import Wall from './wall';

const game = new Game();
const ball = new Ball();
const paddle = new Paddle(ball);
const wall = new Wall();

ball.on('exitviewport', () => {
  game.stop();
  alert('Game over!');
});

game.add(paddle);
game.add(ball);
game.add(wall);
game.start().then(() => ball.kick());
