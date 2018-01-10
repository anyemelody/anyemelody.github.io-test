
  // var ball = document.querySelector('testBall');
  dropBalls();

  function dropBalls() {
    for (var i = 0; i < 10; i++) {
      var ball = document.createElement('a-sphere');
      var posX = getRandomInt(-5, 5);
      var posZ = getRandomInt(-5, 5);
      var r = Math.random();
      ball.setAttribute('position', {x:posX, y:0, z:posZ});
      ball.setAttribute('radius', r);
      ball.setAttribute('color', 'red')
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
