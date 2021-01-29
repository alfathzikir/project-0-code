/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y;
let watermelon_1;
let watermelon_2;
let guy1, guy2;


function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;

  watermelon_1 = loadImage("../assets/watermelon.png");

  myButton = new Clickable();     //Create button
  myButton.locate(x/2, 20);        //Position Button
  myButton.text = "EXPLOSION!";
  myButton.onPress = function(){  //When myButton is pressed
    this.color = "#AAAAFF";       //Change button color
    alert("testttt!");                //Show an alert message
  }
  




}

function draw() {

  image(watermelon_1, 0, height / 2, watermelon_1.width / 2, watermelon_1.height / 2);
  
  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

  myButton.draw();
}

