import { Actor, CollisionType, Color, Engine, vec } from 'excalibur';

const game = new Engine({ width: 800, height: 600 });

const paddle = new Actor({
  x: 150,
  y: game.drawHeight - 40,
  width: 200,
  height: 20,
  color: Color.Orange,
  collisionType: CollisionType.Fixed
});

const ball = new Actor({
  x: 100,
  y: 300,
  radius: 10,
  color: Color.Red,
  collisionType: CollisionType.Passive
});

const ballSpeed = vec(200, 200);

ball.on('postupdate', () => {
  // left collision
  if (ball.pos.x < ball.width / 2) {
    ball.vel.x = ballSpeed.x;
  }

  // right collision
  if (ball.pos.x + ball.width / 2 > game.drawWidth) {
    ball.vel.x = ballSpeed.x * -1;
  }

  // top collision
  if (ball.pos.y < ball.height / 2) {
    ball.vel.y = ballSpeed.y;
  }
});

const padding = 20;
const xoffset = 65;
const yoffset = 20;
const columns = 5;
const rows = 3;
const brickColor = [Color.Violet, Color.Vermilion, Color.Yellow];

const brickWidth = game.drawWidth / columns - padding - padding / columns;
const brickHeight = 30;
const bricks: Actor[] = [];

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < columns; i++) {
    const brick = new Actor({
      x: xoffset + i * (brickWidth + padding) + padding,
      y: yoffset + j * (brickHeight + padding) + padding,
      width: brickWidth,
      height: brickHeight,
      color: brickColor[j % brickColor.length],
      collisionType: CollisionType.Active
    });

    bricks.push(brick);
    game.add(brick);
  }
}

let colliding = false;
ball.on('collisionstart', function (ev) {
  if (bricks.indexOf(ev.other) > -1) {
    ev.other.kill();
  }

  const intersection = ev.contact.mtv.normalize();

  if (!colliding) {
    colliding = true;

    if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
      ball.vel.x *= -1;
    } else {
      ball.vel.y *= -1;
    }
  }
});

ball.on('exitviewport', () => alert('Game over!'));

ball.on('collisionend', () => (colliding = false));

game.input.pointers.primary.on('move', (evt) => (paddle.pos.x = evt.worldPos.x));

game.add(ball);
game.add(paddle);

game.start().then(() => {
  setTimeout(() => {
    ball.vel = ballSpeed;
  }, 1000);
});
