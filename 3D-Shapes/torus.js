let detailX;

function setup(){
    createCanvas(100, 100, WEBGL);
    detailX = createSlider(3, 24, 3);
    detailX.position(0, height + 5);
    detailX.style('width', '100px');
}
  
function draw(){
    background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(20, 10, detailX.value(), 12);
}
