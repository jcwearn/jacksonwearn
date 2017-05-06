var canvas = document.getElementById("connect-four"),
    ctx = canvas.getContext("2d");

var W = 600,
    H = 400;

var background = {
  draw: function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,W,H);
  }
};


var grid = {
  draw: function() {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(W + 0.5, H + 0.5);
    ctx.stroke();
  }
};

var ball = {},
    gravity = 0.2,
    bounceFactor = 0.1;

ball = {
  x: W/2,
  y: 50,

  radius: 15,
  color: "#18BC9C",

  vx: 0,
  vy: 1,

  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
};

function clearCanvas() {
  ctx.clearRect(0, 0, W, H);
}

function update() {
  clearCanvas();
  background.draw();
  grid.draw();
  ball.draw();

  ball.y += ball.vy;
  ball.vy += gravity;
  if(ball.y + ball.radius > H) {
    ball.y = H - ball.radius;
    ball.vy *= -bounceFactor;
  }
}

setInterval(update, 1000/60);
