var scene = document.querySelector('a-scene'); //grab the scene element
var angle = Math.random(1);
var ball, posX, posY, posZ;
var balls = [];
// var ball = document.querySelector('testBall');

function setup() {
  for (var i = 0; i < 10; i++) {
    ball = document.createElement('a-sphere');
    ball.setAttribute('position', {
      x: random(-5, 5),
      y: random(0, 5),
      z: random(-5, 5)
    });
    ball.setAttribute('radius', 0.4);
    ball.setAttribute('color', 'red');
    ball.setAttribute('dynamic-body', true);
    ball.setAttribute('material', {
      color: 'white',
      metalness: 0.5
    });
    scene.appendChild(ball);
  }
}

function draw() {
  // posY += sin(angle) * 0.1;
  // angle += 0.1;
  // for (var i = 0; i < 1; i++) {
  //   ball.setAttribute('position', {
  //     y: posY
  //   });
  //   print(posY);
  // }
};
