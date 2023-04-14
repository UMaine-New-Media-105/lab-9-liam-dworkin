//Liam Dworkin
//NMD 105
//April 12th, 2023

let someRandomBall = {
  x: 45,
  speedX: 2,
  y: 200,
  speedY: 2,
  color: "blue",
};

let secondBall = {
  x: 50,
  y: 100,
  speedX: 4,
  color: "orange"
}

let listOfBalls = [];

let colorList = ["blue", "purple", "orange", "red", "white", "teal"];


function setup() {
  createCanvas(400, 400);
  
  listOfBalls = [someRandomBall, secondBall];
  
  colorList[0]
  console.log("color is: " + colorList[0])

    colorList[1]
  console.log("color is: " + colorList[1])
  
    colorList[2]
  console.log("color is: " + colorList[2])
  
  for(let i = 0; i < 6; i++){
    let someColor = colorList[i]
    console.log("i is: " + i + " color is: " + someColor);
  }
  

}

function draw(){
  background(220);

  
//   drawSprite(someRandomBall.x, someRandomBall.y, someRandomBall.color);
//     someRandomBall.x = someRandomBall.x + someRandomBall.speedX;

//     if (someRandomBall.x > width || someRandomBall.x < 0) {
//       someRandomBall.speedX = someRandomBall.speedX * -1;
//     }
  
  /*completed the rest of the function for 'Y' using an added Y variable above in 'someRandomBall'. I then added in modifiers below containing the same code in order to accurately effect and guage the Y axis as well as X axis*/ 
  
  drawSprite(listOfBalls[0].x, listOfBalls[0].y, listOfBalls[0].color)
  listOfBalls[0].x = listOfBalls[0].x + listOfBalls[0].speedX;
  listOfBalls[0].y = listOfBalls[0].y + listOfBalls[0].speedY;
  
  if(listOfBalls[0].x > width || listOfBalls[0].x < 0){
    listOfBalls[0].speedX = listOfBalls[0].speedX * -1;
  }
  if(listOfBalls[0].y > height || listOfBalls[0].y < 0){
    listOfBalls[0].speedY = listOfBalls[0].speedY * -1;
  }

  
//     drawSprite(listOfBalls[1].x, listOfBalls[1].y, listOfBalls[1].color)
//   listOfBalls[1].x = listOfBalls[1].x + listOfBalls[1].speedX;
  
//   if(listOfBalls[1].x > width || listOfBalls[1].x < 0){
//     listOfBalls[1].speedX = listOfBalls[1].speedX * -1;
//   }

  
  
}

function drawSprite(x, y, color) {
  fill(color);
  ellipse(x, y, 50);
}
