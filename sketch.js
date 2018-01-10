var scene = document.querySelector('a-scene'); //grab the scene element
var angle = Math.random(1);
var posX, posY, posZ;
var balls = [];
// var ball = document.querySelector('testBall');

function setup() {
  for (var i = 0; i < 3; i++) {
    var ball = document.createElement('a-sphere');
    ball.setAttribute('position', {
      x: random(-5, 5),
      y: random(-2,3),
      z: random(-5, 5)
    });
    ball.setAttribute('radius', 0.4);
    ball.setAttribute('color', 'red');
    // ball.setAttribute('dynamic-body', true);
    ball.setAttribute('material', {
      color: 'white',
      metalness: 0.5
    });
    balls[i] = ball;
    print(ball[i]);
    scene.appendChild(ball);
  }
}

function draw() {
  posY += sin(angle) * 0.1;
  angle += 0.1;
  for (var i = 0; i < balls.length; i++) {
    balls[i].setAttribute('position', {
      y: posY
    });


  }
};
