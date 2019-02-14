var x = 200;
var velx = 5;
var y = 200;
var vely = 10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostrar();
  moverx();
  botarX();
  movery();
  botarY();
  
 }
 
function mostrar() {
ellipse(x,y,50,50);
}

function moverx() {
   x = x + velx;
}

function movery() {
 y = y +vely;
}
  
function botarX() {
   if(x < 25){
    velx = velx*-1;
     }
if (x > 375){
  velx = velx*-1;
}
}
  
function botarY() {
    if(y < 25){
    vely = vely*-1;
     }
if (y > 375){
  vely = vely*-1;
} 
  }
