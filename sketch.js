function setup() {
    createCanvas(600, 600);
     background('#000000');
  }
  
  function draw() {
   stroke(blue);
    fill(red);
    
    if(mouseIsPressed){
     rect(mouseX, mouseY, 20, 35);
    }
    
  }
  