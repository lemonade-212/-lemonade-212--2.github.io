var x=0;
var y=0;
var w=0;
var h=0;

function setup() {
  createCanvas(1600, 900);
  background(255, 239, 215);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES)
  
}

function draw() {
  
  {let gradient = drawingContext.createLinearGradient(
  0, 40, 500, 40);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(224, 70, 62, 100)); //blue

  drawingContext.fillStyle=gradient;
  rect(0,59,500,40);
  
  x+=0.0378;
  y+=0.0112;
  w+=0.0076;
  }

  {let gradient = drawingContext.createLinearGradient(
  40, 99, 40, 230);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(48, 98, 99, 100)); //yellow

  drawingContext.fillStyle=gradient;
  rect(40,99,40,150);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
    40, 249, 460, 329);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(48, 98, 99, 100)); //yellow

  drawingContext.fillStyle=gradient;
  rect(40,249,460,40);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
  540, 0, 580, 364);
  gradient.addColorStop(1, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(0, color(224, 70, 62, 100)); //blue

  drawingContext.fillStyle=gradient;
  rect(540,0,40,364);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
  580, 149, 1600, 189);
  gradient.addColorStop(1, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(0, color(224, 70, 62, 100)); //blue

  drawingContext.fillStyle=gradient;
  rect(580,149,1020,40);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
  580, 149, 1600, 189);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(0, 73, 93, 100)); //red

  drawingContext.fillStyle=gradient;
  rect(160,440,1477,40);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
  160, 340, 200, 440);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(0, 73, 93, 100)); //red

  drawingContext.fillStyle=gradient;
  rect(160,340,40,140);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
 930, 340, 970, 440);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(0, 73, 93, 100)); //red

  drawingContext.fillStyle=gradient;
  rect(930,340,40,140);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  {let gradient = drawingContext.createLinearGradient(
    700, 440, 1160, 440);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(48, 98, 99, 100)); //yellow

  drawingContext.fillStyle=gradient;
  rect(700,440,460,40);
  
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }
  
  //fill(48, 98, 99, 100);
  triangle(950,480,800,680,1100,680);
  
  {let gradient = drawingContext.createLinearGradient(
  1300, 0, 1340, 700);
  gradient.addColorStop(0, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(1, color(165, 100, 81, 100)); //green

  drawingContext.fillStyle=gradient;
  rect(1300,0,40,700);
  
  x+=0.378;
  y+=0.112;
  w+=0.076;
  }

  {let gradient = drawingContext.createLinearGradient(
  1100, 550, 1300, 550);
  gradient.addColorStop(1, color(x+35, y+14, w+100, 100)); //background
  gradient.addColorStop(0, color(165, 100, 81, 100)); //green

  drawingContext.fillStyle=gradient;
  rect(1100,550,200,40);
  
  x+=0.0378;
  y+=0.0112;
  w+=0.0076;
  }
  
  
  
  ellipse(1250,810,150,150);
  //fill(165,100,81,100);

}