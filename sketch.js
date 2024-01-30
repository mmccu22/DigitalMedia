function setup() {
  createCanvas(1000, 500);
  background(225);
  
}

function draw() {
  noStroke();


  
  fill(0,255,0);
  rect(5,5,215,100);
  stroke(0);
  strokeWeight(2);
  fill(255);
  circle(60,50,80,);
  square(130,15,70);

//Example 2
  noStroke();
  square(15,150,200);
  fill(0,255,0,100);
  circle(140,250,70);
  fill(0,0,255,100);
  circle(100,250,70);
  fill(200,0,0,100,100);
  circle(115,210,70);
  
 //Example 3

  fill(0);
 rect(300,5,215,100);
 fill(255,255,0);
 arc(350, 55, 80, 80, 10, -PI + - QUARTER_PI);
 fill('red');
 square(425, 20, 70, 60, 60, 0, 0);
 fill('white');
 circle(445,48,25,50);
 circle(475,48,25,50);
 fill('blue');
 circle(445,48,15,50);
 circle(475,48,15,50);

  //Example 4
  fill(0,0,129,255);
  square(300,150,200);
  fill('white');
  circle(400,250,150,0);
  fill('green');
  circle(400,250,140,0);
  stroke(600);
  strokeWeight(3);
  fill(252,8,7)
  drawStar(400,250,30,75,5);


  function drawStar(x,y,radius1,radius2,npoints){
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
  let sx = x + cos(a) * radius2;
  let sy = y + sin(a) * radius2;
  vertex(sx,sy);
  sx = x + cos(a + halfAngle) * radius1;
  sy = y + sin(a + halfAngle) * radius1;
  vertex(sx, sy);
  }
  endShape(CLOSE);
  }










}




