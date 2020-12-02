//Create variables here
var dog;
var database;
function preload()
{
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage(dog1);
  dog.scale=0.5;
  foodstock=database.ref('Food');
  foodstock.on("value",readstock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writestock(foodS);
  dog.addImage(dog2);
}
textSize(15);
fill("blue");
text("Note:Press UP_ARROW KEY",20,25);
  drawSprites();
  //add styles here

}
function readstock(data){
  foodS=data.val();
}

function writestock(x){
  database.ref('/').update({Food:x})
}


