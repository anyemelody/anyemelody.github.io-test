var scene = document.querySelector('a-scene'); //grab the scene element
var angle = Math.random(1);
var posX, posY, posZ;
var balls = [];
// var ball = document.querySelector('testBall');

function setup() {
  for (var i = 0; i < 100; i++) {
    var ball = document.createElement('a-sphere');
    posX = random(-5, 5);
    posY = random(-5, 5);
    posZ = random(-5, 5);
    ball.setAttribute('position', {
      x: posX,
      y: posY,
      z: posZ
    });
    ball.setAttribute('radius', 0.4);
    ball.setAttribute('color', 'red');
    // ball.setAttribute('dynamic-body', true);
    ball.setAttribute('material', {
      color: 'red',
      metalness: 0.7
    });
    balls[i] = ball;
    scene.appendChild(balls[i]);
    ball.myPosX = posX;
    ball.myPosY = posY;
    ball.myPosZ = posZ;
  }
}

function draw() {
  angle += 0.1;
  var timer = 0.0001*Date.now();
  for (var i = 0; i < balls.length; i++) {
    var sphere = balls[i];
    sphere.setAttribute('position', {
      y: sphere.myPosY*sin(timer+i),
      x: sphere.myPosX*cos(timer+i*1.1),
      z: sphere.myPosZ
    });
  }
};
