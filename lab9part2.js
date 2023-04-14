function setup() {
  createCanvas(960, 540);

  balls = [];

  //Creates 10 balls

  for (let ballsDrawn = 0; ballsDrawn < 10; ballsDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisHue = random(360);

    balls[ballsDrawn] = new ball(thisX, thisY, thisHue);
  }
}

function draw() {
  background("black");

  /* I stole this from the code from our in class exercise with the dots, I reworked it to contain Y axis constrains in the 'move' section for the object 'ball' under its class. That way when teh for loop calls it back using the "balls" array and "balls[ballsDrawn]" it has a function that bounces off all sides. I did re-write the code, changing a lot of the variable names but keeping a relatively similar convention*/

  /* I then made sure it produced 15 of the balls as well as kept the random hue from before in the first loop to keep the color varying. It might not be exactly what you wanted but it does contain object and class and utilization of it*/

  //In part 3 I will produce more balls woop!

  for (let ballsShown = 0; ballsShown < balls.length; ballsShown++) {
    balls[ballsShown].move();
    balls[ballsShown].show();
  }
}

class ball {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 70%, 80%, 1)";
    this.addX = 5;
    //Added this for a Y parameter
    this.addY = 5;
  }
  move() {
    this.x = this.x + this.addX;
    //Addition of 'this.addY'
    this.y = this.y + this.addY;
    let ballIsTooFarLeft = this.x < 0;
    let ballIsTooFarRight = this.x > width;
    if (ballIsTooFarLeft || ballIsTooFarRight) {
      this.addX = -this.addX;
    }
    //Functions as the Y axis constraint and movement
    let ballIsTooFarUp = this.y < 0;
    let ballIsTooFarDown = this.y > height;
    if (ballIsTooFarUp || ballIsTooFarDown) {
      this.addY = -this.addY;
    }
  }
  show() {
    push();
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 50);
    pop();
  }
}
