//Create variables here
var dog =createSptite();
var happyDog=createSptite();
var database=createSptite();
var foodS=createSptite();
var foodStock=createSptite();

function preload()
{
  dogImg=loadImage("Images/Dog.png");
  dogImg1=loadImage("Images/happy dog.png"); }

if(keyWentDown(UP_ARROW)){
 wrtieStock(foodS);
 dog.addImage(dogHapppy);
}

function setup() {
	createCanvas(500, 500);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);


  addFood=createButton("Add Food");
  addfood.position(800,95);
  addFood.mousePressed(addFoods);

  fedTime=database.ref("FeedTime");
  fedTIme.on("value",function(data){
  lastFed=data.val();
  })

  readState=database.ref("gameState");
  readState.on("value",function(data){
  gameState=data.val();
  });

  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();

  }else{
  feed.show();
  addFood.show;
  dog.addImage(sadDog);
  }

  currentTIme=hour();
  if(currentTime==(lastFed+1)){
    update("Playing");
    foodObj.garden();
  }else if (currentTime==(lastFed+2)){
    update("Sleeping");
    foodObj.bedroom();
  }else if(currentTime>(lastFed+2)&&currentTime<=(lastFed+4)){
    update("Bathing");
    foodObj.washroom();
  }else{
    update("Hungry");
    foodObj.display();
  }
}


function draw() {  
fill(255,255,254)
textSize(15);
if (lastFed>=12){
  ("Last Feed : " + lastFed%12 + PM,350,30);
}else if (lastFed==0){
text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed : "+ lastFed + "AM",350,30)
}
  drawSprites();
  //add styles here
}

function readStock(data){
foodS-data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  databar.ref("/").update({
    
  })
}

function feedDog(){
dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStack()-1);
database.ref("/").update({
Food:foodObj.getFoodStack(),
FeedTime:hour()
})
}

function addFoods(){
foodS++;
database.ref("/").update({
Food:foodS
})

}

display();{
  var x=80,y=100;

  imageMode(CENTER);
  image(tihs.image,720,220,70,70);


  if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++){
if(i%10==0){
x=80;
y=y+50;
}
image(this.image,x,y,50,50);
x=x+30;

}
}
}

bedroom();{
  background(bedroom,550,500);
}

garden();{
background(garden,550,500);
}

washroom();{
  background(washroom,550,500);
  }