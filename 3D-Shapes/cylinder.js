let detailX;

function setup(){
    createCanvas(100, 100, WEBGL);
    detailX = createSlider(3, 24, 3);
    detailX.position(0, height + 5);
    detailX.style('width', '100px');
}
  
function draw(){
    background(200);
    rotateY(millis() / 1000);
    cylinder(20, 50, detailX.value(), 1);
}
