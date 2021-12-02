function setup(){
    createCanvas(600, 600, WEBGL);
}

function draw(){
    noStroke();
    background(0);
    const dirY = (mouseY / height - 0.5) * 12;
    const dirX = (mouseX / width - 0.5) * 12;
    directionalLight(204, 204, 204, -dirX, -dirY, -1);
    sphere(200);
}
